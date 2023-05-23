import axios from 'axios';

const http = axios.create({ baseURL: 'http://localhost:3000/api' });

export const insertCompany = async (company) => {
  const res = await http.post('/companies', company);
  return res.data;
};

export const getCompanies = async () => {
  const res = await http.get('/companies');
  return res.data;
};

export const getCompanyById = async (companyId) => {
  const res = await http.get(`/companies/${companyId}`);
  return res.data;
};

export const updateCompany = async (companyId, company) => {
  const res = await http.put(`/companies/${companyId}`, company);
  return res.data;
};

export const removeCompany = async (companyId) => {
  const res = await http.delete(`/companies/${companyId}`);
  return res.data;
};
