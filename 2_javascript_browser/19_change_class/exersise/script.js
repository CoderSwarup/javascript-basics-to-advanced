let d = document.getElementById('div3')

let x = prompt("enter 1 2 3")

let c = document.createElement('h1')


switch (x) {
  case '1':
    c.innerHTML = `<h1>red</h1>`
    d.append(c);
    d.classList.add("red")
    break;

  case '2':
    c.innerHTML = `<h1>green</h1>`
    d.append(c);
    d.classList.add("green")

    break;

  case '3':
    c.innerHTML = `yellow`
    d.append(c);
    d.classList.add("yellow")

    break;



}
console.log(document.body)
