import httpService from './httpService';

import { jsonPlaceholderResourceUrl } from '../config.json';

export const getPostsPerUser = (userId) => {
  return httpService.get(
    `${jsonPlaceholderResourceUrl}/posts?userId=${userId}`
  );
};

export const getPostById = (postId) => {
  return httpService.get(`${jsonPlaceholderResourceUrl}/posts/${postId}`);
};

export const setPost = (post) => {
  return httpService.post(`${jsonPlaceholderResourceUrl}/posts`, post);
};
export const deletePost = (postId) => {
  return httpService.delete(`${jsonPlaceholderResourceUrl}/posts/${postId}`);
};

export default {
  getPostsPerUser,
  getPostById,
  setPost,
  deletePost,
};
