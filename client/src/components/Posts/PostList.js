import React from 'react';;
import {Item, Button, Menu, Container, Header, Divider} from 'semantic-ui-react';
import PostView from './PostView';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
 import ReactPlayer from 'react-player'
 class PostList extends React.Component {
    constructor() {
      super()
        this.state = {
        currentThread: undefined,
    }
  }
  render() {
    const posts = this.props.posts
    const thread = this.props.thread
     return(
        <Item.Group divided relaxed>                                
             {posts.filter(post => thread.id == post.reply_id).map(post =>
            <PostView
              thread={this.props.thread}
              post={post}
              key={post._id}  
              createPost={this.props.createPost}
              fetchPost={this.props.fetchPost}
              addFlashMessage={this.props.addFlashMessage}

          />)}
        </Item.Group>
   )
  }     
}
export default PostList; 