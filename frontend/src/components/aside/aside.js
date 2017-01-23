import React, { Component } from 'react'

import './aside.scss';

export default class Aside extends Component {

  render() {
    return <aside>
            <h2 className="title">Choose your preference</h2>
            <div className="side-area">
              <input type="search" className="elegant-input" placeholder="Search Article"/>
              <h3>Categories</h3>
              <ul className="elegant-list">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
                <li>item 5</li>
                <li>item 6</li>
                <li>item 7</li>
              </ul>
            </div>
           </aside>
  }
}
