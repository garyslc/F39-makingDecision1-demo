
let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack){
    console.log ("Jon has better attack than Jameie")

}else if(jamieLannisterAttack > jonSnowAttack)
console.log("Jamie has better attack than Jon")

let jonSnowHealth = 100
let jonSnowDefense = 0

if  (jonSnowHealth <= jamieLannisterAttack){
    console.log("John has been slain")
}else{
jonSnowHealth -= jamieLannisterAttack
console.log("Jon's health is down to + jonSnowHealth")
}

let coinLandsHead = false
if (coinLandsHead === true){
    console.log("John is allowed to run away")
}

    // }else{
//     console.log(Jamie has better attack than Jon")
// }

console.log("----")

if(jonSnowHealth <= 0){
    console.log()
}

// for(let i = 0; i < 5; i++} {
//     jonSnowHealth -= jamieLannisterAttack
//     console.log('Johns Health is ${JohnsnowHealth}')

    //
while(jonSnowHealth  > 0){
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    if(jonSnowHealth < 0 ){

    }
    console.log(`Jons Health is ${jonSnowHealth}`)
    if(jonSnowHealth <= 0) {
        console.log("Jon has been slain")
    }


}