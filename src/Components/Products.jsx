import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'


function Products() {
    const products = [
        { id: 1, name: 'Shoes', description: 'runnig shoes', price: '$10'},
        { id: 1, name: 'Car', description: 'merc', price: '$10'},
        
    ]

  return (
    <main>
        <Grid container justify = 'center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products