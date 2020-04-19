import { get } from 'lodash';
import faker from 'faker';
export const usersBuilderForUI = (data) => ({
  id: data.id || 0,
  name: data.name || '',
  companyName: get(data, 'company.name', ''),
  image: faker.image.avatar(),
});
