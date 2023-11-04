console.log("Class Object")


//Create a class 
class railbooking{
  
  fill(name , trainNo){
    this.name = name;
    this.trainNo = trainNo;
  }
  
  book(){
    console.log(this.name + ": Your train ticket is booked and your tain No. Is : " + this.trainNo)
  }
  
  cancel(){
        console.log(this.name + ": Your train ticket is cancel and your tain No. Is : " + this.trainNo)

  }
  
  
  
}



let sam = new railbooking()

sam.fill("Sam", 12052)
sam.book()


let sammy = new railbooking()

sammy.fill("Sammy" , 10101)
sammy.book()


sam.cancel()
