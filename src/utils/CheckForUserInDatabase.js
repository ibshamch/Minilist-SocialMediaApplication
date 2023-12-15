const CheckForUserInDatabase = (username, password, database) => {
  const user = database.find((user) => {
    return user.username === username && user.password === password;
  });

  return Boolean(user);
};

export { CheckForUserInDatabase };
