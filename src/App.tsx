import { Button } from './components/Button';
import { ProductCard } from './components/ProductCard';
import { UserCard } from './components/UserCard';
export function App() {
  return (
    <>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
      <br />
      <br />
      <br />
      <ProductCard name="Produto 1" status="inStock" />
      <ProductCard name="Produto 2" status="outOfStock" />
      <ProductCard name="Produto 3" status="onSale" />
      <br />
      <br />
      <br />
      <UserCard name="Alice" status="online" />
      <UserCard name="Bob" status="offline" />
      <UserCard name="Charlie" status="busy" />
    </>
  )
}