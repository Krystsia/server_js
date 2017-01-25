let initialState = "";

export default function filterArticles(state = initialState, action) {
  switch (action.type) {

    case 'FIND_ARTICLES':
      return action.payload;

    default:
      return state;
  }
}
