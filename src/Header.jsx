import React, { Component } from 'react'
import "./Header.css"
// const Header = (props) => {

//   return (
//     
//   )
// }

class Header extends Component {
  render() {
    return (
      <div className='header'>
        {this.props.heading}
      </div>
    )
  }
}

export default Header