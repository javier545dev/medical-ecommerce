import React from 'react'
import { Slider } from '../../components/hero/Slider'
import { Order } from '../../components/hero/Order'
import { Category } from '../../components/category/Category'
import { Product } from '../../components/product/Product'

export const Home = (props) => {
  const { search } = props
  return (
    <>
      <Slider />
      <Order />
      <Category />
      <Product search={search} />
    </>
  )
}
