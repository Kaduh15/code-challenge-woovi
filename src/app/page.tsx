// pages/index.js
import { Typography } from '@mui/material'
import Image from 'next/image'
import footerSvg from '@/assets/images/footer.svg'
import logoSvg from '@/assets/images/logo.svg'
import { PaymentCardList } from '@/components/payment-card-list'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 px-4 pb-4 pt-24 text-[#4D4D4D]">
      <Image src={logoSvg} alt="logo" width={100} height={100} />

      <Typography
        variant="h2"
        sx={{
          fontSize: '1.2rem',
          fontWeight: '800',
        }}
      >
        João, como você quer pagar?
      </Typography>

      <PaymentCardList />

      <footer className="w-full">
        <Image
          className="m-auto w-full max-w-xs"
          src={footerSvg}
          alt="footer"
          width={100}
          height={100}
        />
      </footer>
    </main>
  )
}
