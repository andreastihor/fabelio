import React , {Component} from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends Component {


  render () {
      return (
          <React.Fragment>
          <NavLink to = "/"> <button>Home</button></NavLink>
          <NavLink to ="/list"> <button>List</button> </NavLink>
          <br/> <br/> <br/>
          </React.Fragment>
      )
    }

}

export default NavBar
