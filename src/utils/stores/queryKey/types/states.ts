import { ProductList } from '@akbar/services/dummyjson/types'
import { UseQueryOptions } from 'react-query'

export type QueryKeyStates = {
  product: UseQueryOptions<ProductList> & { queryKey: string[] }
}
