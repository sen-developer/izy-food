import {createSlice} from "@reduxjs/toolkit";

export const PRODUCT_ITEMS = {
    food: [
        {
            id: "pizza4252",
            name: "pepperoni",
            img: "https://static.pizzasushiwok.ru/images/menu_new/6-300.jpg",
            type: "food",
            sizeType: [
                {
                    size: "26sm",
                    price: 5
                },
                {
                    size: "30sm",
                    price: 8
                },
                {
                    size: "40sm",
                    price: 10
                }
            ],
            hasSouse: false,
            isSpicy: false,
            isPopular: true,
            count: 1
        },
        {
            id: "pizza42112",
            name: "Margarita",
            img: "https://static.pizzasushiwok.ru/images/menu_new/1-300.jpg",
            type: "food",
            sizeType: [
                {
                    size: "26sm",
                    price: 4
                },
                {
                    size: "30sm",
                    price: 7
                },
                {
                    size: "40sm",
                    price: 9
                }
            ],
            hasSouse: false,
            isSpicy: false,
            isPopular: true,
            count: 1
        },
        {
            id: "pizza4sd12",
            name: "Fresh BBQ",
            img: "https://static.pizzasushiwok.ru/images/menu_new/1781-300.jpg",
            type: "food",
            sizeType: [
                {
                    size: "26sm",
                    price: 6
                },
                {
                    size: "30sm",
                    price: 8
                },
                {
                    size: "40sm",
                    price: 11
                }
            ],
            hasSouse: false,
            isSpicy: false,
            isPopular: false,
            count: 1
        },
        {
            id: "p0oopa",
            name: "Pizza tasty",
            img: "https://static.pizzasushiwok.ru/images/menu_new/404-300.jpg",
            type: "food",
            sizeType: [
                {
                    size: "26sm",
                    price: 7
                },
                {
                    size: "30sm",
                    price: 8
                },
                {
                    size: "40sm",
                    price: 9
                }
            ],
            hasSouse: false,
            isSpicy: false,
            isPopular: false,
            count: 1
        }
    ],
    drink: [
        {
            id:"dk889",
            name:"Coca Cola",
            img:"https://static.pizzasushiwok.ru/images/menu_new/1857-300.jpg",
            type:"drink",
            sizeType:[
                {
                    size: "0.33L",
                    price: 1
                },
                {
                    size: "0.5L",
                    price: 1.5
                },
                {
                    size: "1L",
                    price: 2
                }
            ],
            isPopular: true,
            count:1,
        },
        {
            id:"dk8878",
            name:"Rich Cherry",
            img:"https://static.pizzasushiwok.ru/images/menu_new/449-300.jpg",
            type:"drink",
            sizeType:[
                {
                    size: "0.33L",
                    price: 1.5
                },
                {
                    size: "0.5L",
                    price: 2.5
                },
                {
                    size: "1L",
                    price: 4
                }
            ],
            isPopular: true,
            count:1,
        },
        {
            id:"dk88s78gt",
            name:"Green Tea",
            img:"https://static.pizzasushiwok.ru/images/menu_new/1783-300.jpg",
            type:"drink",
            sizeType:[
                {
                    size: "0.33L",
                    price: 0.2
                },
                {
                    size: "0.5L",
                    price: 0.3
                },
                {
                    size: "1L",
                    price: 0.5
                }
            ],
            isPopular: false,
            count:1,
        },
    ],
    combo:[
        {
            id:"co87882",
            name:"Summer PSV",
            img:"https://static.pizzasushiwok.ru/images/menu_new/1908-300.jpg",
            type:"combo",
            sizeType:[
                {
                    size: "",
                    price: 11
                },
            ],
            isPopular:false,
            count:1
        },
        {
            id:"co878s82",
            name:"Combo N5",
            img:"https://static.pizzasushiwok.ru/images/menu_new/819-300.jpg",
            type:"combo",
            sizeType:[
                {
                    size: "",
                    price: 10
                },
            ],
            isPopular:true,
            count:1
        },
        {
            id:"co878s82hit",
            name:"Combo HIT N1",
            img:"https://static.pizzasushiwok.ru/images/menu_new/1691-300.jpg",
            type:"combo",
            sizeType:[
                {
                    size: "",
                    price: 15
                },
            ],
            isPopular:true,
            count:1
        }
    ],
}


const initialState = {
    isModalActive: false,
    cartItems: [],
    totalItemCount: 0,
    totalAmount: 0,
    itemChange: {add: false, remove: false}
}

const product = createSlice({
    name: "productItem",
    initialState: initialState,
    reducers: {
        openOrCloseModal(state) {
            state.isModalActive = !state.isModalActive;
        },
        addItem(state, action) {
            state.totalItemCount++;
            const ai = action.payload;
            const existingItem = state.cartItems.find(item => item.id === ai.id && item.size === ai.size && item.isSpicy === ai.isSpicy && item.hasSouse === ai.hasSouse);
            if (!existingItem) {
                state.cartItems.push(ai);
                state.totalAmount += ai.price;
            } else {
                existingItem.count++;
                state.totalAmount += existingItem.price;
            }
        },
        removeItem(state, action) {
            const delItem = action.payload;
            const findItem = state.cartItems.find(item => item.id === delItem.id && item.size === delItem.size && item.isSpicy === delItem.isSpicy && item.hasSouse === delItem.hasSouse);
            let newCartItems = [];
            state.cartItems.forEach(item => {
                if (!(item.id === delItem.id && item.size === delItem.size && item.isSpicy === delItem.isSpicy && item.hasSouse === delItem.hasSouse)) {
                    newCartItems.push(item)
                }
                ;
            })
            state.totalAmount -= findItem.price * findItem.count;
            state.totalItemCount -= findItem.count;
            state.cartItems = newCartItems;
        },
        itemCountChanger(state, action) {
            const newCount = +action.payload.newCount;
            const selectedItem = action.payload.item;
            const existingItem = state.cartItems.find(item => item.id === selectedItem.id && item.size === selectedItem.size && item.isSpicy === selectedItem.isSpicy && item.hasSouse === selectedItem.hasSouse);
            if (newCount > existingItem.count) {
                existingItem.count++;
                state.totalAmount += existingItem.price;
                state.totalItemCount++;
            } else if (newCount < existingItem.count) {
                existingItem.count--;
                state.totalItemCount--;
                state.totalAmount -= existingItem.price;
            }
        },
        itemChangeAnim(state, action) {
            state.itemChange.add = action.payload.add;
        }

    }
})

export const ProductAction = product.actions;
export default product.reducer

