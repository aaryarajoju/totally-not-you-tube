# TotallyNotYouTube

A YouTube client/clone made using React, Redux, and the YouTube Data API

## What is the project?

Long story short - it is just another YouTube clone, but it is quite functional, hence making it a working client.

You can get video recommendations, see videos and comment on the videos, see your subscriptions, search for videos, etc. etc.

## Why did I make this project?

I have been making static websites, without any js frameworks for years now, but I wanted to get into using js frameworks (i know that react is technically a library and not a framework).

And, I figured that making a clone website would probably be a good place to start.

Using the YouTube Data API was a huge annoyance, but I didn't want to make just a clone, instead I wanted it to actually work (i.e. a client).

As to why I chose React, I literally just went to stackoverflow's developer survey and saw which framework was `Most Loved`.

## What did I learn from making the project?

- the YouTube Data API is one of the worst structured APIs
- React is actually quite fun, and really useful
- Redux actually does solve a lot of runtime errors

more seriously, actual learnings:

- uses and advantages of React and other js frameworks
- benefits of using a state management tool, such as Redux
- CI/CD using GitHub actions

## How does the project work?

- The webpage is loaded using React
- `Login with Google` authentication works through firebase
- The data is received from the YouTube Data API
- All the data is stored in a Redux Store - the data includes the user data, video recommendations, comments, etc. etc.
- All the state data is retrieved and the components are updated to show the data

## How is the project made?

**TODO**: complete this section

## What technologies does the project use?

- React.JS
- Redux
- YouTube Data API
- Firebase

## Things ToDo (and Done)

- [x] Login and authentication with firebase
- [x] Home Screen with infinite scrolling video recommendations
- [x] Watch Screen with comments section and video recommendations
- [x] Search Screen
- [x] Subscriptions Screen
- [x] Channel Screen
- [ ] Add `Liked Videos` Screen
- [ ] Add `History` Screen
- [ ] Add `Playlists`
- [ ] Firebase Hosting (tried it, doesn't work properly)

---

Code Licensed by [AARYA RAJOJU](https://github.com/aaryarajoju) under an [MIT License](./LICENSE)
