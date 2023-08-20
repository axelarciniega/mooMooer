
let clickUpgrades = [
    {
        name: 'alfalfa',
        price: 100,
        quantity: 0,
        multiplier: 1
    },
    {
    name: 'milk',
    price: 150,
    quantity: 0,
    multiplier: 1
  }
];

let automaticUpgrades = [
    {
        name: 'milker',
        price: 600,
        quantity: 0,
        multiplier: 20
    },
    {
        name: 'dairy',
        price: 700,
        quantity: 0,
        multiplier: 30
    }
];

let totalMoos = 0 

function moo(){
    totalMoos+= clickUpgrades[0].multiplier
    if(clickUpgrades[1].multiplier >= 2){
        totalMoos+=clickUpgrades[1].multiplier
    }
    update()
}









function update(){
    let mooCountElem = document.getElementById("mooCount").innerHTML = `Total Moos: ${totalMoos}`
}

function collectClickUpgrades(){
    clickUpgrades.find(upgrade => {
        if(upgrade.quantity > 0){
            totalMoos+=upgrade.multiplier
        }
    })
    update()
}


function collectAutoUpgrades(){
        automaticUpgrades.find(upgrade => {
        if(upgrade.quantity > 0){
            totalMoos+= upgrade.multiplier
        }
    })
    update()
}

function buyUpgrades(upgradeName){
    let foundUpgrade = clickUpgrades.find(upgrade => upgrade.name == upgradeName)
    if( totalMoos >= foundUpgrade.price){
        foundUpgrade.quantity++
        foundUpgrade.multiplier++
        totalMoos-= foundUpgrade.price
    }
    console.log(foundUpgrade)
    collectClickUpgrades()
    moreClickQuantity(upgradeName)
    drawClickUpgrades()
}

function buyAutomaticUpgrades(upgradeName){
    let foundUpgrade = automaticUpgrades.find(upgrade => upgrade.name == upgradeName)
    if(totalMoos >= foundUpgrade.price){
        foundUpgrade.quantity++
        foundUpgrade.multiplier+=20
        totalMoos-= foundUpgrade.price
    }
    console.log(foundUpgrade)
    collectAutoUpgrades()
    moreAutoQuantity(upgradeName)
    drawAutomaticUpgrade()
}

function moreClickQuantity(upgradeName){
    let foundUpgrade = clickUpgrades.find(upgrade => upgrade.name == upgradeName)
    if(foundUpgrade.quantity > 0){
            foundUpgrade.price+=15
        
    }
    if(foundUpgrade.quantity > 1){
            foundUpgrade.price+=25
        
        }
        if(foundUpgrade.quantity > 2){
            foundUpgrade.price+=50
            
        }
}

function moreAutoQuantity(upgradeName){
    let foundUpgrade = automaticUpgrades.find(upgrade => upgrade.name == upgradeName)
    if(foundUpgrade.quantity > 0){
        foundUpgrade.price+=200
    }
    if(foundUpgrade.quantity > 1){
            foundUpgrade.price+=400
            totalMoos+=40
        }
        if(foundUpgrade.quantity > 2){
            foundUpgrade.price+=500
            totalMoos+=60
        }
    
}








let drawElem = document.getElementById('draw')
let drawAutomaticElem = document.getElementById('drawAutomatic')
let priceElem = document.getElementById('price')




function drawAutomaticUpgrade(){
    let template = ''
    automaticUpgrades.forEach(upgrade => {
        if(upgrade.quantity > 0){
            template += `
            <span id="drawAutomatic1">|${upgrade.name} x${upgrade.quantity} click:+${upgrade.multiplier}       every 3 seconds|</span>`
        }
    })
    drawAutomaticElem.innerHTML = template
    // update()
    document.getElementById('price3').innerText = `Price:${automaticUpgrades[0].price}` 
    document.getElementById('price4').innerText = `Price:${automaticUpgrades[1].price}`
}



function drawClickUpgrades() {
    let template = ''
    clickUpgrades.forEach(upgrade => {
        if(upgrade.quantity > 0){
            template += `
            <span>| ${upgrade.name} x${upgrade.quantity} click:+${upgrade.multiplier}}</span>`
        }
    })
    drawElem.innerHTML = template
    // update()
    document.getElementById('price').innerText =`Price:${clickUpgrades[0].price}`
    document.getElementById('price2').innerText = `Price:${clickUpgrades[1].price}`
}

document.getElementById('price').innerText = `Price:${clickUpgrades[0].price}`

document.getElementById('price2').innerText = `Price:${clickUpgrades[1].price}`

document.getElementById('price3').innerText = `Price:${automaticUpgrades[0].price}` 

document.getElementById('price4').innerText = `Price:${automaticUpgrades[1].price}`






setInterval(collectAutoUpgrades, 3000)
