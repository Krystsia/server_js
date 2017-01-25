import React, { PropTypes, Component } from 'react';

import './article.scss';

export default class Article extends Component {
  render() {
    const { title, description, publishedAt, username, urlToImage } = this.props.article;
    const wholePublishedDate = new Date(publishedAt);
    const publishedDate = ` ${wholePublishedDate.getFullYear()}/${wholePublishedDate.getMonth()}/${wholePublishedDate.getDate()} `
    return <article>
              <h2 className="title">{title}</h2>
              <div className="article-image">
                <img  src={urlToImage} />
              </div>
              <p className="article-description">{description}

              </p>
              <footer>
                <span>Published at {publishedDate}</span>
                <span>Published by {username}</span>
              </footer>
            </article>
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired
  })
}
