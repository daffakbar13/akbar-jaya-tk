import useProductStore from '@akbar/utils/stores/product'
import { Grid, Typography, Chip, Rating } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

export default function SectionProductInfo() {
  const router = useRouter()
  const { getProductByID } = useProductStore()
  const product = getProductByID(Number(router.query.id as string))

  return (
    <>
      {product && (
        <Grid container columns={2} gap={1} textAlign="start">
          <Grid item xs={2} sm>
            <Typography sx={{ fontWeight: 'bold' }}>
              {product.title} - {product.brand}
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography>$ {product.price.toLocaleString()}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{product.description}</Typography>
          </Grid>
          <Grid item xs={2} sm>
            <Chip label={product.category} />
          </Grid>
          <Grid item xs="auto">
            <Rating value={product.rating} readOnly />
          </Grid>
        </Grid>
      )}
    </>
  )
}
