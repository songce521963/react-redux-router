import './index.scss';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className='m-login'>module</span> local styles.</p>
        <p>Enjoy!</p>
      </div>
    )
  }
}
