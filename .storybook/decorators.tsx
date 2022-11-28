import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import themes from '../src/styles/themes'

import GlobalStyle from '../src/styles/global'

const ScrollablePanel = styled.div`
  html {
    overflow-y: scroll;
  }
`

const getTheme = (name: string) => (name ? themes[name] : null)

const withTheme = (Story, context) => {
  console.log(context)
  const theme = getTheme(
    context?.globals?.backgrounds?.value === '#333333' ? 'dark' : 'light'
  )
  return theme ? (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScrollablePanel>
        <Story />
      </ScrollablePanel>
    </ThemeProvider>
  ) : (
    <>
      <GlobalStyle />
      <ScrollablePanel>
        <Story />
      </ScrollablePanel>
    </>
  )
}

export const globalDecorators = [withTheme]
