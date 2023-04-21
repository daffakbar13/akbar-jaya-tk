import { queryClient } from '@akbar/providers/ReactQueryProvider'
import useQueryKeyStore from '@akbar/utils/stores/queryKey'
import { QueryKeyStates } from '@akbar/utils/stores/queryKey/types/states'
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash'

export default function useIsFetching(...queryKeys: (keyof QueryKeyStates)[]) {
  const q = useQueryKeyStore()
  const isFetchings = queryKeys.map((e) => queryClient.isFetching(q[e].queryKey))

  return _.sum(isFetchings) > 0
}
