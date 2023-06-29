import {createSlice} from "@reduxjs/toolkit";

export const PRODUCT_ITEMS = [
    {
        id:"pizza4252",
        name:"pepperoni",
        img:"https://static.pizzasushiwok.ru/images/menu_new/6-300.jpg",
        sizeType:[
            {
                size:"26sm",
                price:5
            },
            {
                size:"30sm",
                price:8
            },
            {
                size:"40sm",
                price:10
            }
        ],
        souse:false,
        spicy:false,
        isPopular:true
    },
    {
        id:"pizza42112",
        name:"Margarita",
        img:"https://static.pizzasushiwok.ru/images/menu_new/1-300.jpg",
        sizeType:[
            {
                size:"26sm",
                price:4
            },
            {
                size:"30sm",
                price:7
            },
            {
                size:"40sm",
                price:9
            }
        ],
        souse:false,
        spicy:false,
        isPopular:true
    },
    {
        id:"pizza4sd12",
        name:"Fresh BBQ",
        img:"https://static.pizzasushiwok.ru/images/menu_new/1781-300.jpg",
        sizeType:[
            {
                size:"26sm",
                price:7
            },
            {
                size:"30sm",
                price:8
            },
            {
                size:"40sm",
                price:9
            }
        ],
        souse:false,
        spicy:false,
        isPopular:false
    },
    {
        id:"pizza4sds12",
        name:"Fresh BBQ",
        img:"https://static.pizzasushiwok.ru/images/menu_new/1781-300.jpg",
        sizeType:[
            {
                size:"26sm",
                price:7
            },
            {
                size:"30sm",
                price:8
            },
            {
                size:"40sm",
                price:9
            }
        ],
        souse:false,
        spicy:false,
        isPopular:false
    }
]

const initialState = {}

const product = createSlice({
    name:"productItem",
    initialState:initialState,
    reducers:{

    }
})


export default product.reducer

