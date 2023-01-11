const getImage = async()=>{
    try {
        const apiKey = 'RglSMFKJLvS78G5BXIPSW9Io6BKvilK4'
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await res.json()
    
        const {url}=data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)

    } catch (error) {
        console.error(error)
    }
}
getImage();