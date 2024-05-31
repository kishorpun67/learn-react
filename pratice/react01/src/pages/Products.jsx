import React, {useState, useEffect} from 'react'
import {SingleProduct, Container} from '../components/index'
import { apiUrl } from '../API/api'
function Products() {
    const [loading, setLoading] = useState(true)
    const [products , setProducts] = useState([])
    useEffect(() =>{
        const fetchProducts = async() =>{
            const products = await fetch( `${apiUrl}products`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                }
            } );
            const data = await products.json()
            setProducts(data)
            setLoading(false)
        }
        fetchProducts()
    },[products])
    return( 
        <div>
            <Container>
                {!loading ? (
                    <div className='row'> 
                        {products?.map((product) => (
                            <div key={product.id} className="col-md-3 mb-4">
                                <SingleProduct product={product} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <h1>Loading.....</h1>
                )}
            </Container>
        </div>
    )
}

export default Products