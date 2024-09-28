// Hao Phong Le
// N01605830

import {getUserInfo} from "./users.js";
import {getUserInfoPromise} from "./users2.js";

// Function to print out the data by calling the function from two imported file
const printUserInfo = async () => {
    const usersGroupedByCountry = await getUserInfo();
    console.log(usersGroupedByCountry);
};

const printUserInfoPromise = () => {
    return getUserInfoPromise();
}

// main function to call and execute the print functions
const main = async () => {
    await printUserInfo();
    await printUserInfoPromise();
};

main();



