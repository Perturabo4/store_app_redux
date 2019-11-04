import React from 'react'
import './shop-header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

import './shop-header.css';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header row">
            <a href="#" className="logo text-dark">ReStore</a>
            <a href="#" className="shopping-cart">
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/>
                {numItems} items (${total})
            </a>
        </header>
    )
}

export default ShopHeader;