console.log(document.getElementsByTagName('p'))
console.log(document.getElementsByClassName('sample'))
console.log(document.querySelectorAll("p.sample"))
console.log(document.querySelector("p.sample"))
console.log(document.getElementById('test'))

document.getElementById('test').style.color = 'red'

document.querySelectorAll('p.sample')[0].style.color = "red"



for(element of document.querySelectorAll('p.sample')){
    console.log(element)
    element.style.color = 'red'
}
/*

for(i=0; i<document.querySelectorAll('p.sample').length; i++){
    document.querySelectorAll('p.sample')[i].style.color = 'blue'
}



document.getElementById('clickThisButton').addEventListener('mouseover',() => {
    alert('Clicked')
})

*/


document.getElementById('clickThisButton').addEventListener('click',function(e) {
    for (i of document.querySelectorAll('p.sample')){
      i.style.color = 'red'  
    }
})

for ( element of document.getElementsByClassName('sample')) {
    element.addEventListener('mouseover',(e)=> {
        e.target.style.color = 'black'
    })
}