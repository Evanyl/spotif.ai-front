import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "https://localhost:3000/";
const SPACE_DELIMETER = "%20";
const SCOPES = ["user-read-private", "user-read-email"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMETER);

const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashing = hash.substring(1);
    const paramsInUrl = stringAfterHashing.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
    }, {});

    return paramsSplitUp;
}

const LoginButton = () => {
    const handleLogin = () =>  {
        window.location = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    }

    useEffect(() => {
        if (window.location.hash) {
            console.log(getReturnedParamsFromSpotifyAuth(window.location.hash));
        }
    })

    const button = "flex max-w-xs items-center justify-center text-base font-medium rounded-md text-black bg-green-300 hover:bg-green-400 px-8 py-3 md:py-4 md:text-lg md:px-10";

    return (
        <div>
            <button onClick={handleLogin} className={button}><FontAwesomeIcon icon={faSpotify} size="lg"/> <div className="px-1"></div>Log in with Spotify</button>
        </div>
    )
}

export default LoginButton;