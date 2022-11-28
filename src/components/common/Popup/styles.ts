import styled from 'styled-components'

interface ContainerProps {
  top: number
  left: number
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid ${({ theme }) => theme.textColor}; */
  border-radius: 0 ${({ theme }) => theme.borderRadius.medium}px
    ${({ theme }) => theme.borderRadius.medium}px 0;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
`

export const Header = styled.div`
  border-radius: 0 ${({ theme }) => theme.borderRadius.medium}px 0 0;
  background-color: ${({ theme }) => theme.tertiaryHeaderColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  padding-left: ${({ theme }) => theme.spacing.medium}px;
  font-size: 20px;
  height: 30px;
`

export const Body = styled.div`
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.medium}px 0;
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: 32px;
  padding: 8px 0;
  width: 100%;
`
