
let productos = [
    {id: 1, nombre: "producto 1", stock: 5, foto: "data:image/jpeg;base64,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"},
    {id: 2, nombre: "producto 2", stock: 1, foto:"data:image/jpeg;base64,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"},
    {id: 3, nombre: "producto 3", stock: 25, foto:"https://www.clarin.com/img/2017/07/03/B1EUs1d4W_1256x620.jpg"}
]
export const mFetch = () =>{
    return new Promise((res, rej) =>{
        setTimeout(()=>{
    res (productos)
    }, 1000)
})
} 