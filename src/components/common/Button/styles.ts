import styled from 'styled-components'

export const CommonButton = styled.button`
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius?.medium}px;
  cursor: pointer;
`
