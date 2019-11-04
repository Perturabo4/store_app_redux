import React from 'react'
import './shop-header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

import './shop-header.css';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/>
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    )
}

export default ShopHeader;