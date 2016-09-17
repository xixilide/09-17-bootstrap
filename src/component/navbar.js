import React, { PropTypes } from 'react'
import { Link} from 'react-router';
class NavBar extends React.Component {
  render () {
  return(
    <div>
      <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
          xixlide
          </a>
        </div>
        <ol className="breadcrumb">
          <li><Link to="/" activeStyle={{background:'teal'}} onlyActiveOnIndex={true}>Home</Link></li>
          <li><Link to="/about" activeStyle={{background:'teal'}}>About</Link></li>
          <li><Link to="/content" activeStyle={{background:'teal'}}>Content</Link></li>
        </ol>
  </div>
  </nav>
  
    </div>
  )
  }
}

export default NavBar;
