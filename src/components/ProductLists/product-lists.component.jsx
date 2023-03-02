import ProductInfo from '../ProductInfo/productinfo.component'
import './product-lists.styles.scss'
import Products from "@/assets/images/Products.webp";
import Sort from './Sort/sort.component'
import PaginationComponent from './Pagination/pagination.component'

function ProductLists() {
  const productLists = [
    {
      id: 1,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 2,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 3,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 4,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 5,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 6,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
      id: 7,
      image: Products,
      name: 'Hạt chi đó',
      price: 50000,
    },
    {
        id: 8,
        image: Products,
        name: 'Hạt chi đó',
        price: 50000,
      },{
        id: 9,
        image: Products,
        name: 'Hạt chi đó',
        price: 50000,
      },
  ]
  return (
    <div className="product-lists">
      <Sort />

      <div className="product-lists--info">
      {productLists.map((product) => {
          return <ProductInfo key={product.id} product={product} />;
        })}
      </div>

      <div className="product-lists--pagination">
          <PaginationComponent/>
      </div>
    </div>
  )
}

export default ProductLists
