import ItemDetail from '../itemDetail/itemDetail'
import { mFetch } from "../mFetch/mFetch"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {

  const [item, setItem] = useState([])
  useEffect(() =>{
    mFetch()
    .then(resultado =>{
        return setItem(resultado)
    .then(console.log(item))
    })
    .catch(error => console.log(error))
}, [])
  return (
    <div>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer