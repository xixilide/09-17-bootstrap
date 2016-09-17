import React, { PropTypes } from 'react';
import { Link} from 'react-router';
import Card from './component/card';
import Img1 from './build/48abf7e8ee889bf637ba4e8a876620a0.jpg';
import Img2 from './images/2.jpg';
import Img3 from './images/3.jpg';
let cardData=[
  {title:'第一天',desc:'第一天描述',img:Img1,url:'a'},
  {title:'第二天',desc:'第二天描述',img:Img2,url:'b'},
  {title:'第三天',desc:'第三天描述',img:Img3,url:'c'},
  {title:'第四天',desc:'第四天描述',img:Img3,url:'d'}
]
class Content extends React.Component {
  render () {
  return(

    <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
            {cardData.map( (item,i) => <Card {...item} key={i} />)}
        </div>

</div>
  )
  }
}

export default Content;
