import * as React from "react";
import {connect} from "react-redux";
import "./_style.css";
import {Form, Button,Toast, ToastHeader, ToastBody} from "react-bootstrap";
import {actionLogin} from  "../../_core/actions";
import {userLoginStatus} from "../../_core/selector";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            message : '',
            showAlert: false,
        }
    }

    doLogin=(login)=> {
        const {username, password} = login;
        if(username  && password ) {
            this.props.actionLogin({username, password});
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.loginStatus !== this.props.loginStatus) {
            const status = this.props.loginStatus;
            if(status && status.success === false) {
                localStorage.clear();
                console.log("login failed", this.props.loginStatus);
                this.handleState('message', status.message);
                this.handleState("showAlert", true);
            } else {
                window.location.reload();
            }
        }
    }

    handleState = (key, value) => {
        this.setState({
            [key] : value,
        });
    };



    render() {
        const {message, showAlert} = this.state;
        return(<>
                <Toast bg={"danger"} delay={13000} autohide onClose={() => this.handleState("showAlert", false)} show={showAlert} >
                    <ToastHeader>
                        Error !!
                    </ToastHeader>
                    <ToastBody>
                        <p>{message}</p>
                    </ToastBody>
                </Toast>
        <div className="container">
            <h2 className="center-header">Login Form</h2>
            <div className = "login-form-main">
                <Form className={"forms"}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                              placeholder="Enter email"
                              size="sm"
                              onChange={(event) => {
                                this.handleState("username", event.target.value);
                              }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="sm" onChange={(event)=> {
                            console.log("password set to", event.target.value);
                            this.handleState("password", event.target.value);
                        }}/>
                    </Form.Group>
                    <Button variant="primary full" type="submit" onClick={
                        (e) => {
                            console.log("Button Click");
                            e.preventDefault();
                            this.doLogin(this.state);
                        }
                    }>
                        Login
                    </Button>
                </Form>
            </div>
        </div>
        </>);
    }
}
export default connect(
    state => {
        return {
            loginStatus: userLoginStatus(state),
        }
    },
    {
        actionLogin,
})(Login);
