import axios from 'axios';
axios.defaults.baseURL = 'https://61c318579cfb8f0017a3e968.mockapi.io/api/v1';
export async function fetchContacts() {
  const data = await axios.get(`/contacts`).then(result => result.data);
  console.log('data 1 all contacts');
  return data;
}
export async function addContact(data) {
  console.log('data 2 add contacts');
  return axios.post('/contacts', data).then(res => res.data);
}
export async function deleteContact(id) {
  console.log('data 3 deleted contacts');
  return axios.delete(`/contacts/${id}`).then(res => res.data);
}
