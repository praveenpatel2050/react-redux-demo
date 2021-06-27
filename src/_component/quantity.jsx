import {Button, FormControl, InputGroup} from "react-bootstrap";
import React from "react";

export class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity :1,
        }
    }
    render() {
        return(
            <div className={"quantity"}>
                <InputGroup>
                    <FormControl
                        placeholder="Quantity"
                        aria-label="quantity of product"
                        value={this.state.quantity}
                        onChange={(event)=> {
                            if(Number.isInteger(event.target.value)){
                                let value = event.target.value;
                                if(value > 1 && value <=10) {
                                    this.setState({
                                        quantity: value,
                                    });
                                }
                                else {
                                    console.log("No ALLOWED");
                                }
                            }
                        }}/>
                    <Button variant="outline-primary"
                            onClick={()=>{
                                if(this.state.quantity <10 ) {
                                    this.setState({
                                        quantity : this.state.quantity +1,
                                    });
                                }
                            }}
                    >+</Button>
                    <Button variant="outline-secondary" onClick={()=>{
                        if(this.state.quantity >1 ) {
                            this.setState({
                                quantity: this.state.quantity - 1,
                            });
                        }
                    }}>-</Button>
                </InputGroup>
            </div>
        )
    }
}

