import httpService from './httpService';
import { usersBuilderForUI } from '../mappers/user';
import { jsonPlaceholderResourceUrl } from '../config.json';

export const getUsers = () => {
  return httpService
    .get(`${jsonPlaceholderResourceUrl}/users`)
    .then(({ data = [] }) => data.map(usersBuilderForUI));
};

export default {
  getUsers,
};
