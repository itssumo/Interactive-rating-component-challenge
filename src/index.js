let buttons = document.getElementsByClassName("rating"); 
const submitButton = document.getElementsByClassName('submit');
const chosenRating = document.getElementById('chosed-rating');
let container = document.getElementsByClassName('parent');
console.log(chosenRating);
let clicks=[]; 
for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", (e)=>{
        const id = e.path[0].id;
        clicks.push(id);
        const index = id - 1;
        chosenRating.innerHTML = id;
        buttons[index].classList.add('chosed-rating');
        if(clicks.length>1){
        buttons[clicks[0]-1].classList.remove('chosed-rating');
        clicks.shift();
         }

    });
}
// console.log(clicks);
function submit(e){
    e.preventDefault();
    container[0].classList.toggle('hid');
    container[1].classList.toggle('hid');


}



