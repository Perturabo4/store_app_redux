import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux'; // использование bindActionCreators

import {booksloaded} from '../../actions';
import withBookstoreService from '../hoc/with-bookstore-service';
import compose from '../../utils';
import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService, booksloaded} = this.props;
        const data = bookstoreService.getBooks();
        
        booksloaded(data);
    }

    render() {
        const {books} = this.props;
        
        return (
            <ul className="book-list">
                {
                   books.map((book) => {
                       return (
                           <li key={book.id}>
                               <BookListItem book={book} />
                           </li>
                       )
                   }) 
                }
            </ul>
        );
    }
}

const mapStateToProps = ({books}) => {
    return {books};
}
// использование bindActionCreators
// const mapDispatchToProps = (dispatch) => { 
//     return bindActionCreators({ 
//         booksloaded
//     }, dispatch)
// }

const mapDispatchToProps = { // передаем функцию actioncreator 
    booksloaded
}

export default compose (
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// export default withBookstoreService()(
//         connect(mapStateToProps, mapDispatchToProps)(BookList)
//     );