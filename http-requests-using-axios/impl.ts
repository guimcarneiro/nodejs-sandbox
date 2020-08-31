import { getGithubFollowersByUsername } from './githubApi';

export const getYourFollowers = async (username) => {
    const { data } = await getGithubFollowersByUsername(username);
    return data;
}