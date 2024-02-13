import './App.scss'
import Nav from './components/Nav'
import Categories from './sections/Categories'

function App() {

  return (
    <main id="main" className="w-full bg-gradient-to-r from-sky-500 to-blue-500">
      <div className="max-container flex justify-center">
        <Nav />
      </div>
      <div className="relative max-container mt-10 flex flex-row justify-center items-center">
        <Categories />
      </div>
      <div className='mt-10'>
        Footer
      </div>
    </main>
  )
}

export default App
