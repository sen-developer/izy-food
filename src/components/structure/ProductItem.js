import styles from "./ProductItem.module.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Button} from "@mui/material";
import {useState} from "react";

const ProductItem = (props) => {

    const [getSelectedOption,setSelectedOption] = useState(props.get.sizeType[0].size);

    const setValue = (e) => {
        const value = e.target.value
        setSelectedOption(()=>value);
    }
    const handleClick = (e) => {
        // Perform your desired action here
        console.log(getSelectedOption);
    };
    return (
        <form onSubmit={e=>e.preventDefault()}>
            <div className={styles.itemBlock}>
                <div className={styles.imgBlock}>
                    <img src={props.get.img} alt=""/>
                </div>
                <h3>{props.get.name}</h3>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Size</FormLabel>
                        <RadioGroup
                            row
                            defaultValue={props.get.sizeType[0].size}
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value={props.get.sizeType[0].size} control={<Radio onClick={setValue}/>} label="26sm"/>
                            <FormControlLabel value={props.get.sizeType[1].size} control={<Radio onClick={setValue}/>} label="30sm"/>
                            <FormControlLabel value={props.get.sizeType[2].size} control={<Radio onClick={setValue}/>} label="40sm"/>
                        </RadioGroup>
                    </FormControl>
                <Button variant="outlined" onClick={handleClick}>Add to cart</Button>
            </div>
        </form>
    )
}
export default ProductItem;