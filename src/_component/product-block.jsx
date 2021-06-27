import React from "react";
import {Button,Col} from "react-bootstrap";
import * as PropTypes from 'prop-types';
import "./_style.css";

export class ProductBlock extends React.Component{
     PropTypes = {
        title : PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        addToCart: PropTypes.func,
        buyNow : PropTypes.func,

    };
    static defaultProps = {
            title : 'product title',
            price : 100,
            description: "it is description part",
    };

    render() {
        const {title, description, price, addToCart, buyNow} = this.props;
        return (
            <>
                <Col xs={12}  lg={3} sm={6}>
                    <div className={"product-list-root"}>
                    {/*Product Header*/}
                    <div className={"product-image"}>
                        <img src={"https://betarill.com/media/images/products/default_product.png"} alt={"not available"}/>
                    </div>
                    {/*Product detail*/}
                    <div className={"product-info"}>
                        <div className={"first-row"}>
                            <p className={"product-title"}>{title}</p>
                            <p className={"product-price"}>₹ {"" + price}</p>
                        </div>
                        <div className={"detail-info"}>
                            <p className={"text"}>{description}</p>
                        </div>
                    </div>
                    {/*Product action*/}
                    <div className={"product-action"}>
                        <div className={"actions"}>
                            <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
                            <Button variant="success" onClick={buyNow}>Buy Now</Button>
                        </div>
                    </div>
                </div>
                </Col>
            </>
        )
 }
}
