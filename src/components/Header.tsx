import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component<{}, {}> {

  render() {
    return (
      <div className='header'>
        <h2>Hacker News</h2>
        <Link to='/' className='ml1 no-underline black'>new</Link>
        <div className='ml1'>|</div>
        <Link to='/create' className='ml1 no-underline black'>submit</Link>
      </div>
    )
  }

}

export default withRouter(Header as any)