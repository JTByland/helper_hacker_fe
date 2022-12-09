import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { PROD_ROOT } from "../url";
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const DEV_URL = "/api/v1/auth";
  const GROUP_URL = "/api/v1/groups";
  const POST_URL = "/api/v1/posts";
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState(null);
  const [posts, setPosts] = useState(null);
  // Post
  const savePost = (posts) => {
    setPosts(posts);
  };
  const getPostByGroupName = async (group_name) => {
    try {
      const { data } = await axios.post(
        `https://hub-project.onrender.com/getPostName`,
        {
          group_name,
        }
      );
      savePost(data.posts);
    } catch (e) {
      console.log(e);
    }
  };
  const getAllPosts = async () => {
    try {
      const { data } = await axios.get(`/api/v1/posts`);
      savePost(data.posts);
    } catch (e) {
      console.log(e);
    }
  };
  // Groups
  const saveGroup = (group) => {
    setGroups(group);
  };
  const getAllGroups = async () => {
    try {
      const { data } = await axios.get(`${GROUP_URL}`);
      saveGroup(data.groups);
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
  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        saveUser,
        forgotPassword,
        resetPassword,
        activeAccount,
        getAllGroups,
        getAllPosts,
        groups,
        getPostByGroupName,
        posts,
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
