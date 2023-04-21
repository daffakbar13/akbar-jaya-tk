import { useEZVQuery } from '@akbar/utils/hooks'
import React from 'react'
import Image from 'next/image'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { ProductCard } from './components'

export default function SectionProductList() {
  const product = useEZVQuery('product')
  return (
    <Grid container columns={8}>
      {product.data?.products.map((e, i) => (
        <Grid key={i} item xs={4} sm={2} lg={1}>
          <Box padding={1}>
            <ProductCard>
              <Stack width="100%" gap={1} textAlign="left">
                <Box
                  width="100%"
                  position="relative"
                  boxShadow={(t) => t.shadows[1]}
                  borderRadius={1}
                  sx={{ aspectRatio: '1/1' }}
                >
                  <Image
                    src={e.thumbnail}
                    alt="Product Image"
                    fill
                    sizes="100%"
                    placeholder="blur"
                    blurDataURL={e.thumbnail}
                    style={{ objectFit: 'cover', borderRadius: 8 }}
                  />
                </Box>
                <Typography
                  sx={{
                    overflow: 'hidden',
                    lineHeight: '17px',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                  }}
                  minHeight={34}
                >
                  {e.title} - {e.brand}
                </Typography>
                <Typography fontWeight="bold">Rp. {e.price.toLocaleString()}</Typography>
                <Typography fontSize={14} color="primary.main" textAlign="right">
                  Stok: {e.stock}
                </Typography>
                <Button size="medium" fullWidth onClick={(event) => event.stopPropagation()}>
                  + Tambah
                </Button>
              </Stack>
            </ProductCard>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}
