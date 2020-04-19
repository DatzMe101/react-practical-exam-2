import faker from 'faker';
export const commentsBuilderForUI = (data) => ({
  id: data.id || 0,
  postId: data.postId || 0,
  name: data.name || '',
  email: data.email || '',
  body: data.body || '',
  image: faker.image.avatar(),
});
