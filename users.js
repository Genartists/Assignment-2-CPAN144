// Hao Phong Le
// N01605830

export const getUser = () => {
    return fetch("http://dummyjson.com/users")
        .then(response => response.json())
        .catch(err => console.log(err))
}

// Implement using async await
export const getUserInfo = async () => {
    try {
        const data = await getUser();
        const objectUser = data.users
        const userInfo = objectUser
            .filter((userInfo) => userInfo.height >= 170 && userInfo.height <= 190)
            .filter((userInfo) => userInfo.weight >= 60 && userInfo.weight <= 80)
            .map((userInfo) => ({
                username: userInfo.username,
                email: userInfo.email,
                phone: userInfo.phone,
                height: userInfo.height,
                weight: userInfo.weight,
                country: userInfo.address.country,
            }))
            .sort((a, b) => a.height - b.height);

        return userInfo.reduce((group, user) => {
            const filterCountry = user.country;
            if (!group[filterCountry]) {
                group[filterCountry] = [];
            }
            group[filterCountry].push(user);
            return group;
        }, {});
    } catch (err) {
        console.log(err);
    }
}








