

function calculation() {
    const inputElement = document.querySelector('.input-element');
    let cost = Number(inputElement.value); 
if(cost != Number(inputElement.value)){
 document.querySelector('.total').innerHTML =`please enter valid cost`
 return
}
  if (cost > 0 && cost <= 40) {
        cost += 10; 
    } else if (cost > 40 && cost <= 60) {
        cost += 5; 
    }

    document.querySelector('.total').innerHTML = `Total Cost : $${cost}`;
}

function keyDown(event) {
    if (event.key === "Enter") {
        calculation();
    }
}