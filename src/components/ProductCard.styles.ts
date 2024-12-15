import styled, { css } from "styled-components";
export type ProductVariant = 'inStock' | 'outOfStock' | 'onSale';

interface ProductContainerProps {
  variant: ProductVariant;
}

const productVariants = {
  inStock: 'green',
  outOfStock: 'gray',
  onSale: 'yellow'
}

export const ProductContainer = styled.div<ProductContainerProps>`
  width: 200px;
  height: 100px;
  ${props => {
    return css`
      background: ${productVariants[props.variant]};
    `
  }}
  padding: 10px;
  color: #001212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 6px solid #001212;
  border-radius: 8px;
  margin-top: 1rem;
`;