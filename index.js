const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const options = {
  method: 'GET',
  url: 'https://alien-pickup-line.p.rapidapi.com/alien_pickup_line',
  headers: {
    'X-RapidAPI-Key': 'b38444b5b7mshc6ce6bcd5c9e446p154fa1jsn7bbcfb025b3b',
    'X-RapidAPI-Host': 'alien-pickup-line.p.rapidapi.com'
  }
};

app.get('/kshitiz', async (req, res) => {
  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
