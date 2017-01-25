import React, { Component } from 'react'

import './aside.scss';

export default class Aside extends Component {
  findArticle() {
    this.props.findArticle(this.searchInput.value);
  }

  render() {
    return <aside>
            <h2 className="title">Choose your preference</h2>
            <div className="side-area">
              <input
                type="search"
                ref={(input) => {this.searchInput = input}}
                className="elegant-input"
                placeholder="Search Article"
                onChange={::this.findArticle}
              />
              <h3>Categories</h3>
              <ul className="elegant-list">
                <li>Categories 1</li>
                <li>Categories 2</li>
                <li>Categories 3</li>
                <li>Categories 4</li>
                <li>Categories 5</li>
                <li>Categories 6</li>
                <li>Categories 7</li>
              </ul>
            </div>
           </aside>
  }
}
