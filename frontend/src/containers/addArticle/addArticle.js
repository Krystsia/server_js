import React, { Component } from 'react';
import { connect } from 'react-redux';

import './addArticle.scss';

export default class AddArticle extends Component {

  onAddArticle(e) {
    e.preventDefault();
    this.props.addArticleHandler();
  }


  render() {
    return <form action="#" method="#" name="newArticle" id="newArticle">
              <fieldset>
                <label className="elegant-label" for="elegant-title">Insert Title</label>
                <input className="elegant-input" type="text" name="elegant-title" id="title" />
              </fieldset>
              <fieldset>
                <label className="elegant-image-button" for="elegant-image">
                  <input type="file" name="image" id="elegant-image"/>
                  <span>Choose Image</span>
                </label>

              </fieldset>
              <fieldset>
                <label className="elegant-label" for="elegant-text">Insert Text</label>
                <textarea className="elegant-textarea" name="content" id="elegant-text"></textarea>
              </fieldset>
              <input className="elegant-button" type="submit" value="Add Article" onClick={::this.onAddArticle}/>
           </form>
  }
}
