import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import HeaderComponent from './app/components/header/header';
import {amber, red, indigo} from 'material-ui/colors';
import Home from './app/screens/Home';
import Fixture from './app/screens/Fixtures';
import Gallery from './app/screens/Gallery';
import News from './app/screens/News';
import Result from './app/screens/Result';
import Social from './app/screens/Social';
import Table from './app/screens/Table';
import Showcase from './app/screens/Showcase';
import {connect} from 'react-redux';
import * as actions from './app/actions';

const theme = createMuiTheme({
  palette:{
    primary: red
  }
});

class App extends Component {
  constructor(){
    super()
    
    this.userLogout = this.userLogout.bind(this);
  }
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
        <div className="home-cover">
          <HeaderComponent  logout={this.userLogout} />
          <Route exact path="/" component={Home} />
          <Route path='/fixture' component ={Fixture}/>
          <Route path="/result" component={Result} />
          <Route path="/news" component={News} />
          <Route path="/social" component={Social} />
          <Route path="/showcase" component={Showcase} />
          <Route path="/table" component={Table} />
          <Route path="/gallery" component={Gallery} />
        </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
  async userLogout(){
    fetch('/user/logout', {credentials: "include"})
    .then(res =>{window.location.href = "/"});
  }

  componentDidMount(){
    //console.log(this.props);
    this.props.fetchUser();
    this.props.fetchPost();
     this.props.fetchNews();
    this.props.fetchTournament();
    this.props.fetchFixture();
  }
}

export default connect(null, actions)(App);
