import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000";
const SPACE_DELIMETER = "%20";
const SCOPES = ["playlist-read-private", "playlist-modify-public", "playlist-modify-private", "user-library-read"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMETER);
const RESPONSE_TYPE = "code";

const LoginButton = () => {
    const handleLogin = () =>  {
        window.location = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    }

    const button = "flex max-w-xs items-center justify-center text-base font-medium rounded-md text-black bg-green-300 hover:bg-green-400 px-8 py-3 md:py-4 md:text-lg md:px-10";

    return (
        <div>
            <button onClick={handleLogin} className={button}><FontAwesomeIcon icon={faSpotify} size="lg"/> <div className="px-1"></div>Log in with Spotify</button>
        </div>
    )
}

export default LoginButton;