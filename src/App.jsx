import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Home } from './pages/home/Home'
import { Footer } from './components/footer/Footer'
import { Register } from './pages/login/Register'
import { Login } from './pages/login/Login'
import { Account } from './pages/account/Account'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { product } from './assets/data/data'

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin)

  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setSearchResults(product)
      return
    }
    const filteredProducts = product.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setSearchResults(filteredProducts)
  }

  return (
    <>
      {isLogin && (
        <Router>
          <Header onSearch={handleSearch} />
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} search={searchResults} />} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/account' component={Account} />
          </Switch>
          <Footer />
        </Router>
      )}
      {!isLogin && <Login />}
    </>
  )
}

export default App
