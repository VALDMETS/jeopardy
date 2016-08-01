import Bb from 'backbone';
import $ from 'jquery';
import store from '../store';

const BoardData = Bb.Model.extend({
    idAttribute: 'id',
    headers: {
      'Content-Security-Policy': 'http://jservice.io'
    },
    defaults: {
        questionList: []
    },

    questionPull: function() {
        this.set('questionList', []);
        let randInt = Math.ceil(Math.random() * 5000);
        console.log(randInt);
        $.ajax({
            url: `http://jservice.io/api/categories?count=6&offset=${randInt}`,
            success: (response) => {
                let catArray = response.map(function(category, i, arr) {
                    return category.id;
                });
                catArray.forEach((id, i, arr) => {
                    $.ajax({
                        url: `http://jservice.io/api/category?id=${id}`,
                        success: (response) => {
                            let batch = {
                                category: response.title.toUpperCase(),
                                cat_id: response.id,
                                clues: []
                            }
                            for (var i = 200; i <= 1000; i += 200) {
                                response.clues.forEach(function(clue) {
                                    if (clue.value === i) {
                                        batch.clues[(i / 200) - 1] = {
                                            id: clue.id,
                                            answer: clue.answer.toUpperCase(),
                                            question: clue.question.toUpperCase(),
                                            value: '$' + clue.value
                                        }
                                    }

                                });
                                if (! batch.clues[(i/200)-1]) {
                                  response.clues.forEach(function(findNullClue){
                                    if (!findNullClue.value) {
                                      batch.clues[i/200-1] = {
                                        id: findNullClue.id,
                                        answer: findNullClue.answer.toUpperCase(),
                                        question: findNullClue.question.toUpperCase(),
                                        value: '$' + i
                                      }
                                    }
                                  });
                                }

                            }
                            let tempList = this.get('questionList');
                            tempList.push(batch);
                            store.currentSelector = Math.floor(Math.random()*3);
                            store.alert.set(store.playerList[store.currentSelector].name + '\'S TURN TO PICK');
                            this.set('questionList', tempList);
                            this.trigger('update');
                        }
                    });
                });
            }
        })
    }
});

let boardData = new BoardData();

export default boardData;
