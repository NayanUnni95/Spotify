# Spotify Client Web App

<!-- ![Website](https://img.shields.io/website?url=https%3A%2F%2Fspotify-gilt-ten.vercel.app%2F) -->

![GitHub repo size](https://img.shields.io/github/repo-size/NayanUnni95/Spotify) ![GitHub License](https://img.shields.io/github/license/NayanUnni95/Spotify)

This repository contains a Spotify Clone Web App built using ReactJS and the Spotify Web API. The app is designed for fetches data through a personal Spotify account. This project focuses on the frontend functionality, including data fetching, authentication, but does not include the music playback feature.

## Features

- User authentication using Spotify OAuth
- Fetching and displaying user playlists, albums, liked songs, artists, podcast details and tracks.
- Viewing track details
- Responsive design
- Modern UI with ReactJS

## Technology used

- ReactJS (JavaScript)
- Spotify Web API
- CSS (for styling)

## Installation

##### Prerequisites

- Node.js and npm installed on your machine
- A Spotify Developer account with a registered application

##### Steps

1. Clone the Repository

```bash
git clone https://github.com/NayanUnni95/Spotify.git
cd Spotify
```

2. Install Dependencies

###### Install the required dependencies using npm:

```bash
npm install
```

3. Create a Spotify Developer Account and Register an App

- Go to the [Spotify Developer Dashboard](https://developer.spotify.com/) and log in with your Spotify account.
- Click on "Create an App" and fill in the required details.
- Add http://localhost:3000/callback as a Redirect URI in your Spotify app settings.

4. Set Up Environment Variables

###### Create a .env file in the root directory of the project and add the following environment variables:

```js
VITE_CLIENT_ID=your_spotify_client_id
VITE_HOME_URL=http://localhost:3000/

```

5. Start development server

```bash
npm run dev
```

###### This will start the development server and open the app in your default web browser.

### Developer Commands

###### Prettier:

```bash
npx prettier --write <filename>
```

###### Preview:

```bash
npm run preview
```

###### Production Build:

```bash
npm run build
```

###### Run Production Build:

```bash
npm install -g http-server;
http-server dist
```

### Usage

1. Authentication

- On the login page, click the "Login" button.
- You will be redirected to Spotify's login page. Log in with your Spotify credentials and authorize the app.

2. Browse Playlists

- After logging in, you will be redirected back to the app.
- You can now view your playlists, track details, and user profile information.

### Acknowledgements

- [Spotify Web API](https://developer.spotify.com/documentation/web-api)
- [ReactJS](https://react.dev/)
- [Axios](https://axios-http.com/)

### License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
