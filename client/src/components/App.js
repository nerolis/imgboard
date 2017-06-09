// Modules
import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
// Components
import Threads from './Thread/Threads';
import Thread from './Thread/Thread';
import ThreadList from './Thread/ThreadList';
import ThreadView from './Thread/ThreadView';
import Home from './Home/Home';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import Dev from './Thread/Dev';
import RegisterPage from './RegisterPage';
import FlashMessagesList from './features/flash/FlashMessagesList';
import {Menu, Dropdown, Item, Segment, Button} from 'semantic-ui-react';
// Styles


const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);
const User = ({ match }) => {
  return <h1>{console.log('Params match')} {match.params.thread.id}!</h1>
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      currentThread: undefined,
    }
  }
  
  render() {
    
    return (
      
    <div className="ui container">
                           <FlashMessagesList />
        <div className="ui  inverted three item menu">
         <Menu.Item >
         In dev
        </Menu.Item>
       <ActiveLink activeOnlyWhenExact to="/" label="Home" />
       <ActiveLink activeOnlyWhenExact to="/threads" label="Board" /> 
       <ActiveLink activeOnlyWhenExact to="/darknet" label="Darknet" /> 
           <Dropdown item text='Log-In'>
        <Dropdown.Menu>
         <ActiveLink activeOnlyWhenExact to="/login" label="Login" />      
         <ActiveLink activeOnlyWhenExact to="/register" label="Register" /> 
      
        </Dropdown.Menu>
      </Dropdown>
        </div>
        <Route  path="/dev" component={Dev} />
         <Route path="/threads/:threadId" render={() => <div>{console.log('current thread')}</div>}/>
        <Route path="/threads" component={Threads}/>
         <Route exact path="/" component={Home} />
         <Route  path="/login" component={LoginPage} />

          <Route  path='/register' component={RegisterPage} />
          <Route  path='/darknet' component={Thread} />
      </div>

      
      
    );
    
  }
  
}

export default App;