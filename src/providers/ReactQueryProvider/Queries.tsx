import { useQueries } from 'react-query'
import useQueryKeyStore from '@akbar/utils/stores/queryKey'
import React from 'react'

export default function Queries() {
  const q = useQueryKeyStore()
  useQueries([q.product])

  return <></>
}
