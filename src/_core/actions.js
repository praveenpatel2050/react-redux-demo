import { PRODUCT_ADD_TO_CART,
        PRODUCT_LIST,
        PRODUCT_REMOVE,
        ACTION_LOGIN_REQUEST,
        CART_LIST
    } from "./action-types";

export const actionProductList = (query) => {
    return({
        action : query,
        type : PRODUCT_LIST,
    });
};

export const actionProductAddToCart = (id) => {
    return({
        action : id,
        type : PRODUCT_ADD_TO_CART,
    });
};

export const actionProductRemove = (id) =>{
    return({
        action : id,
        type : PRODUCT_REMOVE,
    })
};

export const actionLogin = (data) => {
    console.log("data", data);
    return ({
        data,
        type : ACTION_LOGIN_REQUEST,
    });
};

export const actionCartList = () => {
    return({
        query: "list",
        type: CART_LIST
    });
};
