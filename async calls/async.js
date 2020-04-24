console.log("Started")

setTimeout(()=>{
    console.log("2 secs have passed")
},2000
)


console.log("stoppinggggg")

const add = (a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },3000)
}

add(100,400,(sum)=>{
    console.log(sum)
})

const addd = 300+400

console.log(addd)
setTimeout(()=>{
    console.log("by this time everything shud have completed")
},4000)


const dict = {
    name:"Avinash",
    age:27,
    result:"this is msg"
}

console.log(dict)


const {name, age, result} = dict //name,age , result are declaration

console.log(name,age,result )