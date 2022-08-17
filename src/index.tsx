import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles, theme } from './styles'
import { ThemeProvider } from 'styled-components'
import { Content, Title, Card, Grid } from './components'
import { Provider } from 'react-redux'
import { configureStore } from 'core'

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <Grid />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>
)
