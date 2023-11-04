console.log("method overhanging , Super keyword")

class student{
  name(name)  {
    console.log(`student name is ${name}`)
  }
  
  roll(no){
     console.log(`student roll is ${no}`)
  }
}




class pro extends student{
  fvalang(lang){
    console.log(`fav lang is ${lang}`)
  }
  
  //extend method
  name(name){
    //super keyword
    //use to call perent class function
    super.roll(55)
        console.log(`programmer student name is ${name}`)

  }
}



let s = new student()
s.name("sam")
s.roll(33)


let z = new pro()
z.fvalang("c++")
z.name("ssss")
