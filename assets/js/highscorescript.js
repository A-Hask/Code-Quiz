var highScoreEl = document.querySelector("#high-scores");
//get local scores
highScoreEl = Storage.getItem(initials);
//sort scores from highest to lowest
highScoreEl.sort();
//append child to the page
highScoreEl.appendChild();
//optional: button to clear high scores
$("#clear-high-scores").click(function(){
    var text = $('button/>',
    {
        text: "test",
        click: function(){alert("hi");}
    });
    var parent = $('<tr><td></td></tr>').before(parent);
});
localStorage.clear
//call highscore function