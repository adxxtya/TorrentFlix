import Hello from '../components/Header'
import MainCards from '../components/MainCards'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hello />
      <MainCards />
      <Footer />
    </div>
  )
}

export default Home
