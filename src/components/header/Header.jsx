import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Card } from './Card'
import { User } from './User'
import Medical from '../../assets/images/medical.png'
import './header.css'
import { Link } from 'react-router-dom'

export const Header = ({ onSearch }) => {
  window.addEventListener('scroll', function () {
    const header = this.document.querySelector('header')
    header.classList.toggle('active', this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    onSearch(searchTerm)
  }, [searchTerm])

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <Link to='/'>
              <img src={Medical} alt='Medicine' />
            </Link>
          </div>
          <div className='search flex'>
            <AiOutlineSearch className='searchIcon' />
            <input
              type='text'
              placeholder='Search for products'
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <div className='account flexCenter'>
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
