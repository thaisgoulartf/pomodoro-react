import { ProductContainer, ProductVariant } from "./ProductCard.styles.ts";
interface ProductProps {
  status: ProductVariant;
  name: string;
}
export function ProductCard({ status, name }: ProductProps) {
  return <ProductContainer variant={status}>
    <h3>{name}</h3>
    <p>Status: {status}</p>
  </ProductContainer>
}