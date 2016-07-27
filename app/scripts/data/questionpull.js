import $ from 'jquery';
import store from '../store';

function questionPull () {
  let randInt = Math.ceil(Math.random()*18400);
  $.ajax({
    url: `http://jservice.io/api/categories?count=6&offset=${randInt}`,
    success: function(response) {
      let catArray = response.map(function(category, i, arr){
        return category.id;
      });
      catArray.forEach(function(id, i, arr){
        $.ajax({
          url: `http://jservice.io/api/category?id=${id}`,
          success: function(response) {
            let batch = {
              category: response.title,
              id: response.id,
              clues: []
            }
            for (var i = 200; i <=1000; i+=200) {
              response.clues.forEach(function(clue){
                if (clue.value===i) {
                  batch.clues[(i/200)-1] = {
                    id: clue.id,
                    answer: clue.answer,
                    question: clue.question,
                    value: clue.value
                  }
                }
              });
            }
            store.questionBank.push(batch);
            console.log(store.questionBank);
          }
        });
      });
    }
  })

};

export default questionPull;
