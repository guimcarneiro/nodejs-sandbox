import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const getGithubFollowersByUsername = async (username, perPage = 10, page = 1) => {
    return await axios.get(`${GITHUB_API_URL}/users/${username}/followers`,
        {
            params: {
                'per_page': perPage,
                'page': page
            },
            headers: {
                'accept': 'application/vnd.github.v3+json'
            }
        }
    );
}