const apiKey = 'RglSMFKJLvS78G5BXIPSW9Io6BKvilK4'

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
httpCall.then(res=>res.json())
.then(({data})=>{
    const {url}=data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})
.catch(console.warn)