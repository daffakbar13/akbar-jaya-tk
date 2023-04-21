import { createService } from '..'
import { ProductList } from './types'

const dummyjson = createService(process.env.NEXT_PUBLIC_DUMMY_JSON_URL)

export const getProduct = () => dummyjson.get<null, ProductList>('product')
