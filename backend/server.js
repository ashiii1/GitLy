require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
app.get('/auth/github', (req, res) => {
  const redirect_uri = 'https://git-ly.vercel.app/api/auth/github/callback';
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}`);
});
app.get('/api/auth/github/callback', async (req, res) => {
  const code = req.query.code;
  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    }, {
      headers: {
        accept: 'application/json',
      },
    });
    const accessToken = response.data.access_token;
    res.redirect(`https://git-ly.vercel.app?token=${accessToken}`);
  } catch (error) {
    console.error('Error during GitHub OAuth process:', error);
    res.status(500).send('Authentication failed');
  }
});
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
