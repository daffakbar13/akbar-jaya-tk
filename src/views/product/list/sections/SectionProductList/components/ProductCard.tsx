import { Box, styled } from '@mui/material'

const ProductCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  width: '100%',
  backgroundColor: 'white',
}))

export default ProductCard
