import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useMediaQuery } from '@mui/material'
import { useDrawerStore } from '@akbar/utils/stores'
import MenuDrawer from './MenuDrawer'

const drawerWidth = 240

const Main = styled('main')(({ theme }) => ({
  maxWidth: '100vw',
  minWidth: '100vw',
  flexGrow: 1,
  // padding: theme.spacing(2),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  // ...(open && {
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   marginLeft: 0,
  // }),
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // ...(open &&
  //   {
  // width: `calc(100% - ${drawerWidth}px)`,
  // marginLeft: `${drawerWidth}px`,
  // transition: theme.transitions.create(['margin', 'width'], {
  //   easing: theme.transitions.easing.easeOut,
  //   duration: theme.transitions.duration.enteringScreen,
  // }),
  // }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // padding: theme.spacing(0,1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function MainLayout(props: React.PropsWithChildren) {
  const { children } = props
  const theme = useTheme()
  const { openMenu } = useDrawerStore()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'end',
        ...(useMediaQuery(theme.breakpoints.down('sm')) && { overflow: 'scroll' }),
      }}
    >
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openMenu}
            edge="start"
            sx={{
              mr: 2,
              // ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Akbar Jaya Tk.
          </Typography>
        </Toolbar>
      </AppBar>
      <Main>
        <DrawerHeader />
        {children}
      </Main>
      <MenuDrawer />
    </Box>
  )
}
