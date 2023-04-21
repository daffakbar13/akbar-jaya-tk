import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import useProductStore from '@akbar/utils/stores/product'
import { useRouter } from 'next/router'

export default function SectionHeroImage() {
  const router = useRouter()
  const { getProductByID } = useProductStore()
  const product = getProductByID(Number(router.query.id as string))

  return (
    <>
      {product && (
        <Box width="100%" height="50vh" position="relative">
          <Image
            src={product.thumbnail}
            alt="Product Image"
            fill
            sizes="100%"
            placeholder="blur"
            blurDataURL={product.thumbnail}
          />
        </Box>
      )}
    </>
  )
}
