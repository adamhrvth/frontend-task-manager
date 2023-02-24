import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = "https://task-manager-qas2.onrender.com";

export const register = async (user) => {
  try {
    const res = await axios.post(API_URL + "/api/users/register", user);
    return res;
  }
  catch(err) {
    return err;
  }
};

export const login = async (user) => {
  try {
    const res = await axios.post(API_URL + "/api/users/login", user);
    return res;
  }
  catch(err) {
    return err;
  }
};

export const logout = async () => {
  try {
    const res = await axios.get(API_URL + "/api/users/logout");
    return res;
  }
  catch(err) {
    return err;
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get(API_URL + "/api/users/me");
    return res;
  }
  catch(err) {
    return err;
  }
};

export const updateUser = async (user) => {
  try {
    const res = await axios.put(API_URL + "/api/users/changesettings", user);
    return res;
  }
  catch(err) {
    return err;
  }
};

export const updatePassword = async (pwData) => {
  try {
    const res = await axios.put(API_URL + "/api/users/changepassword", pwData);
    return res;
  }
  catch(err) {
    return err;
  }
};

export const deleteUser = async () => {
  try {
    const res = await axios.delete(API_URL + "/api/users/delete");
    return res;
  }
  catch(err) {
    return err;
  }
};