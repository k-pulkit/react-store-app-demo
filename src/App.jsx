import './App.scss'
import Nav from './components/Nav'
import Categories from './sections/Categories'

function App() {

  return (
    <main id="main" className="relative w-full bg-gray-\">
      <div className="sticky top-0 z-50 max-container flex justify-center">
        <Nav />
      </div>
      <div className="relative max-container mt-10 flex flex-row justify-center items-center">
        <Categories />
      </div>
      <div className='mt-10'>
        Footer
      </div>
      <div className='mt-10'>
        Footer
      </div>
      <div className='mt-10'>
        Footer
      </div>
      <div className='mt-10'>
        Footer
      </div>
    </main>
  )
}

export default App
