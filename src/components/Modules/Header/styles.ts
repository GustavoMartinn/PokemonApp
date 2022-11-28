import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 20px;
  background: linear-gradient(
    60deg,
    ${({ theme }) => theme.primaryHeaderColor} 0% 30%,
    ${({ theme }) => theme.secundaryHeaderColor} 30% 32%,
    ${({ theme }) => theme.tertiaryHeaderColor} 32%
  );
  color: #000;
`

export const HeaderButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`

export const HeaderImage = styled.img`
  width: 150px;
`
