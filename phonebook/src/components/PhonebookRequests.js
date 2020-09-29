import axios from "axios";
const url = "http://localhost:3001/phonebook";

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
  const request = axios.delete(`${url}/${id}`);
  return request.then((response) => response.data).catch((error) => error);
};

export default {
  getData,
  addToPhonebook,
  removeContact,
  editContact,
};
