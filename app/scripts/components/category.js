import React from 'react';
import Clue from './clue';

const Category = React.createClass({
  render: function() {
    return (
      <section className="category">
        Whatatoochi
        <Clue/>
        <Clue/>
        <Clue/>
        <Clue/>
        <Clue/>
      </section>
    )
  }
});

export default Category;
