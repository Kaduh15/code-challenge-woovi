'use client'

import { Nunito } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const nunito = Nunito({
  weight: ['600', '800'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
})

export default theme
