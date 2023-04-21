import { useQuery } from 'react-query'
import { queryClient } from '@akbar/providers/ReactQueryProvider'
import useQueryKeyStore from '@akbar/utils/stores/queryKey'
import { QueryKeyStates } from '@akbar/utils/stores/queryKey/types/states'

type KeyofQKey = keyof QueryKeyStates
type QFn<K extends KeyofQKey> = Exclude<QueryKeyStates[K]['queryFn'], undefined>
type QFnResult<K extends KeyofQKey> = Awaited<ReturnType<QFn<K>>>

export default function useEZVQuery<K extends KeyofQKey>(key: K) {
  const q = useQueryKeyStore()
  return useQuery<QFnResult<K>>(q[key].queryKey)
}

useEZVQuery.getData = <K extends KeyofQKey>(key: K) => {
  const q = useQueryKeyStore.getState()
  return queryClient.getQueryData(q[key].queryKey) as QFnResult<K>
}
