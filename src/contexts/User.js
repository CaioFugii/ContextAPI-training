import React, { useState } from "react";
import { getUsers as getUsersService } from "../services/api";

const initialState = {
  users: [],
  error: "",
  loading: false,
  count: 0,
  getUsers: () => {},
  addUser: user => {},
  updateUser: (id, user) => {},
  removeUser: id => {}
};

const UserContext = React.createContext(initialState);

export const Users = ({ children }) => {
  const [users, setUsers] = useState({
    users: [],
    error: "",
    loading: false,
    count: 0
  });

  const getUsers = async () => {
    const response = await getUsersService();
    setUsers({ ...users, users: response });
  };

  const value = { ...users, getUsers };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
