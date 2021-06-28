import * as React from 'react';
import {connect} from "react-redux";

import {Container} from "react-bootstrap";

import {actionCartList} from "../../_core/actions";
import {cartList} from "../../_core/selector";

class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.actionCartList();
    }

    render() {
        const {cartList} = this.props;

        console.log("cartList", cartList);
        return (
            <Container>
            <h1> Hello, In CART</h1>
            </Container>
        );
    }
}
export default connect(
    state => {
        return {
            cartList : cartList(state),
        }
    },{
        actionCartList
    })(Cart)
