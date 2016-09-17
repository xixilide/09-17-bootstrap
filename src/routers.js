import React from 'react';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';


import App from './App';
import About from './about';
import Content from './content';
import Home from './home';
import Blog from './component/blog';
class Routers extends React.Component {
  render () {
return(
   <Router history={hashHistory}>
            <Route path="/" component={App} >
              <IndexRoute component={Home} />
              <Route path="/about" component={About} />
              <Route path="/content" component={Content} />
              <Route path="/blog/:title" component={Blog} />

            </Route>

   </Router>
)
  }
}
export default Routers;
