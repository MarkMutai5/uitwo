import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material'


import useStyles from './styles';

function Product({product}){

    const classes = useStyles();

  return (
    <>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5' >
                        {product.price}
                    </Typography>
                </div>
                <div>
                    <Typography variant='h3' color='textSecondary'>
                        {product.description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to cart'>
                
                </IconButton>
            </CardActions>
        </Card>
    </>
  )
}

export default Product