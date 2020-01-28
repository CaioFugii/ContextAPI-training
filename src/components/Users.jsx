import React, { useContext, Fragment } from "react";

import UserContext from "../contexts/User";

const UsersPage = () => {
  const { users, getUsers } = useContext(UserContext);

  return (
    <Fragment>
      <ul>
        {users.map(user => (
          <li>{user.first_name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Buscar usuários</button>;
    </Fragment>
  );
};
export default UsersPage;
