import userData from '../../MOCK_DATA.json';

export default {
  createUser: args => {
    console.log(args);
    const user = { ...args.userInput, id: userData.length + 1 };
    userData.push(user);
    return user;
  },
  users: args => {
    console.log(args);
    return userData;
  },
};
