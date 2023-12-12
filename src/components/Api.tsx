import axios from "axios";

const BASE_URL = "https://api.github.com/";

const GitHubApi = {
  getUserDetails: (username: string) => {
    return axios.get(`${BASE_URL}users/${username}`);
  }
};

export default GitHubApi;
