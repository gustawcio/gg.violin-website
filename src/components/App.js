import React, { Component } from 'react';
import './App.css';
import HomeNeon from './home-neon'
import Navbar from './NavBar'
import Button from './Button'
import { BrowserRouter, Route } from 'react-router-dom'
import AppNews from './AppNews'
import AppAbout from './AppAbout'
import AppVideo from './AppVideo'
import AppContact from './AppContact'


class App extends Component {
  state = {
    active: false,
    text: 'włącz',
  }

  handleSwitchNeon = () => {

    if (this.state.active) {
      this.setState({
        active: false,
        text: 'włącz',
      })
    } else (
      this.setState({
        active: true,
        text: 'wyłącz',

      })
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar active={this.state.active} />
          <HomeNeon active={this.state.active} />
          <Button switch={this.handleSwitchNeon} text={this.state.text} />
          <Route exact path='/news' component={AppNews} />
          <Route path='/about' component={AppAbout} />
          <Route path='/video' component={AppVideo} />
          <Route path='/contact' component={AppContact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

