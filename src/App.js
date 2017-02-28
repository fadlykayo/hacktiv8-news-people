import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { DataList, DataSearch } from './components'

const style = {
  margin: '30px 150px'
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      news: [],
      searchKey: ''
    }
  }

  handleChange (event) {
    this.setState({
      searchKey: event.target.value
    })
    this.fetchNews(event.target.value)
  }

  componentDidMount () {
    this.fetchNews('')
  }

  fetchNews (searchQuery) {
    fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURI(searchQuery)}`)
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        this.setState({
          news: resp.hits
        })
      })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h6>Welcome to React</h6>
        </div>
        <div className='News-list' style={style}>
          <DataSearch searchKey={this.state.searchKey} handleChange={this.handleChange.bind(this)} />
          <DataList news={this.state.news.filter((eachNews) => (eachNews.title === null ? '' : eachNews.title).match(new RegExp(this.state.searchKey, 'i')))} />
        </div>
      </div>
    )
  }
}

export default App
