const person ={
    name:'Tony',
    age:45,
    key:'Ironman'
}

const Context = ({key,name,age , rol = 'Leader'}) => {
    return{
        keyName : name,
        age : age,
        teams:{
            avengers:'avenger',
            teamIron:'team iron man'
        }
    }
}
const{keyName , age, teams:{avengers ,teamIron}} = Context(person);
console.log(keyName,age);
console.log(`The team is ${teamIron} and ${avengers}`);