import React, { Component, Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet'
import page from 'page'

import Link from './helpers/Link.js'

import Header from './components/Header.jsx'
const Main = lazy(() => import('./components/Main.js'))

class App extends Component {
  state = {
    projectIdx: null
  }

  constructor (props) {
    super(props)

    this.initRouting = this.initRouting.bind(this)
  }

  initRouting () {
    //page.base('/new')

    page('/', (ctx, next) => {
      this.setState({
        route: ctx.path,
        projectIdx: null
      })
    })

    page()
  }

  componentDidMount() {
    this.initRouting()
  }

  render() {
    return (
      <div className="root-inner">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Outer Practice | Home</title>
          <meta name="author" content="Outer Practice" />
          <meta name="description" content="Revolving around website and print matters." />
          <meta name="copyright" content="Outer Practice" />
        </Helmet>
        <Header />
        <Suspense fallback={ <div>loading...</div> }>
          <Main />
        </Suspense>
      </div>
    );
  }
}

export default App
