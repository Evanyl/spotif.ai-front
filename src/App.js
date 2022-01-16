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

  useEffect(() => {
    if (window.location.hash) {
      const {access_token, expires_in, token_type} = getReturnedParamsFromSpotifyAuth(window.location.hash);
      setLogged_in(true);
    }
  });

  let elementToRender;
  if (!logged_in) {
    elementToRender = <LoginButton></LoginButton>
  } else if (logged_in && prompt === "") {
    elementToRender = <Prompt handle={setPrompt}></Prompt>
  } else {
    elementToRender = <p>{prompt}</p>
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
