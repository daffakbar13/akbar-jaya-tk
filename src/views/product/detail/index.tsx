import React from 'react'
import { Stack } from '@mui/material'
import { SectionHeroImage, SectionProductImages, SectionProductInfo } from './sections'

export default function PageProductDetail() {
  return (
    <>
      <SectionHeroImage />
      <Stack gap={2} padding={2}>
        <SectionProductInfo />
        <SectionProductImages />
      </Stack>
    </>
  )
}
