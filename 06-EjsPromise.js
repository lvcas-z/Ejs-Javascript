import {getHeroById,getHeroByOwner} from '../src/05-EjImpExp'
// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const p1 = getHeroById(2)
//         const owner = getHeroByOwner('DC')
//         // resolve(p1)
//         reject('No se pudo encontrar el heroe')
//     }, 2000);
// })
// promesa.then((heroe)=>{
//     console.log('Then de la promise',heroe)
// })
// .catch(err=>console.warn(err))

const getHeroByIdAsync = (id)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroById(id)
            if (p1) {
                resolve(p1)
            } else {
                reject('No se pudo encontrar el heroe')
            }
        }, 2000);
    });
}
getHeroByIdAsync(1).then(console.log)
.catch(console.warn)