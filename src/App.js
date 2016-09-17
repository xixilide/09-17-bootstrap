import React from 'react';
import NavBar from './component/navbar';
import Footer from './component/footer';


class App extends React.Component {

  render () {
  return(
    <div>
      <NavBar />
      {this.props.children}
      <Footer />
    </div>
  )
  }
}

export default App;
