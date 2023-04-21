import useProductStore from '@akbar/utils/stores/product'
import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'

export default function SectionProductImages() {
  const router = useRouter()
  const { getProductByID } = useProductStore()
  const product = getProductByID(Number(router.query.id as string))
  return (
    <>
      {product && (
        <Grid container columns={4} spacing={2}>
          {product.images.map((e, i) => (
            <Grid key={i} item xs={4} sm={1}>
              <Box width="100%" height={256} position="relative">
                <Image
                  src={e}
                  alt="Product Image"
                  fill
                  sizes="100%"
                  placeholder="blur"
                  blurDataURL={e}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}
