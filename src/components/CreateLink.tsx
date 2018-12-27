import React, { Component } from 'react'
import CreateLinkMutation from '../mutations/CreateLinkMutation';

export default class CreateLink extends Component {
  state = {
    description: '',
    url: ''
  }

  createLink = () => {
    const {description, url} = this.state
    CreateLinkMutation(description, url, () => console.log('Mutation completed'))
    this.setState(() => ({
      description: "",
      url: ""
    }))
  }

  clickHandler = () => {
    return this.createLink();
  }

  render() {
    return (
      <div>
        <div className='flex flex-column mt3'>
          <input
            className='mb2'
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
            type='text'
            placeholder='A description for the link'
          />
          <input
            className='mb2'
            value={this.state.url}
            onChange={(e) => this.setState({ url: e.target.value })}
            type='text'
            placeholder='The URL for the link'
          />
        </div>
        <button
          className='button'
          onClick={this.clickHandler}
        >
          Submit
        </button>
      </div>
    )
  }
}
