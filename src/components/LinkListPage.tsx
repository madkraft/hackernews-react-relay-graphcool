import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import LinkList from './LinkList'

const LinkListPageQuery = graphql`
  query LinkListPageQuery {
    viewer {
      ...LinkList_viewer
    }
  }
`

export default class LinkListPage extends Component {
  render() {
    return (
      <QueryRenderer 
        environment={environment}
        query={LinkListPageQuery}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <LinkList viewer={props.viewer} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }
}
