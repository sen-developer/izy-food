import styles from "./ProductItem.module.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Button, Checkbox} from "@mui/material";
import {useReducer} from "react";
import {useDispatch} from "react-redux";
import {ProductAction} from "../../store/Product";


const ProductItem = (props) => {
    const dispatcherFunction = useDispatch();

    const initialState = {
        id: props.get.id,
        name: props.get.name,
        type: props.get.type,
        size: props.get.sizeType[0].size,
        price: props.get.sizeType[0].price,
        hasSouse: props.get.hasSouse,
        isSpicy: props.get.isSpicy,
        count: props.get.count,
    }
    const productReducer = (prevState, action) => {
        if (action.type === "PRODUCT_SIZE") {
            let newPrice;
            if (prevState.type === 'food') {
                newPrice = action.value.includes("26") ? props.get.sizeType[0].price : action.value.includes("30") ? props.get.sizeType[1].price : props.get.sizeType[2].price;
            } else if (prevState.type === 'drink') {
                newPrice = action.value.includes("0.33") ? props.get.sizeType[0].price : action.value.includes("0.5") ? props.get.sizeType[1].price : props.get.sizeType[2].price;
            }
            newPrice = prevState.hasSouse ? newPrice + 1 : newPrice;
            newPrice = prevState.isSpicy ? newPrice + 0.5 : newPrice;
            return {
                ...prevState,
                size: action.value,
                hasSouse: prevState.hasSouse,
                isSpicy: prevState.isSpicy,
                price: newPrice,
                count: prevState.count,
            };
        }
        if (action.type === "PRODUCT_HAS_SOUSE") {
            return {
                ...prevState,
                hasSouse: action.value,
                isSpicy: prevState.isSpicy,
                size: prevState.size,
                price: action.value ? prevState.price + 1 : prevState.price - 1,
                count: prevState.count,
            }
        }
        if (action.type === "PRODUCT_IS_SPICY") {
            return {
                ...prevState,
                hasSouse: prevState.hasSouse,
                size: prevState.size,
                isSpicy: action.value,
                price: action.value ? prevState.price + 0.5 : prevState.price - 0.5,
                count: prevState.count,
            }
        }
        return {initialState};
    }

    const [productState, dispatchProductState] = useReducer(productReducer, initialState);

    const setValue = (e) => {
        dispatchProductState({type: "PRODUCT_SIZE", value: e.target.value})
    }
    const hasSouseHandler = (e) => {
        dispatchProductState({type: "PRODUCT_HAS_SOUSE", value: e.target.checked})
    }
    const isSpicyHandler = (e) => {
        dispatchProductState({type: "PRODUCT_IS_SPICY", value: e.target.checked})
    }
    const handleClick = (e) => {
        dispatcherFunction(ProductAction.addItem(productState))
        dispatcherFunction(ProductAction.itemChangeAnim({add: true}));
    };
    return (
        <div className={styles.itemBlock}>
            <div className={styles.imgBlock}>
                <img src={props.get.img} alt=""/>
            </div>
            <h3>{props.get.name}</h3>
            {props.get.type !== "combo" &&
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Size: {productState.size}</FormLabel>
                    <RadioGroup
                        row
                        defaultValue={props.get.sizeType[0].size}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group">

                        {props.get.sizeType.map(item =>
                            <FormControlLabel key={Math.random()} value={item.size}
                                              control={<Radio onClick={setValue}/>} label={item.size}/>)
                        }
                    </RadioGroup>
                </FormControl>}
            {props.get.type === 'food' &&
                <div>
                    <FormControlLabel control={<Checkbox onChange={isSpicyHandler} checked={productState.isSpicy}/>}
                                      label="add spicy"/>
                    <FormControlLabel control={<Checkbox onChange={hasSouseHandler} checked={productState.hasSouse}/>}
                                      label="add souse"/>
                </div>}
            <div className={styles.price}>Total Price: {productState.price}$</div>
            <Button variant="outlined" onClick={handleClick}>Add to cart</Button>
        </div>
    )
}
export default ProductItem;