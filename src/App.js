import React from "react";
import logo from './logo.svg';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './_main.css';
import { Route, Switch,NavLink} from "react-router-dom";



/* Component Import */
import Login from "./_theme/login";
import ProductList from "./_theme/product/product";
import Home from "./_theme/Home/home";
import Cart from "./_theme/cart/cart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        login: false,
    };
  }
  componentDidMount() {
    const loginStatus = localStorage.getItem("user");
    if(loginStatus && loginStatus !== "") {
      this.setState({
        login : true
      });
    }
  }

  render(){
    const isLogin = localStorage.getItem("user");
    console.log("isLogin", isLogin, this.state.login);
    return (
      <>
        <div className="container">
          <Navbar expand="md">
              <Navbar.Brand>
                  <NavLink to="/" >
                      <img src = {logo} className="App-logo" alt="logo"/>
                  </NavLink>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                      {this.state.login &&
                      <>
                      <NavLink to="/product" className="nav-link" exact>
                          Product
                      </NavLink>
                      <NavLink to="/cart" className="nav-link">
                      Cart
                      </NavLink>
                      </>}
                          </Nav>
              </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="mid-content">
          <Switch>
              <Route path="/" component={this.state.login ? Home : Login} exact/>
              {this.state.login && <Route exact path="/product" component={ProductList}/> }
                <Route exact path="/cart" component={Cart}/>
          </Switch>
        </div>
      </>
    )
  };
}

export default App;
