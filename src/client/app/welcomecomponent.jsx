import React from 'react';
import Button from 'react-bootstrap/Button';

class WelcomeComponent extends React.Component {

  render() {
    return (
      <div>
        <h1>This is a h1 header</h1>
        <h2>This is a h2 header</h2>
        <img></img>
        <Button variant="success">Press Me</Button>
      </div>
    );
  }

}

export default WelcomeComponent;
