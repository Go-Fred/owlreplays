# Overwatch League Replay

Check the [live version](http://www.owlreplay.com/)!

Overwatch League Replay is a website allowing you to watch the replays of the latest games of the 2 major Overwatch tournaments published on Twitch: the Overwatch League and the World Cup. The videos are grouped with other videos posted at the same time on Twitch (today, yesterday, last week...).

The app is built with React for front-end and Node.js for the back-end. An Express app running on a server calls Twitch API to retrieve the list of videos depending on the selected championship (OWL or World Cup) and does a bunch of post processing on the videos. On the front-end side, each Video Id is passed as props to its related card (see the Group and Twitch Card components for details). When the user selects a video to watch, the props is passed to the VideoPreview component in charge of loading the right Twitch iframe.

![OWL Replay screenshot](https://github.com/Go-Fred/owlreplays/raw/master/OWL-screenshot.png)


All contributions and suggestions are welcomed. Feel free to open a PR with a nice description that I can review :D.