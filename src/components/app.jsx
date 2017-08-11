import React, { Component } from 'react';

/* Containers */
import BookList from '../containers/book-list';
/* Components */
import BookDetail from './book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
