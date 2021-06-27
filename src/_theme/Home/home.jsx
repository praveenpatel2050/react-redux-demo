import * as React from "react";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import "./_style.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state= {

        }
    }

    render() {
        return (
            <Container>
                <div className={'heading'}>
                    <h1>Product Manage Project</h1>
                </div>
                <div className={'description'}>
                    <p>React</p>
                    <p>Hooks</p>
                    <p>Redux</p>
                    <p>React Router</p>
                </div>
                <div className={'desc-footer'}>
                    <p className="ls b">Developed by</p>
                    <p className="ls">Praveen Patel</p>
                    <address>
                        Mail US <a href="mailto:praveen.patel2050@gmail.com">Mail US</a>.<br/>
                        (Full Stack Developer)<br/>
                    </address>
                </div>
            </Container>

        )
    }
}
export default connect(
    state => {
        return {
        }
    },{})(Home)
