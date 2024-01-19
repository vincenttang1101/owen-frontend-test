import { Header, Footer } from '@components'

export default function MainLayout({ children }: any) {
  return (
    <>
      <html lang='en'>
        <head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>Document</title>
        </head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  )
}
