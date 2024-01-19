import { Header, Footer } from '@components'
import { IMainLayout } from '@typing'
import './styles.scss'

export default function MainLayout({ children }: IMainLayout) {
  return (
    <>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </>
  )
}
