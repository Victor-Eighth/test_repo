const competitorPizzas = ['Dodo', '123', 'DIABLO', 'Papa Johns', 'hawai', 'pepperoni'].map(v => v.toLowerCase());
const myPizza = ['Dodo', '123', 'aDIABLO', 'Papa Johns', 'hawai', 'pepperoni'].map(v => v.toLowerCase());
let pizzaBoolean = false;
for(const onePizza of myPizza){
    if (!competitorPizzas.includes(onePizza)){
        console.log(onePizza)
        pizzaBoolean = true
    }
}
if (pizzaBoolean == false) {
    console.log(null)
}

