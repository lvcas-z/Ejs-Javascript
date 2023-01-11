const characters = ['Goku','Vegeta','Broly']

const[,p2]=characters;
console.log(p2)

const State = (valor)=>{
    return [valor,()=>{console.log('Hola mundo')}]
}

const [nombre,setNombre] = State("Goku")
console.log(nombre)
setNombre()