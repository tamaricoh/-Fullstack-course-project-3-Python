// @author Tamar Cohen
import axios from "axios";

const getNameAndEmail = async (id) => {
  return axios.get("https://jsonplaceholder.typicode.com/users/" + id);
};
const getTodos = async (id) => {
  return await axios.get(
    "https://jsonplaceholder.typicode.com/todos?userId=" + id
  );
};

const getPosts = async (id) => {
  return await axios.get(
    "https://jsonplaceholder.typicode.com/posts?userId=" + id
  );
};

export default { getNameAndEmail, getTodos, getPosts };
// @author Tamar Cohen
