import React, { useState, useEffect } from 'react';
import {SingleProduct, Container, Carousel} from '../components';
import { apiUrl } from '../API/api';

function Home() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${apiUrl}products`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []); // Only run once when the component mounts
    return (
        <div>
            <Container>
                <Carousel/>
            </Container>
            <Container>
                {!loading ? (
                    
                    <div>
                        <h1 className='text-align-center'>Top Rated Prouducts</h1>
                        <div className="row">
                            {products?.map((product) => (
                                <div key={product.id} className="col-md-3 mb-4">
                                    <SingleProduct product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <h1>Loading.....</h1>
                )}
            </Container>
        </div>
    );
}

export default Home;
