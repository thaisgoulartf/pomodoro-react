import styled, { css } from "styled-components";
export type UserCardVariant = 'online' | 'offline' | 'busy';

interface ProductContainerProps {
  variant: UserCardVariant;
}

const userCardVariants = {
  online: 'green',
  offline: 'gray',
  busy: 'red'
}

export const UserCardContainer = styled.div<ProductContainerProps>`
  width: 300px;
  height: 100px;
  ${props => {
    return css`
      background: ${userCardVariants[props.variant]};
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