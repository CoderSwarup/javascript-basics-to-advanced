//you can also use this method to find id and class but also use getelem
//console.log(id1)


//mateches

let id1 = document.getElementById("id1")
console.log(id1.matches(".box"))
console.log(id1.matches(".bx"))
console.log(id1.matches(".sp1"))


//closest

let sp = document.getElementById("sp1")
console.log(sp.closest("#id1"))
console.log(sp.closest("#sp1"))


//contains
console.log(id1.contains(sp));
