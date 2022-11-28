import Link from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from '../../../providers/ThemeContext'
import { Button } from '../../common/Button'
import { HeaderButton, HeaderContainer, HeaderImage } from './styles'

export default function Header() {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <HeaderContainer>
      <HeaderButton>
        <Link href="/">
          <HeaderImage src="/logo.png" />
        </Link>
      </HeaderButton>
      <Button onClick={onToggleTheme}>Toggle Theme</Button>
    </HeaderContainer>
  )
}
