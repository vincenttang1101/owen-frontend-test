import { Header, Footer } from '@components'

export default function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
