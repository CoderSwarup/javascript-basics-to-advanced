//guess number 
let number = 55;
let gess;
let chance = 0;

do{
	gess = prompt("Enter a guess number ")
	
	if(gess<number){
		console.log("Higher number please 🥰")
	}
	else if(gess>number){
		console.log("Lower number please 🥰")
	}
	else{
		console.log("enter number is correct")
		console.log("you have guessed  in"+chance+" attempt")
	}
	chance++;
}while(number!=guess)
