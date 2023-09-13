
// all bears

export const allBears =async () =>{
    const response = await fetch("https://api.punkapi.com/v2/beers")
    const data = await response.json()
    return data
}

// get a single beer

export const singleBeer = async id =>{
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
    const data = await response.json()
    return data
}

// search a single beer

export const searchBeer = async beer_name =>{
    const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${beer_name}`)
    const data = await response.json()
    return data
}
