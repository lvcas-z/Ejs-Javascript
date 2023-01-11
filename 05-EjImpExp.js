import heroes,{owners} from '../src/data/heroes'
console.log(owners)

export const getHeroById = (id)=> heroes.find((hero)=> hero.id===id)

// console.log(getHeroById(2))

export const getHeroByOwner= (owner)=> heroes.filter((hero)=> hero.owner===owner)
// console.log(getHeroByOwner('DC'))