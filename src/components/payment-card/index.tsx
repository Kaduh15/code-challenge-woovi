/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Box, Radio, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

type PaymentCardProps = {
  bandTripComponent?: React.ReactNode | any
  checked?: boolean
  children?: React.ReactNode
  onClick?: () => void
  radioValue?: string
  title?: string
}

export function PaymentCard({
  bandTripComponent,
  checked = false,
  children,
  onClick,
  radioValue: value = '',
  title = '',
}: PaymentCardProps) {
  const borderChecked = checked ? '#03D69D' : '#E5E5E5'
  const bgChecked = checked ? '#F4FBF9' : 'Background'

  return (
    <Box
      sx={{
        border: `2px solid ${borderChecked}`,
        padding: '1.3rem',
        borderRadius: '0.5rem',
        position: 'relative',
        width: '100%',
        marginTop: title ? '1rem' : '0',
        backgroundColor: bgChecked,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
      onClick={onClick}
    >
      {title && (
        <Typography
          sx={{
            fontWeight: 800,
            backgroundColor: '#E5E5E5',
            paddingX: '1rem',
            paddingY: '0.2rem',
            borderRadius: '100px',
            position: 'absolute',
            top: '-1rem',
            left: '0.5rem',
          }}
        >
          {title}
        </Typography>
      )}
      <Radio
        id={value}
        name="payment-card"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          color: borderChecked,
        }}
        checked={checked}
        checkedIcon={
          <CheckCircleIcon
            sx={{
              color: borderChecked,
            }}
          />
        }
        onClick={onClick}
        value={value}
      />
      {children}
      {bandTripComponent && (
        <Box
          sx={{
            backgroundColor: '#133A6F',
            padding: '0.6rem',
            color: 'white',
            borderRadius: '0.5rem',
            position: 'relative',
            ':after': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: -2,
              width: '10%',
              height: '100%',
              backgroundColor: bgChecked,
              clipPath: 'polygon(0 50%, 100% 100%, 100% 0)',
              zIndex: 2,
            },
          }}
        >
          {bandTripComponent}
        </Box>
      )}
    </Box>
  )
}
