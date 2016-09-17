import React, { PropTypes } from 'react';
import { Link,browserHistory} from 'react-router';

class Home extends React.Component {
  handleClick(){
    browserHistory.push('content')
  }
  render () {
  return(
    <div>
    <div className="jumbotron">
      <h1>欢迎光临!</h1>
      <p>wellcome to xixilide home!</p>
      <p>
        <a className="btn btn-primary btn-lg"  role="button" onClick={this.handleClick.bind(this)}>my work</a></p>
      </div>

    </div>
  )
  }
}

export default Home;
