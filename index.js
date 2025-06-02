import express from "express";
import axios from "axios";

const app = express();
const PORT = 4000;

app.get('/', async (req, res) => { 
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/jokes/random');
    const joke = await response.data;
    console.log(joke, "Hello data");
    res.json({
      setup: joke.setup,
      punchline: joke.punchline
    });
  } catch (error) {
    console.error('Error fetching joke:', error.message);
    res.status(500).json({ error: 'Failed to fetch joke. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
