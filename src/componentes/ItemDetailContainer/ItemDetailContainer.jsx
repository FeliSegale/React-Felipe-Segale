import ItemDetail from '../itemDetail/itemDetail'
import { mFetch } from "../mFetch/mFetch"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    mFetch()
      .then(resultado => {
        setItem(resultado)
        console.log(resultado)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <ItemDetail item={item}/>
    </div>
  );
}

export default ItemDetailContainer