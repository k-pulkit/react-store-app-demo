import './App.scss'
import Categories from './sections/Categories'

function App() {

  return (
    <main id="main" className="w-full">
      <div>
        <p>NavBar</p>
      </div>
      <div className="relative w-full max-container mt-10">
        <Categories />
      </div>
      <div className='mt-10'>
        Footer
      </div>
    </main>
  )
}

export default App
