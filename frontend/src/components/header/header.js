import React, { Component } from 'react'

import './header.scss';

export default class Header extends Component {

  render() {
    const { year, photos } = this.props
    return <header>
            <div className="title">My Blog</div>
            <div className="registration"><a href="/logout">Logout</a></div>
           </header>
  }
}
