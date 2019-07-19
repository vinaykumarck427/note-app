import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import CategoriesList from './notes/CategoryList';
import NoteEdit from './notes/Edit';
import CategoryEdit from './notes/EditCategory';
import NoteList from './notes/List';
import AddNote from './notes/New';
import AddCategory from './notes/NewCategory';
import NoteShow from './notes/Show';
import ShowCategory from './notes/ShowCategory';
import Account from './users/Account';
import LoginUser from './users/Login';
import LogoutUser from './users/Logout';
import RegistrationUser from './users/Registration';


class App extends React.Component{
        render(){
        return (
          <BrowserRouter>
            <div className="container">
              {/* <h1>My Note App</h1> */}

              {/* <Link to='/notes'>List Notes</Link><pre>
                    <Link to='/categories'>List categories</Link></pre> */}
              <ul className="list-group list-group-horizontal-xl">
                {!_.isEmpty(localStorage.getItem("userAuthToken")) ? (
                  <div>
                    <li className="list-group-item">
                      <Link to="/users/account">Account</Link>
                    </li>
                    <li className="list-group-item">
                      <Link to="/users/logout">Logout</Link>
                    </li>
                  </div>
                ) : (
                  <div>
                    <li className="list-group-item">
                      <Link to="/users/register">Register</Link>
                    </li>
                    <li className="list-group-item">
                      <Link to="/users/login">Login</Link>
                    </li>
                  </div>
                )}
              </ul>

              {/* Route Matcher */}
              <Switch>
                <Route
                  path="/users/register"
                  component={RegistrationUser}
                  exact={true}
                />
                <Route path="/users/login" component={LoginUser} />

                <Route
                  path="/users/account"
                  component={Account}
                  exact={true}
                />
                <Route path="/users/logout" component={LogoutUser} />
                <Route exact path="/notes" component={NoteList} />
                <Route exact path="/notes/new" component={AddNote} />
                <Route
                  exact
                  path="/notes/edit/:id"
                  component={NoteEdit}
                />
                <Route
                  path="/notes/:id"
                  component={NoteShow}
                  exact={true}
                />
                <Route
                  exact
                  path="/categories"
                  component={CategoriesList}
                />
                <Route
                  exact
                  path="/categories/new"
                  component={AddCategory}
                />
                <Route
                  path="/categories/edit/:id"
                  component={CategoryEdit}
                  exact={true}
                />
                <Route
                  path="/categories/:id"
                  component={ShowCategory}
                  exact={true}
                />
              </Switch>
            </div>
          </BrowserRouter>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(App)