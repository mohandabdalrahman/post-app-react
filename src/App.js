import React from 'react';
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeAuth } from './redux/actions/auth'
import './App.css';

const App = ({ auth, changeAuth }) => {

  const renderButton = () => {
    if (auth) {
      return (
        <button onClick={() => changeAuth(false)} >Sign Out</button>
      )
    } else {
      return (
        <button onClick={() => changeAuth(true)}>Sign In</button>
      )
    }
  }
  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Posts</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    )
  }
  return (
    <div className="App">
      {renderHeader()}
      <Switch>
        <Route exact path="/" component={CommentList} />
        <Route exact path="/post" component={CommentBox} />
      </Switch>
    </div>
  );
}


const mapStateToProps = ({ auth }) => ({ auth })
const mapDispatchToProps = dispatch => ({ changeAuth: (isLoggedIn) => dispatch(changeAuth(isLoggedIn)) })

export default connect(mapStateToProps, mapDispatchToProps)(App);
