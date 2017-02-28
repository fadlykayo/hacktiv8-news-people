import React from 'react'

import { Home } from './Home'
import { About } from './About.jsx'

import { Route } from 'react-router-dom'

export const Routes = () => {
  return (

    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>

  )
}
