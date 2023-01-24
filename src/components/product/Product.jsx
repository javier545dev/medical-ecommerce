import './product.css'
import { ProductCart } from './ProductCart'

export const Product = ({ search }) => {
  return (
    <>
      <section className='product'>
        <div className='container grid3'>
          {search.map((item) => (
            <ProductCart
              key={item.id}
              myKey={item.id}
              id={item.id}
              cover={item.cover}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </>
  )
}
