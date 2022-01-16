const handleSongs = (prompt, token, setItems) => {
  let params = {
      "phrase": prompt, 
      "token": token,
      "limit": 50
  };
  console.log(JSON.stringify(params));
  let url = "http://localhost:8000/api/create"; 
  fetch(url, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    })
    .then((res) => console.log(res))
    .then((res) => res.json())
    .then((res) => {
        console.log(res) 
        setItems(res);
    })
    .catch((err) => {
        console.log(err);
    });

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