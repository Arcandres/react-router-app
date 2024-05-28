import { Routes, Route, Link, useParams } from 'react-router-dom'

import './App.css'

const Home = () => <h2>Home</h2>

const Search = () => {
  const cats = [
    'JavaScript',
    'React',
    'NodeJs',
    'TypeScript'
  ]

  return (
    <>
      <h2>Search Page</h2>
      <nav>
        <ul>
          {cats.map(
            cat => (<li key={cat}><Link to={`/search/category/${cat}`}>{cat}</Link></li>)
          )}
        </ul>
      </nav>
    </>
  )
}

const Categories = () => {
  const { name } = useParams()
  return (
    <>
      <h2>Category</h2>
      <p>{name}</p>
    </>
  )
}

function App() {

  return (
    <>
      <header>
        <h1>Learning React Router</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search'>Search</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/category/:name' element={<Categories />} />
      </Routes>
    </>
  )
}

export default App
