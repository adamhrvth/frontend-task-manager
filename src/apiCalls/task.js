import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = "https://task-manager-qas2.onrender.com";

export const getTasks = async () => {
  try {
    const res = await axios.get(API_URL + "/api/tasks");
    return res;
  }
  catch (err) {
    return err;
  }
};

export const createTask = async (task) => {
  try {
    const res = await axios.post(API_URL + "/api/tasks/create", task);
    return res;
  }
  catch (err) {
    return err;
  }
};

export const getTask = async (id) => {
  try {
    const res = await axios.get(API_URL + `/api/tasks/${id}`);
    return res;
  }
  catch (err) {
    return err;
  }
};

export const updateTask = async (id, task) => {
  try {
    const res = await axios.put(API_URL + `/api/tasks/update/${id}`, task);
    return res;
  }
  catch (err) {
    return err;
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await axios.delete(API_URL + `/api/tasks/delete/${id}`);
    return res;
  }
  catch (err) {
    return err;
  }
};