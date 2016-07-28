import React from 'react';
import Clue from './clue';

const Category = React.createClass({
  render: function() {
    let clueList = this.props.cat.clues.map(function(clue, i){
      return <Clue data={clue} key={i}/>;
    });
    return (
      <section className="category">
        <div>
          {this.props.cat.category}
        </div>
        {clueList}
      </section>
    )
  }
});

export default Category;
