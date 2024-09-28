// Hao Phong Le
// N01605830

const getUserPromise = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        resolve(fetch('http://dummyjson.com/users'));
    } else {
        reject('error')
    }
});

// Implement Promise
export const getUserInfoPromise = () => {
    return getUserPromise
        .then(response => response.json())
        .then(data => {
            const objectUserPromise = data.users;
            const userInfo = objectUserPromise
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

            const groupedByCountry = userInfo.reduce((group, user) => {
                const country = user.country;
                if (!group[country]) {
                    group[country] = [];
                }
                group[country].push(user);
                return group;
            }, {});
            console.log(groupedByCountry);
            return groupedByCountry;
        })
        .catch(err => console.log(err));
}

