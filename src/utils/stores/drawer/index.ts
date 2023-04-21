import { create } from 'zustand'
import { DrawerStates } from './types/states'
import { DrawerActions } from './types/actions'

const useDrawerStore = create<DrawerActions & DrawerStates>()((set, get) => ({
  isOpenDrawer(isDrawerOpen) {
    return isDrawerOpen === get().isDrawerOpen
  },
  openDrawer(isDrawerOpen) {
    set({ isDrawerOpen })
  },
  closeDrawer() {
    get().openDrawer(undefined)
  },
  openMenu() {
    get().openDrawer('menu')
  },
}))

export default useDrawerStore
