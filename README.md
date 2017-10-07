# Spotify Lyrics
Hello music lovers, this tool will fetch the lyrics for the song you're currently playing on spotify and display it on a webpage. Once you change the song you're currently playing, simply refresh the page and you'll instantly get the lyrics of the new song being played. You don't have to use your PC to play the music, you can use spotify on your phone and the tool will still detect the song as long as your phone is connected to the internet.

## Installation
Follow those (hopefully) simple steps to set up Spotify Lyrics:

1. Install [NodeJS](https://nodejs.org/en/).
2. [Register a new application](https://developer.spotify.com/my-applications) on Spotify using your login details:
   Choose a silly name and description for the application. Notice the fields ClientID and Client Secret. We will need those soon. 
3. While in the same window (Spotify Application), add the following url to Redirect URIs: `http://localhost:3000/callback`
4. [Download](https://github.com/AbdullahWali/Spotify-Lyrics/archive/master.zip) and extract this repository.
5. Open the Config.js file and change ClientID and ClientSecret to the values obtained earlier. (keep them in quotes).
6. Open the command line in the same folder (you can do that by clicking on the address bar, writing `cmd` and clicking Enter) and run this command:
`npm install`.
7. YOU'RE GOOD TO GO!! in the CMD write `npm start` to run Spotify Lyrics.

## Usage
After setting it up for the first time, you only need to use `npm start` from the command line (terminal for MAC/Linux) to run the tool.

Enjoy!!

Open an issue in github if you encounter any bug!


