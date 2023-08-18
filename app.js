
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
    totalMoos++
    moreClickQuantity()
    moreAutoQuantity()
    update()
}




function buyUpgrades(upgradeName){
    let foundUpgrade = clickUpgrades.find(upgrade => upgrade.name == upgradeName)
    if( totalMoos > foundUpgrade.price){
        foundUpgrade.quantity++
        foundUpgrade.multiplier++
        totalMoos-= foundUpgrade.price
    }
    console.log(foundUpgrade)
    collectClickUpgrades()
    moreClickQuantity()
    drawClickUpgrades()
}


function buyAutomaticUpgrades(upgradeName){
    let foundUpgrade = automaticUpgrades.find(upgrade => upgrade.name == upgradeName)
    if(totalMoos > foundUpgrade.price){
        foundUpgrade.quantity++
        foundUpgrade.multiplier+=20
        totalMoos-= foundUpgrade.price
    }
    console.log(foundUpgrade)
    collectAutoUpgrades()
    moreAutoQuantity()
    drawAutomaticUpgrade()
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



function moreClickQuantity(){
    clickUpgrades.forEach(upgrade => {
        if(upgrade.quantity > 0){
            upgrade.price+=200
            totalMoos+=1
        }
        if(upgrade.quantity > 1){
            upgrade.price+=20
            totalMoos+=2
        }
        if(upgrade.quantity > 2){
            upgrade.price+=50
            totalMoos+3
        }
    })
    
}

function moreAutoQuantity(){
    automaticUpgrades.forEach(upgrade => {
        if(upgrade.quantity > 0){
            upgrade.price+=200
            totalMoos+=20
        }
        if(upgrade.quantity > 1){
            upgrade.price+=200
            totalMoos+=40
        }
        if(upgrade.quantity > 2){
            upgrade.price+=500
            totalMoos+=60
        }
    })
}








let drawElem = document.getElementById('draw')
let drawAutomaticElem = document.getElementById('drawAutomatic')
let priceElem = document.getElementById('price')

function drawClickPrices(price){
    clickUpgrades.forEach(upgrade => {
        let price = upgrade.price
    })
    priceElem.innerText = ``
}


function drawAutomaticUpgrade(){
    let template = ''
    automaticUpgrades.forEach(upgrade => {
        if(upgrade.quantity > 0){
            template += `
            <span id="drawAutomatic1">|${upgrade.name} x${upgrade.quantity} click:+${upgrade.multiplier}       every 3 seconds|</span>`
        }
    })
    drawAutomaticElem.innerHTML = template
    update()
}



function drawClickUpgrades() {
    let template = ''
    clickUpgrades.forEach(upgrade => {
        if(upgrade.quantity > 0){
            template += `
            <span>| ${upgrade.name} x${upgrade.quantity} click:+${upgrade.multiplier} |</span>`
        }
    })
    drawElem.innerHTML = template
    update()
}




setInterval(collectAutoUpgrades, 3000)
collectAutoUpgrades()
