import httpService from './httpService';
import { commentsBuilderForUI } from '../mappers/comment';
import { jsonPlaceholderResourceUrl } from '../config.json';

export const getCommentsByPostId = (postId) => {
  return httpService
    .get(`${jsonPlaceholderResourceUrl}/comments?postId=${postId}`)
    .then(({ data = [] }) => data.map(commentsBuilderForUI));
};

export default {
  getCommentsByPostId,
};
