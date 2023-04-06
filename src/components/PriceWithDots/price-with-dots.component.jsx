function PriceWithDots({ price, fontWeight }) {
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return <div style={{ fontWeight: `${fontWeight}` }}>{formattedPrice}đ</div>
}

export default PriceWithDots
