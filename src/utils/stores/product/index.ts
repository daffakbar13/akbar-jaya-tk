import { create } from 'zustand'
import { useEZVQuery } from '@akbar/utils/hooks'
import { ProductStates } from './types/states'
import { ProductActions } from './types/actions'

const useProductStore = create<ProductActions & ProductStates>()(() => ({
  getProductByID(id) {
    const product = useEZVQuery.getData('product')
    return product?.products.find((e) => e.id === id)
  },
}))

export default useProductStore
