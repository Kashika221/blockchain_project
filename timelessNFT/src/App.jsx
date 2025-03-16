import Header from "./components/Header"
import Hero from "./components/Hero"
import ArtWorks from "./components/Artworks"
import Transactions from "./components/Transactions"

const App = () => {
  return (
    <div className="min-h-screen">
      <div class = "gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <ArtWorks />
      <Transactions />
    </div>
  )
}

export default App
