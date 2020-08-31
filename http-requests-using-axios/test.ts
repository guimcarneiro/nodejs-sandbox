import { getYourFollowers } from './impl';

const GITHUB_USERNAME = 'guimcarneiro';

const printMyFollowers = async (username) => {
    const myFollowers = await getYourFollowers(username);

    console.log(`${username} followers: `, myFollowers);
}

printMyFollowers(GITHUB_USERNAME);