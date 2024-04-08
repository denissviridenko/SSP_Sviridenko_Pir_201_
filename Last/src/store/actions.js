export const addComment = (postId, comment) => ({
  type: 'ADD_COMMENT',
  payload: { postId, comment }
});