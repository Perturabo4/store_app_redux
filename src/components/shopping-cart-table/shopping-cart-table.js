import React from 'react'
import {connect} from 'react-redux';
import {bookDelete} from '../../actions';
import './shopping-cart-table.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {

        const { id, title, count, total } = item;

        return (
            <tr key={id}>
            <td>{idx + 1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>${total}</td>
            <td>
                <button
                    onClick={() => onIncrease(id)}  
                    className="btn btn-outline-success">
                    <FontAwesomeIcon icon={faPlusCircle}/>
                </button>
                <button 
                    onClick={() => onDecrease(id)}  
                    className="btn btn-outline-warning">
                    <FontAwesomeIcon icon={faMinusCircle}/>
                </button>
                <button
                    onClick={() => onDelete(id)} 
                    className="btn btn-outline-danger">
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </td>
        </tr>)
    }
    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(renderRow)
                    }
                 
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>    
    )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => {
            console.log(`Increase ${id}`)
        },
        onDecrease: (id) => {
            console.log(`Decrease ${id}`)
        },
        onDelete: (id) => dispatch(bookDelete(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);