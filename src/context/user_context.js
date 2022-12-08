import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { PROD_ROOT } from "../url";
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const DEV_URL = "/api/v1/auth";
  const GROUP_URL = "/api/v1/group";
  const PROD_URL = `${PROD_ROOT}${DEV_URL}`;
  const GROUP_ENDPOINT = `${PROD_ROOT}${GROUP_URL}`;
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState({
    data: {},
    nb_groups: 0,
  });
  // Group query
  const createGroup = async (userInput) => {
    try {
      const { data } = await axios.post(`${GROUP_ENDPOINT}`, userInput);
      setGroups(data);
    } catch (e) {
      console.log(e);
    }
  };
  const saveUser = (user) => {
    setUser(user);
  };
  const removeUser = () => {
    setUser(null);
  };
  const logout = async () => {
    try {
      await axios.delete(`${DEV_URL}/logout`);
      removeUser();
    } catch (error) {
      console.log(error);
    }
  };
  const forgotPassword = async () => {};
  const resetPassword = async () => {};
  const activeAccount = async (info) => {};

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`/api/v1/users/showMe`);
      saveUser(data.user);
    } catch (error) {
      removeUser();
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        saveUser,
        forgotPassword,
        resetPassword,
        activeAccount,
        createGroup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
