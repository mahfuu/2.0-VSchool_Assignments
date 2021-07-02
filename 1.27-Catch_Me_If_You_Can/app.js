function sum(x, y){
    try {
        if(typeof(x) !== "number" || typeof(y) !== "number"){
            throw "One of the arguments is not a number"
        }
        console.log("code throwed nothing")
    }
    catch(err) {
        console.log(err)
    }
    finally {
        console.log("...finally")
        return x + y
    }
}
// console.log(sum(2, 3))
// console.log(sum("2", "3"))

const user = {username: "sam", password: "123abc"}
function login(username, password){
    try{
        if(username !== user.username || password !== user.password){
            throw "Something doesn't match"
        }
        console.log("Access Granted.")
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("finally")
    }
}
// login("sam", "al;sdkf")
// login("Sam", "123abc")
// login("sam", "123abc")