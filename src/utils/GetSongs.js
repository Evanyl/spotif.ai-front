const handleSongs = (prompts, setItems) => {
  /*let params = {
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
    });*/
    /*let items = [
        ["Flashing Lights", "https://i.scdn.co/image/ab67616d0000b2739bbd79106e510d13a9a5ec33"],
        ["Praise God", "https://i.scdn.co/image/ab67616d0000b273cad190f1a73c024e5a40dddd"],
        ["Through the Wire", "https://i.scdn.co/image/ab67616d0000b27325b055377757b3cdd6f26b78"],
        ["80 Degrees", "https://s3.amazonaws.com/filepicker-images-rapgenius/q4mimanyu0e"],
        ["Street Lights", "https://i.scdn.co/image/ab67616d0000b273346d77e155d854735410ed18"],
        ["Follow God", "https://i.scdn.co/image/ab67616d0000b2731bb797bbfe2480650b6c2964"],
        ["Gone", "https://i.scdn.co/image/ab67616d0000b273428d2255141c2119409a31b2"], 
        ["Fellas in Paris", "https://i.scdn.co/image/ab67616d0000b2734a767758e8ebe2443591c9fd"],
        ["Reborn", "https://i.scdn.co/image/ab67616d0000b273013c00ee367dd85396f79c82"],
        ["On Sight", "https://i.scdn.co/image/ab67616d0000b2731dacfbc31cc873d132958af9"],
        ["Lost in the World", "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f"],
        ["Saint Pablo", "https://i.scdn.co/image/ab67616d0000b2732a7db835b912dc5014bd37f4"],
        ["Ghost Town", "https://i.scdn.co/image/ab67616d0000b2730cd942c1a864afa4e92d04f2"]
    ]*/

    let items = [
        {
            "artist": "Kanye West",
            "name": "Flashing Lights",
            "external_url": "https://open.spotify.com/track/4b1PzI3GX8H6gLy6cFnfIG",
            "album_image": {
                "url": "https://i.scdn.co/image/ab67616d0000b2739bbd79106e510d13a9a5ec33",
            },
        },
        {
            "artist": "Kanye West",
            "name": "Praise God",
            "external_url": "https://open.spotify.com/track/4b1PzI3GX8H6gLy6cFnfIG",
            "album_image": {
                "url": "https://i.scdn.co/image/ab67616d0000b2739bbd79106e510d13a9a5ec33",
            },
        },
        {
            "artist": "Kanye West",
            "name": "Through the Wire",
            "external_url": "https://open.spotify.com/track/4b1PzI3GX8H6gLy6cFnfIG",
            "album_image": {
                "url": "https://i.scdn.co/image/ab67616d0000b2739bbd79106e510d13a9a5ec33",
            },
        },
        {
            "artist": "Kanye West",
            "name": "80 Degrees",
            "external_url": "https://open.spotify.com/track/4b1PzI3GX8H6gLy6cFnfIG",
            "album_image": {
                "url": "https://i.scdn.co/image/ab67616d0000b2739bbd79106e510d13a9a5ec33",
            },
        },
    ]

    setItems(items);
}

export default handleSongs;