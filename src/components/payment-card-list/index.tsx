'use client'

import { PaymentCard } from '@/components/payment-card'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'

export function PaymentCardList() {
  const [cardSelect, setCardSelect] = useState('value-0')

  const cards = [
    { radioValue: 'value-0', title: 'title' },
    { radioValue: 'value-1', title: 'Start' },
    { radioValue: 'value-2' },
    { radioValue: 'value-3' },
    { radioValue: 'value-4' },
    { radioValue: 'value-5' },
    { radioValue: 'value-6' },
  ]

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {cards.map((card, index, arr) => {
        const pixTitle = index === 0 ? 'Pix' : ''
        const pixInInstallments = index === 1 ? 'Pix Parcelado' : ''

        const group = () => {
          if (index === 1) {
            return 'start'
          }

          if (index === arr.length - 1) {
            return 'end'
          }

          return 'middle'
        }

        if (pixTitle) {
          return (
            <PaymentCard
              key={index}
              title={pixTitle}
              bandTripComponent={
                <Typography variant="body1" fontSize={12}>
                  🤑 <strong>R$ 300,00</strong> de volta no seu Pix na hora
                </Typography>
              }
              onClick={() => setCardSelect(card.radioValue)}
              checked={cardSelect === card.radioValue}
              radioValue={card.radioValue}
              containerSx={{
                marginBottom: '2rem',
              }}
            >
              <Typography>
                <strong>{index + 1}x</strong> R$ 30.500,00
              </Typography>
              <Typography
                sx={{
                  color: '#03D69D',
                }}
              >
                Ganhe <strong>3%</strong> de Cashback
              </Typography>
            </PaymentCard>
          )
        }

        return (
          <PaymentCard
            key={index}
            title={pixInInstallments}
            bandTripComponent={
              index === 3 && (
                <Typography variant="body1" fontSize={12}>
                  <strong>-3% de juros:</strong> Melhor opção de parcelamento
                </Typography>
              )
            }
            onClick={() => setCardSelect(card.radioValue)}
            checked={cardSelect === card.radioValue}
            radioValue={card.radioValue}
            group={group()}
          >
            <Typography>
              <strong>{index + 1}x</strong> R$ 30.500,00
            </Typography>
            <Typography
              sx={{
                color: '#AFAFAF',
                fontWeight: '600',
              }}
            >
              Total: R$ 30.600,00
            </Typography>
          </PaymentCard>
        )
      })}
    </Box>
  )
}
