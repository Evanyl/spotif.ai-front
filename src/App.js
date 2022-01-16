import { useEffect, useState } from 'react';
import LoginButton from './components/LoginButton';
import Prompt from './components/Prompt';

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

function App() {
  const [logged_in, setLogged_in] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (window.location.hash) {
      const {access_token, expires_in, token_type} = getReturnedParamsFromSpotifyAuth(window.location.hash);
      setLogged_in(true);
    }
  });

 
  
const handleSongs = async (prompt) => {
  let params = {
      "prompt": prompt, 
      "token": process.env.REACT_APP_CLIENT_ID
  }
  let url = "http://localhost:8000/api/dummy-post/"; 
  console.log(url);
  fetch(url, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    })
    .then((res) => res.json())
    .then((res) => {
        setSongs(res.songs);
        console.log("songs: " + songs + "resp: " + res.songs) 
    })
    .catch((err) => {
        console.log("error");
    });
}



  let elementToRender;
  if (!logged_in) {
    elementToRender = <LoginButton></LoginButton>
  } else if (logged_in && prompt === "") {
    elementToRender = <Prompt handlePrompt={setPrompt} getSongs={handleSongs}></Prompt>
  } else {
    elementToRender = <p>{songs}</p>
  }

  return (
    <div className="h-full w-full flex flex-col justify-between items-center relative">
      <div className="flex flex-col max-w-xl w-screen mx-auto h-screen">
        <h1 className="text-5xl font-black text-left pt-8">Spotify AI</h1>
        <p className="text-lg py-4">Enter a prompt and find songs!</p>
          {elementToRender}
      </div>
    </div>
  );
}

export default App;
