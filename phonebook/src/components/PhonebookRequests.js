import axios from "axios";
const url = "http://localhost:3001/persons";

const getData = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};

const addToPhonebook = (newContact) => {
  const request = axios.post(url, newContact);
  return request.then((response) => response.data);
};

const editContact = (id, newContact) => {
  const request = axios.put(`${url}/${id}`, newContact);
  return request.then((response) => response.data);
};

const removeContact = (id) => {
  return axios.delete(`${url}/${id}`);
};

export default {
  getData,
  addToPhonebook,
  removeContact,
  editContact,
};
