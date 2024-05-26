const axios = require('axios');

const getUserProfileAndRepos = async (req, res) => {
  const { username } = req.params;

  try {
    const userRes = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    const userProfile = userRes.data;

    const repoRes = await axios.get(userProfile.repos_url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    const repos = repoRes.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    res.json({ userProfile, repos });
  } catch (error) {
    console.error('Error fetching data from GitHub:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from GitHub' });
  }
};

module.exports = {
  getUserProfileAndRepos,
};
