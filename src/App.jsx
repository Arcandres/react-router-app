import { Routes, Route, Link, useParams, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css'
import './App.css'

hljs.registerLanguage('javascript', javascript);

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
      <Link to='post'>Get Post</Link>
      <Outlet />
    </>
  )
}

const Post = () => {  
  const { name } = useParams()
    
  const posts = [
    {
      title: 'JavaScript',
      content: 
`function getIntoAnArgument() {
    var args = arguments.slice();
    args.forEach(function(arg) {
        console.log(arg);
    });
}`
    },
    {
      title: 'React',
      content:
`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Faisal Arkan" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);`
    },
    {
      title: 'NodeJs',
      content: 
`var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);`
    }, 
    {
      title: 'TypeScript',
      content: 
`interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);`
    }
  ]

  const GetPostFromCat = ({ cat }) => {

    const { content } = posts.find(post => post.title === cat ? post.content : null)

    useEffect(() => { hljs.highlightAll() }, [])

    return ( <pre><code>{content}</code></pre> )
  }

  return (
    <>
      <p>{name} post</p>
      <GetPostFromCat cat={name} />
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
        <Route path='/search/category/:name' element={<Categories />}>
          <Route path='post' element={<Post />} />
        </Route>
        <Route path='*' element={<h2>Not Found</h2>} />
      </Routes>
    </>
  )
}

export default App
