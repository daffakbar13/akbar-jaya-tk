import { create } from 'zustand'
import { GlobalStates } from './types/states'
import { GlobalActions } from './types/actions'

const useGlobalStore = create<GlobalActions & GlobalStates>()(() => ({}))

export default useGlobalStore
