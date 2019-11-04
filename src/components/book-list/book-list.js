import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux'; // использование bindActionCreators

import {booksloaded, booksRequested, booksError} from '../../actions';
import withBookstoreService from '../hoc/with-bookstore-service';
import compose from '../../utils';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import './book-list.css';


class BookList extends Component {

    componentDidMount() {
        const {
               bookstoreService, 
               booksloaded, 
               booksRequested,
               booksError
            } = this.props;

        booksRequested();
        bookstoreService.getBooks()
        .then((data) => booksloaded(data))
        .catch((err) => booksError(err));
    }

    render() {
        const {books, loading, error} = this.props;

        if(loading) {
            return <Spinner />;
        }
        if(error) {
            return <ErrorIndicator />
        }
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

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error};
}
// использование bindActionCreators
// const mapDispatchToProps = (dispatch) => { 
//     return bindActionCreators({ 
//         booksloaded
//     }, dispatch)
// }

const mapDispatchToProps = { // передаем функцию actioncreator 
    booksloaded,
    booksRequested,
    booksError
}

export default compose (
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// export default withBookstoreService()(
//         connect(mapStateToProps, mapDispatchToProps)(BookList)
//     );