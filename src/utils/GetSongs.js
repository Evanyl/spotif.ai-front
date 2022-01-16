const handleSongs = (prompt, token, setItems, setLoaded) => {
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
    .then((res) => res.json())
    .then((res) => {
        console.log(res); 
        setItems(res);
        setLoaded(true);
    })
    .catch((err) => {
        console.log(err);
    });
}

export default handleSongs;