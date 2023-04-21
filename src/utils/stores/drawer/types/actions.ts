/* eslint-disable no-unused-vars */
import { DrawerStates } from './states'

export type DrawerActions = {
  isOpenDrawer(isDrawerOpen: DrawerStates['isDrawerOpen']): boolean
  openDrawer(isDrawerOpen: DrawerStates['isDrawerOpen']): void
  closeDrawer(): void
  openMenu(): void
}
