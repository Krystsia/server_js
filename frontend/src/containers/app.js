import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/user';
import Header from '../components/header/header';
import Main from './main/main';
import Aside from '../components/aside/aside';
import AddArticle from '../components/addArticle/addArticle';
import * as pageActions from '../actions/pageAction';

import './core.scss';


class App extends Component {
  render() {
    const { user } = this.props;


    return <div>
              <Header />
              <div className="container">
                <Main getAllArticles={this.props.onGetData} />
                <Aside findArticle={this.props.onFindArticle}/>
              </div>
              <div className="container">
                <div className="add-new-article">
                  <h2>Add New Article</h2>
                  <AddArticle addArticleHandler={this.props.onAddArticle} />
                </div>
              </div>
           </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFindArticle: (text) => {
      dispatch({type: 'FIND_ARTICLES', payload: text});
    },
    onGetData: () => {
      const getArticles = () => {
        return dispatch => {
          fetch('/getArticles', {method: "GET"}).then((response) => {
              return response.json();
            }).then(data => {
              dispatch({type: 'GET_ALL_ARTICLES', payload: data.articles});
            });
        }
      }
      dispatch(getArticles());
    },

    onAddArticle: () => {
      const addNewArticle = () => {
        return dispatch => {

          const addArticleForm = document.forms.newArticle;
          let form = new FormData();

          form.append('title', addArticleForm.elements.title.value);
          form.append('content', addArticleForm.elements.content.value);
          form.append('image', addArticleForm.elements.image.files[0]);

          fetch('/addNewArticle', {method: "POST", body: form}).then((response) => {
              return response.json();
          }).then((data) => {
              console.log(data);
              addArticleForm.reset();
              dispatch({type: 'ADD_ARTICLE', payload: data.articles});
          }).catch((error) => {console.log(error)});
        }
      }
      dispatch(addNewArticle());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
