const initialState = {
  posts: {}
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      const { postId, comment } = action.payload;
      // Проверяем, существует ли объект поста с данным postId
      if (!state.posts[postId]) {
        // Если объект поста не существует, создаем его с пустым массивом комментариев
        const newState = {
          ...state,
          posts: {
            ...state.posts,
            [postId]: {
              comments: [comment] // Создаем новый массив с комментарием
            }
          }
        };
        console.log("New state:", newState.posts); // Выводим обновленный объект posts в консоль
        return newState;
      }
      // Если объект поста уже существует, добавляем комментарий к существующему списку комментариев
      const updatedState = {
        ...state,
        posts: {
          ...state.posts,
          [postId]: {
            ...state.posts[postId],
            comments: [...state.posts[postId].comments, comment]
          }
        }
      };
      console.log("Updated state:", updatedState.posts); // Выводим обновленный объект posts в консоль
      return updatedState;
    default:
      return state;
  }
};

export default commentsReducer;
