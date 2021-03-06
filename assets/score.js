var endScores = JSON.parse(localStorage.getItem('scores'));
var resetBtn = document.getElementById('clear');
var tryAgainBtn = document.getElementById('tryAgain');

if (endScores === null){
}else{
    for (let index = 0; index < endScores.length; index++) {
       var a = document.createElement('li');
       var b = document.createTextNode(`${index + 1}, ${endScores[index].playerInitials.toUpperCase()} - ${endScores[index].userScore}`);
       a.appendChild(b);
       document.querySelector('#highScore').appendChild(a);
       a.className += 'userList';
    }}

function Ranking(){
   if (a.userScore < b.userScore){
      return 1;
   }
   if (a.userScore > b.userScore){
      return -1;
   }
   return 0;
}

tryAgainBtn.addEventListener('click', function(event){
   console.log(event)
   window.location.replace('../index.html')
});

resetBtn.addEventListener('click', function(){
   localStorage.clear();
   document.getElementById('highScore').innerHTML = ""
});