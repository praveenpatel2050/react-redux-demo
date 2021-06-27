import * as React from "react";
import {connect} from "react-redux";
import {ProductBlock} from "../../_component/product-block";
import "./_style.css";

import {productList} from "../../_core/selector";
import {actionProductAddToCart} from "../../_core/actions";

import {Row,Container} from 'react-bootstrap';

class ProductList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const {productList} = this.props;
        return(
            <Container>
                <Row>
                    {productList && Array.isArray(productList) && productList.length>0 && productList.map((value, index) => {
                        return (<ProductBlock key={index}
                                    price={value.price}
                                    title ={value.name}
                                    description ={value.description}
                                    addToCart ={()=> {
                                        console.log("added to cart");
                                    }}
                                    buyNow ={()=> {
                                        console.log("buy Now click");
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
        }
    },
    {
        actionProductAddToCart,
    })(ProductList);
