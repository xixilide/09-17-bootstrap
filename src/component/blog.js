import React, { PropTypes } from 'react';


class Blog extends React.Component {

  render () {
  console.log(this.props);
  return(

    <div>
      {
        this.props.params.title==a ? '我是A页面' :
        this.props.params.title==b ? '我是B页面' :
        this.props.params.title==c ? '我是C页面' :
        this.props.params.title==d ? '我是D页面' : '没有允许访问的页面'

      }
    </div>
  )
  }
}

export default Blog;
