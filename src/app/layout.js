
export const metadata = {
  title: 'ini Home',
  description: 'home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
