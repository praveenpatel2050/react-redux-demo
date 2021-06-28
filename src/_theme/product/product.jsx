import * as React from "react";
import {connect} from "react-redux";
import {ProductBlock} from "../../_component/product-block";
import "./_style.css";

import {productList, cartStatus} from "../../_core/selector";
import {actionProductAddToCart} from "../../_core/actions";

import {Row, Container, ToastHeader, ToastBody, Toast} from 'react-bootstrap';

class ProductList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            message : "",
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.cartStatus !== this.props.cartStatus ) {
            const {cartStatus} = this.props;
            if(cartStatus && cartStatus.success) {
                this.setState({
                    showAlert: true,
                    message: cartStatus.message
                });
            }
        }
    }

    handleState = (key ,value) => {
        this.setState({
            [key] : value
        });
    };
    render() {
        const {productList} = this.props;

        return(
            <Container>
                <Toast bg={"success"} delay={3000} autohide onClose={() => this.handleState("showAlert", false)} show={this.state.showAlert} >
                    <ToastHeader>
                        Successfully action fired !!
                    </ToastHeader>
                    <ToastBody>
                        <p>{this.state.message}</p>
                    </ToastBody>
                </Toast>
                <Row>
                    {productList && Array.isArray(productList) && productList.length>0 && productList.map((value, index) => {
                        return (<ProductBlock key={index}
                                    price={value.price}
                                    title ={value.name}
                                    description ={value.description}
                                    addToCart={(event)=> {
                                         this.props.actionProductAddToCart({id: value.id});
                                    }}
                                    buyNow ={()=> {
                                        this.props.actionProductAddToCart({
                                            id:value.id
                                        });
                                        window.location.assign("/cart");
                                        console.log("buy Now click", value.id);
                                    }}/>);
                    })
                    }
                </Row>
            </Container>
        )
    }
}
export default connect(
    state => {
        return {
            productList : productList(state),
            cartStatus: cartStatus(state),
        }
    },
    {
        actionProductAddToCart,
    })(ProductList);
