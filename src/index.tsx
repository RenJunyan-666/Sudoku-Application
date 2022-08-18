import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles, theme } from './styles'
import { ThemeProvider } from 'styled-components'
import { Content, Title, Card, Grid, Numbers, NewButton } from './components'
import { Provider } from 'react-redux'
import { configureStore } from 'core'

const store = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <NewButton/>
          <Grid />
          <Numbers/>
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
