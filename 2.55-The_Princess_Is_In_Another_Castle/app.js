class PlayerBuild {
    constructor (name, totalCoins = "0", status = "Big", hasStar = false, gameActive = true, firstTime = true){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
        this.firstTime = firstTime
    }
    setName(){
        if(10*(Math.random()) < 5){
            this.name = "Mario"
        } else {
            this.name = "Luigi"
        }
    }
    gotHit(){
        if(this.status === "Small"){
            this.status = "Dead"
            console.log("Game Over")
            this.gameActive = false
        }
        if(this.status === "Big"){
            this.status = "Small"
        }
        if(this.status === "Powered Up"){
            this.status = "Big"
        }
        if(this.hasStar === true){
            this.hasStar = false
        }
    }
    gotPowerup(){
        if(this.status === "Powered Up"){
            this.hasStar = "true"
        }
        if(this.status === "Big"){
            this.status = "Powered Up"
        }
        if(this.status === "Small"){
            this.status = "Big"
        } else {
            return true
        }
    }
    addCoins(){
        this.totalCoins++
    }
    randomNumber(){
        let someNumber = Math.floor((Math.random())*3)
        console.log(someNumber)
        if(someNumber === 0){
            this.gotHit()
            console.log("you got hit")
        }
        if(someNumber === 1){
            this.gotPowerup()
            console.log("got a mushrooom")
        }
        if(someNumber === 2){
            this.addCoins()
            console.log("take a coin")
        }
    }
    printGame() {
        if(this.firstTime === true){
            this.firstTime = false
            this.setName()
        }        
        const {name, totalCoins, status} = this
        console.log(`Name: ${name}\nStatus: ${status}\nTotal Coins: ${totalCoins}`)
        this.randomNumber()
        if(this.status === "Dead"){
            console.log(`Your score was ${this.totalCoins}!`)
            clearInterval(intervalID)
        }
    }
}

let myPlayer = new PlayerBuild
let show = () => myPlayer.printGame()
const intervalID = setInterval(show,3000)