import styles from "./CartModal.module.css";
import {createPortal} from "react-dom";
import {Button, IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {ProductAction} from "../../store/Product";
import DeleteIcon from '@mui/icons-material/Delete';

const BackDrop = () => {
    const dispatchFunction = useDispatch();
    const changeModal = () => {
        dispatchFunction(ProductAction.openOrCloseModal())
    }
    return <div className={styles.backDrop} onClick={changeModal}></div>;
}
const Modal = () => {
    const dispatchFunction = useDispatch();
    const totalItems = useSelector(state => state.product.cartItems);
    const totalAmount = useSelector(state=>state.product.totalAmount)

    const senOrderRequest = () => {
        console.log(totalItems)
    }

    const deleteSelectedItem = (e)=>{
        dispatchFunction(ProductAction.removeItem(e))
    }

    const inputChangeHandler = (e)=>{
        dispatchFunction(ProductAction.itemCountChanger(e))
    }


    const addedItems = totalItems.map(item=>
        <div key={Math.random()} className={styles.itemForm}>
            <p>{item.name}</p>
            <p>{item.size}</p>
            <p>{item.type==='food'?item.hasSouse?"yes":"no":""}</p>
            <p>{item.type==='food'?item.isSpicy?"yes":"no":""}</p>
            <input type="number" min={1} max={20} defaultValue={item.count} onChange={(e)=>{inputChangeHandler({item:item,newCount:e.target.value})}} className={styles.countInput}/>
            <p className={styles.price}>{item.price}$</p>
            <div>
                <IconButton  aria-label="delete" size="small" onClick={()=>deleteSelectedItem(item)}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </div>
        </div>
    )

    return (
        <div className={styles.modal}>
            {totalItems.length !== 0 ? <div>
                    <div className={styles.itemForm}>
                        <h2>Name</h2>
                        <h2>size</h2>
                        <h2>has souse</h2>
                        <h2>Is spicy</h2>
                        <h2>count</h2>
                        <h2>Amount</h2>
                        <h2></h2>
                    </div>
                {addedItems}
                </div>
                : <p>empty Cart</p>}
            {totalItems.length !== 0 && <div className={styles.pt30}>
                <p>Total price: {totalAmount}$</p>
                <Button variant="contained" color="success" onClick={senOrderRequest}>
                    ORDER
                </Button>
            </div>
                }
        </div>
    );
}
const CartModal = () => {

    return (
        <>
            {createPortal(<BackDrop/>, document.getElementById("backdrop"))}
            {createPortal(<Modal/>, document.getElementById("modal"))}
        </>
    )
}
export default CartModal;