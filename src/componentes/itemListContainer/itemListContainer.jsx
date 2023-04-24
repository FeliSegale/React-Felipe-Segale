import { useEffect, useState } from "react"
import { mFetch } from "../mFetch/mFetch"
import ItemCount from "../ItemCount/ItemCount"



function Contenedor (){
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        mFetch()
        .then(resultado =>{
            return setProducto(resultado) 
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

console.log(producto)

    return <div style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-around`,
        flexWrap: `wrap`
    }}>
        {
            loading ? 
            <h2>cargando...</h2>
            :
            producto.map((producto)=> <div key={producto.id} className="card w-25 h-25" >
                <img style={{margin: 40}} src={producto.foto} className="card-image-top" alt="imagen-card" />
                <div className="card-body">
                <label>{producto.nombre}      </label>
                <br />
                <label>stock: {producto.stock}</label>
                <ItemCount />
                </div>
                <div className="card-footer">
                <button className="btn btn-outline-dark">Detalle</button>
                </div>
            </div> )
        }
</div>
}

export default Contenedor