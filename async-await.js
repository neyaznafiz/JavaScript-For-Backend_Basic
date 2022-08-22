

const itPromise = new Promise((resolve, rejecte) => {
    setTimeout(() => {
        resolve('Success!')
    }, 1000)
})

const getData = async () => {

    // const res = []
    const res = await itPromise
    console.log(res);
}

getData()


// fetch('')
//     .then(res => res.json())
//     .then(data => console.log(data))
 //    .catch(err => console.log(err))

const getUser = async () => {
    const res = await fetch('')
    const { data: user } = await res.json()

    const res2 = await fetch(`https://www.example.com/${user.id}`)
    const { data: products } = res2.json()

    console.log(products);
}