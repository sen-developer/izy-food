import styles from "./ProductItem.module.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Button} from "@mui/material";
import {useState} from "react";

const ProductItem = (props) => {

    const [getSize,setSize] = useState(props.get.sizeType[0].size);
    const [price,setPrice] = useState(props.get.sizeType[0].price)
    const setValue = (e) => {
        const value = e.target.value
        const newPrice= props.get.sizeType.find(item=> item.size === e.target.value)
        setSize(()=>value);
        setPrice(()=>newPrice.price)
    }
    const handleClick = (e) => {

        // console.log(newPrice.price)
        // Perform your desired action here
        console.log(getSize);
    };
    return (
        <form onSubmit={e=>e.preventDefault()}>
            <div className={styles.itemBlock}>
                <div className={styles.imgBlock}>
                    <img src={props.get.img} alt=""/>
                </div>
                <h3>{props.get.name}</h3>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Size: {getSize}</FormLabel>
                        <RadioGroup
                            row
                            defaultValue={props.get.sizeType[0].size}
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group">

                            {props.get.sizeType.map(item=>
                                <FormControlLabel key={Math.random()} value={item.size} control={<Radio onClick={setValue}/>} label={item.size}/>)
                            }
                            {/*<FormControlLabel value={props.get.sizeType[0].size} control={<Radio onClick={setValue}/>} label="26sm"/>*/}
                            {/*<FormControlLabel value={props.get.sizeType[1].size} control={<Radio onClick={setValue}/>} label="30sm"/>*/}
                            {/*<FormControlLabel value={props.get.sizeType[2].size} control={<Radio onClick={setValue}/>} label="40sm"/>*/}
                        </RadioGroup>
                    </FormControl>
                <div className={styles.price}>Total Price: {price}$</div>
                <Button variant="outlined" onClick={handleClick}>Add to cart</Button>
            </div>
        </form>
    )
}
export default ProductItem;