import React, { Component, PropTypes } from 'react';
import Article from '../../components/article/article';
import { connect } from 'react-redux';

import getAllArticles from '../../actions/getAllArticles';
import './main.scss';

class Main extends Component {
  getData() {
      this.props.getAllArticles();
  }
  render() {
    if(this.props.articles.length === 0) {
      this.getData();
      return <main>
                <div className="loader"></div>
             </main>
    } else {
      return <main>
                {this.props.articles.map((article, index) =>
                  <Article key={index} article={article} />
                )}
             </main>
    }
  }
}


function mapStateToProps(state) {
  return {
    articles: state.articles.filter(article => article.content.includes(state.filterArticles))
  }
}

export default connect(mapStateToProps)(Main);
