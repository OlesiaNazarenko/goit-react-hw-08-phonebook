import axios from 'axios';

axios.defaults.baseURL = 'https://61c318579cfb8f0017a3e968.mockapi.io/api/v1';

export async function fetchContacts() {
  const data = await axios.get(`/contacts`).then(result => result.data);
  console.log(data);
  return data;
}
export async function addContact(data) {
  return axios.post('/contacts', data).then(res => res.data);
}

export async function deleteContact(id) {
  return axios.delete(`/contacts/${id}`).then(res => res.data);
}
