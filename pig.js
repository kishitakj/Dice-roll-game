
//var dice, rscore=0,score=[0,0],activeplayer=0, gplaying=true;
//document.querySelector('.dice').style.display= 'none';
//dice = Math.floor(Math.random()*6) + 1;
var score=[0,0], rscore=0, activeplayer=0, gplaying,dice;







init();


function nextplayer(){
    document.querySelector('#current-' + activeplayer).textContent= '0';
    activeplayer=== 0? activeplayer= 1 : activeplayer= 0;
    rscore=0;
    document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';


document.querySelector('.player-0-panel').classList.toggle('active')
document.querySelector('.player-1-panel').classList.toggle('active')
document.querySelector('.dice').style.display= 'none'




}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gplaying){

  var  dice = Math.floor(Math.random()*6) + 1;

  var diceDom = document.querySelector('.dice');
  diceDom.style.display='block';
  diceDom.src= 'dice-' + dice + '.png';

  if(dice!==1){
   rscore= rscore + dice;  
  document.querySelector('#current-' + activeplayer).textContent= rscore;
  }

  else{
    
nextplayer();


  }
    }

})

document.querySelector('.btn-hold').addEventListener('click', function(){
if(gplaying){
    score[activeplayer] += rscore;
    document.querySelector('#score-' + activeplayer).textContent =score[activeplayer];

    if(score[activeplayer]>=20)
    {
        document.querySelector('#name-'+ activeplayer).textContent= 'WINNER!'
        document.querySelector('.dice').style.display='none'
        document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
        gplaying = false;
        
        

    }
else{
    nextplayer();
}

}
});

document.querySelector('.btn-new').addEventListener('click', init)

function init(){
    var rscore=0
    var score=[0,0];
    var activeplayer=0
    gplaying = true;
    var dice;
    document.querySelector('#current-'+ activeplayer).textContent= dice;
document.querySelector('.dice').style.display= 'none';
document.getElementById('score-0').textContent= '0';
document.getElementById('score-1').textContent= '0';
document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';
document.getElementById('name-0').textContent= 'Player 1';
document.getElementById('name-1').textContent= 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
