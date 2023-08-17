import './styles/ProductPurchased.css'

const ProductPurchased = ({purchase}) => {
  return (
    <article className='item__buy-container'>
        <header className='title__item-container'>
            <img className='img__purch' src={purchase.product.images[0].url} alt="" />
        </header>
        <h3 className='title__purch'>{purchase.product.title}</h3>
        <div className='quantity__purch'>{purchase.quantity}</div>
        <div className='price__purch'>{purchase.quantity * purchase.product.price}</div>
    </article>
  )
}

export default ProductPurchased