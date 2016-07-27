import React from 'react';
import Clue from './clue';

const Category = React.createClass({
  render: function() {
    // console.log(this.props.cat);
    let clueList = this.props.cat.clues.map(function(clue, i){
      return <Clue data={clue} key={i}/>;
    });
    return (
      <section className="category">
        {this.props.cat.category}
        {clueList}
      </section>
    )
  }
});

export default Category;
