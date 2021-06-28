import { combineReducers } from "redux";
import {createReducer} from "./util";
import {ACTION_LOGIN_REQUEST,
    PRODUCT_ADD_TO_CART,
    PRODUCT_LIST,
    PRODUCT_REMOVE,
    CART_LIST,
} from "./action-types";

const items =[{
        id: 1,
        name: "Iphone 12",
        description: "Iphone 12 by Apple, and it is premium quality Mobiles.",
        price: "40000",
        checked: false,
    },
    {
        id: 2,
        name: "Macbook Pro",
        description: "Macbook Pro by Apple, and it is premium quality laptop.",
        price: "65000",
        checked: false,
    },
    {
        id: 3,
        name: "Macbook 2 Pro",
        description: "Macbook Pro by Apple, and it is premium quality laptop.",
        price: "75000",
        checked: false,
    },
    {
        id: 4,
        name: "Macbook 3 Pro",
        description: "Macbook Pro by Apple, and it is premium quality laptop.",
        price: "165000",
        checked: false,
    }];
export const list = createReducer(items, {
    [PRODUCT_LIST] : (state, action) => {
       return state;
    }
});

export const cart = createReducer([], {
    [PRODUCT_ADD_TO_CART] : (state, action) => {
        console.log("in Reducer", action, action.item);
        if(!action) {
            return state;
        }
        if(action &&  action.item) {
            console.log("in Reducer Success", action, action.item);
            const {item} = action;

            let itemsAdded = items.find(d => d.id === item.id);
            if(itemsAdded) {
                console.log("item" , itemsAdded);
                let getStore = localStorage.getItem("cart");
                console.log("getStore", getStore);
                if(getStore && Array.isArray(getStore) && getStore.length > 0 ) {
                    getStore.push(itemsAdded);
                    localStorage.setItem('cart', getStore);
                    return {
                        success :true, message: "Item added to Cart."
                    }
                } else {
                    let storeAdd = [];

                    storeAdd.push(JSON.stringify(itemsAdded));
                    localStorage.setItem('cart', [storeAdd]);
                    return {
                        success :true, message: "Item added to Cart."
                    }
                }
            }
        }
    },
    [PRODUCT_REMOVE] : (state, action) => {
        if(!action) {
            return state;
        }
        if(action &&  action.items) {
            const {item} = action;
            let itemsRemove = items.find(d => d.id === item.id);
            console.log("itemRemove", itemsRemove);
            if(itemsRemove) {
                itemsRemove.quantity = item.quantity;
                let getStore = localStorage.getItem("cart");
                if(getStore && Array.isArray(getStore) && getStore.length>0 ) {
                    getStore.splice(getStore.findIndex(function(i){
                        return i.id === item.id;
                    }), 1);
                    localStorage.setItem('cart', getStore);
                }
            }
        }
    }
});

export const cartList = createReducer([], {
    [CART_LIST] : (state, action)=> {
        if(!action) {
            return state;
        }
        let cart = JSON.parse(localStorage.getItem('cart'));
        console.log("In Cart", cart);
        // if(cart && Array.isArray(cart) && cart.length > 0) {
            return  cart;
        // }
        // return cart;
}
});
export const loginDetail = createReducer(false, {
    [ACTION_LOGIN_REQUEST] : (state, action)=> {
        if(!action ) {
            return state;
        }
        let {data} = action;
        if(data.username === "demo@demo.com" && data.password === "demo") {
            if(typeof(Storage) !== "undefined") {
                let localStorage = window.localStorage;
                let userObj= {name: "Demo", email: "demo@demo.com"};
                localStorage.setItem('user', JSON.stringify(userObj));
                return ({
                    success: true,
                    message: "Login Success!"
                });
            }

        }
        else {
            console.log("Storage Item is ", localStorage.getItem('user'));
            return ({success: false, message : "Username OR Password wrong. Please Try again"});
        }
    }
});

export default combineReducers ({
    productList : list,
    login: loginDetail,
    cartList,
    lastCartStatus: cart,
})
