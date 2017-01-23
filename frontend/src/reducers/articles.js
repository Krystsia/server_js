let initialState = []

export default function articles(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_ARTICLES':
      return action.payload;
    case 'ADD_ARTICLE':


      console.log(action.payload.articles);
      console.log(state);
      return [action.payload, ...state];
    default:
      return state
  }

  return state
}
