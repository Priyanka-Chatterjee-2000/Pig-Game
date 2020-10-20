var scores,roundScore,activePlayer,dice,gamePlaying;
//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHtml='<em>'+dice+'</em>';
init();
document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying){
    //1.Random number
var dice=Math.floor(Math.random()*6)+1;
    //2.Display the result
var diceDOM=document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src='dice-'+dice+'.png';
//3. Update the round score If the rolled number was not 1
if(dice!==1)
{
    roundScore +=dice;
document.querySelector('#current-'+activePlayer).textContent=roundScore;
document.query
}
else
{
nextPlayer();
}
   }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    //add current score to globa score
scores[activePlayer]+=roundScore;
//update the UI
document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
var input=document.querySelector('.final-score').value;
if(input)
{
winningScore=input;
}
else
{
winningScore=25;
}
//Check if player won the game
if(scores[activePlayer]>=winningScore)
{
    if(activePlayer)
{
    var name='PLayer2 '+document.querySelector('.n-1').value;
}
else{ var name='Player1 '+document.querySelector('.n-0').value;}
    document.querySelector('#name-'+activePlayer).textContent=name +' is Winner!!';
document.querySelector('.dice').style.display='none';
document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
gamePlaying=false;
}
else{
//next player
nextPlayer();
}
    }
});
function nextPlayer()
{
    activePlayer===0? activePlayer=1:activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}
document.querySelector('.btn-new').addEventListener('click',init);


function init(){
    scores=[0,0];
roundScore=0;
activePlayer=0;
gamePlaying=true;
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent="Player 1";
document.getElementById('name-1').textContent="Player 2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}