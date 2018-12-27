import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { ILink } from './LinkList';

interface IProps {
  link: ILink
}

class Link extends Component<IProps, {}> {
  voteForLink = async () => {
  
  }

  render() {
    return (
      <div>
        <div>{this.props.link.description} ({this.props.link.url})</div>
      </div>
    )
  }
}

export default createFragmentContainer(Link, graphql`
  fragment Link_link on Link {
    id,
    description,
    url
  }
`)
