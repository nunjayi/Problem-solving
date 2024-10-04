/**
 * Input -> an integer: Money
 * 	    an Array: denominations C = [C1,C2,....Cn]in decreasing order: (C1>C2>....>Cn)
 *
 *
 * Output -> A list: "n" number of integers i1,i2,...in such that C1.i1+ C2.i2 ....Cn.in = Money and i1+i2+ ...+in is as minimal as possible
 *
 * PSEUDOCODE:
 *
 * Change(money,c,n):
 * 	while money>0:
 * 		coin<- coin with the largest denomination that does not exceed money give coin with denomination coin to customer
 * 		money<- money-coin
 * 		
 */

function  Change(money,c,d){
	let r = money
	let i = new Array(d).fill(0)
// initialize an arra to store i1,i2,...,id
	for(let k =0;k<d;k++){
		i[k] = Math.floor(r/c[k])
		r = r -(c[k]*i[k])
	}
	return i

}

let money = 100
let c = [50,20,10]
let d = c.length;
let result = Change(money,c,d)
console.log(result)
