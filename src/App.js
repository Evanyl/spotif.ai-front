import { useEffect, useState } from 'react';
import LoginButton from './components/LoginButton';
import Prompt from './components/Prompt';
import Results from './components/Results';
import About from './components/About';
import Title from './components/Title';

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

  const logout = () => {
    setLogged_in(false);
    setPrompt();
  }

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
  let about = <div></div>;
  if (!logged_in) {
    elementToRender = <LoginButton></LoginButton>;
    about = <About />;
  } else if (logged_in && prompt === "") {
    elementToRender = <Prompt handle={setPrompt}></Prompt>;
  } else {
    elementToRender = <Results prompt={prompt} handle={logout}></Results>;
  }

  return (
    <div className="h-full w-full flex flex-col justify-between items-center relative">

     <div className={`flex flex-col max-w-xl w-screen h-screen mx-auto ${logged_in && prompt !== "" ? "": "top-1/4 translate-y-1/4"}`}>
       <div className="pt-8" />
        <Title prompt={prompt}/>
          {elementToRender}
        <div className="p-2" />
        {about}
      </div>
    </div>
  );
}

export default App;
