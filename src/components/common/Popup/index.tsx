import { FC } from 'react'
import { Body, Container, Header } from './styles'

export interface PopupProps {
  title?: string
  text: string
  top: number
  left: number
}

export const Popup: FC<PopupProps> = ({ title, text, top, left }) => (
  <Container top={top} left={left}>
    {title && <Header>{title}</Header>}
    <Body>{text}</Body>
  </Container>
)
