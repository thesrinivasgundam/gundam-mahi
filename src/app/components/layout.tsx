import localFont from 'next/font/local'
 
const bebas = localFont({
  src: './BebasNeue-Regular.ttf',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={bebas.className}>
      <body>{children}</body>
    </html>
  )
}