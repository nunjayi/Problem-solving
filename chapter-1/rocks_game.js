/**
 * //Rocks game ->  “Rocks” game with two piles of rocks, say ten
in each. In each turn, one player may take either one rock (from either
pile) or two rocks (one from each pile). Once the rocks are taken, they
are removed from play. The player that takes the last rock wins the game.
You make the first move
*/

//Determine if player 1 wins or loses
//return W if player 1 wins and L if player 1 loses


function Rock(N,M){
	if(M%2==0 && N%2==0){
		return "L"
	}else{
		return "W"
	}
}
console.log(Rock(7,10))
console.log(Rock(6,10))
