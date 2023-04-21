import { create } from 'zustand'
import { getProduct } from '@akbar/services/dummyjson'
import { QueryKeyActions } from './types/actions'
import { QueryKeyStates } from './types/states'

const useQueryKeyStore = create<QueryKeyActions & QueryKeyStates>()(() => ({
  product: {
    queryKey: ['Product Category'],
    queryFn: () => getProduct(),
    enabled: false,
  },
}))

export default useQueryKeyStore
