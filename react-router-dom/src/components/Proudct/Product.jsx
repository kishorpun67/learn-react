import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
function Product() {
    const data = useLoaderData()
    const {userid} = useParams()
    console.log(userid)
  return (
    <div>Product</div>
  )
}

export default Product