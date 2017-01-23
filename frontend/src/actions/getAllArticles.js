export function getAllArticles(articles) {

  return {
    type: 'GET_ALL_ARTICLES',
    payload: articles
  }
}
