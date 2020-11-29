import React from 'react'
import "./cart-icon.style.scss"
// name svg hatman bayad pascalbase bashad
import { ReactComponent as ShoppingIcon } from '../../assets/11.3 shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import {selectCartItemCount} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect'



function CartIcon({toggleCartHidden,itemCount}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count"> {itemCount} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        toggleCartHidden:() => dispatch(toggleCartHidden())
    }
}
const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
