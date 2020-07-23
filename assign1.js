'use strict'
let jeffHeight=20
let jeffMass= 80
let toddHeight= 15
let toddMass= 75
let jeffBmi
let toddBmi

jeffBmi = (jeffMass/(jeffHeight*jeffHeight))*100
toddBmi = (toddMass/(toddHeight*toddHeight))*100
console.log(jeffBmi)
console.log(toddBmi)

let jeffHigherBmi = jeffBmi > toddBmi

if(jeffBmi > toddBmi){
    console.log('Jeff has higher BMI than todd');

}
else{
    console.log('Todd has higher BMI than jeff');
}

