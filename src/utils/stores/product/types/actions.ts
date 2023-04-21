/* eslint-disable no-unused-vars */
import { Product } from '@akbar/services/dummyjson/types'

export type ProductActions = {
  getProductByID(id: number): Product | undefined
}
