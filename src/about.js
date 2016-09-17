import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('http://api.github.com/users/xixilide')
    .then((res)=> {
      console.log(res.data);
      this.setState({
        data:res.data,
        wait:false
      })
    })
  }
  render () {
  return(
    <div>
      {
        this.state.wait ? '正在读取数据' :
        <img src={this.state.data.avatar_url} />
      }
    </div>
  )
  }
}

export default About;
