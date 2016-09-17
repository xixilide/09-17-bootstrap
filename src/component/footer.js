import React, { PropTypes } from 'react';

class Footer extends React.Component {
  render () {
      return(
        <div>
          <span className="label label-default">Default</span>
          <span className="label label-primary">Primary</span>
          <span className="label label-success">Success</span>
          <span className="label label-info">Info</span>
          <span className="label label-warning">Warning</span>
          <span className="label label-danger">Danger</span>

        </div>
      )
  }
}

export default Footer;
