'use-strict';

let SpotifyWebApi = require('spotify-web-api-node');

let scopes = ['user-read-playback-state'],
    redirectUri = 'http://localhost:3000/callback',
    clientId = '********************************',
    state = 'spotify_auth_state',
    clientSecret = '********************************';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
let spotifyApi = new SpotifyWebApi({
  redirectUri : redirectUri,
  clientId : clientId,
  clientSecret : clientSecret
});

// Create and open the authorization URL
let authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
console.log(authorizeURL);
let opn = require('opn');
opn(authorizeURL);


let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors')
let app = express();
let router = express.Router();

let port = 3000;

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//now we can set the route path & initialize the API
router.get('/', function(req, res) {

	// Get the authenticated user
spotifyApi.getMyCurrentPlaybackState()
  .then(function(data) {
    res.send(data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
});

router.get('/callback', function(req, res) { 
	let code  = req.query['code'];

	spotifyApi.authorizationCodeGrant(code)
	  .then(function(data) {
	    console.log('The token expires in ' + data.body['expires_in']);
	    console.log('The access token is ' + data.body['access_token']);
	    console.log('The refresh token is ' + data.body['refresh_token']);

	    // Set the access token on the API object to use it in later calls
	    spotifyApi.setAccessToken(data.body['access_token']);
	    spotifyApi.setRefreshToken(data.body['refresh_token']);
	  }, function(err) {
	    console.log('Something went wrong!', err);
	  });

	res.json(req.query);
})




app.use('/', router);
//starts the server and listens for requests
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});