import React from 'react';
import Category from './category';
import store from '../store';
import boardData from '../data/boarddata';

const Board = React.createClass({
  getInitialState: function(){
    return {
      categoryList: []
    }
  },
  render: function() {
    let categoryMap = this.state.categoryList.map(function(category, i){
      return <Category cat={category} key={i}/>
    });
    return (
      <section className="mainboard">
        {categoryMap}
      </section>
    )
  },
  componentDidMount: function() {
    boardData.questionPull();
    boardData.on('update', () => {
      this.setState({
        categoryList: boardData.get('questionList')
      });
    });
  }
});

export default Board;
