import React from 'react';
import { Link, Route} from 'react-router-dom';
// Components
import { Image, Item , Message, Button, Icon, Feed, Embed, Card, Modal, Header, Dimmer, Segment, Label} from 'semantic-ui-react';
import ThreadReply from './ThreadReply';
import PostList from '../Posts/PostList';
import Threads from './Threads';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import {createThread} from '../../../../../../../../Users/Kircheis/yychan/client/src/actions/actions';
import ThreadCreateForm from '../../../../../../../../Users/Kircheis/yychan/client/src/components/Thread/ThreadCreateForm';
// Styles
// import postForm from '.../styles/postForm.scss';

class ThreadView extends React.Component {
  constructor() {
    super()
    this.state = {
      inactive: false,
    }
  }
  
  render() {
    const {thread, image, select, text, name, id, comments, user_id, href, upvoteThread, fetchThread, inactive} = this.props;
   return(   
    <Item> 
          <Modal closeIcon size='large' basic trigger={<Item.Image size='small' src={thread.image}/>}>
           <Modal.Content image>
            <Item.Image src={thread.image} />
           </Modal.Content>
         </Modal>
    <Item.Content as='h1'>
      <Item.Content>
        <Item.Meta>
           <Button   disabled={this.state.inactive} floated='left' color='black' compact onClick={() => upvoteThread(thread.id)
               .then(this.setState({inactive: true}))}><Icon name='like' />Like: {thread.like}</Button>
                      <ThreadReply
                        thread={this.props.thread}
                        createPost={this.props.createPost}
                        fetchPost={this.props.fetchPost}
                        addFlashMessage={this.props.addFlashMessage} /> 
                      <Link to={`/b/thread${thread.id}`}>
                        <Button compact floated='right' color='black' onClick={() => select(thread.id)}>Open</Button>
                      </Link>
        <Message color='brown'>
        <Item.Header as='h1'>{thread.name}<br></br><a>№{thread.id}</a><br></br>{thread.date}
         <Message size='large' color='black'>
         <Item.Description>
         {thread.text} 
        </Item.Description>
        </Message>
        </Item.Header></Message>
        </Item.Meta>
      </Item.Content>
        <Message color='brown'>
        <PostList 
          thread={this.props.thread}
          posts={this.props.posts}
          upvotePost={this.props.upvotePost}
          createPost={this.props.createPost}
          fetchPost={this.props.fetchPost}
          addFlashMessage={this.props.addFlashMessage}
        />       
      </Message>
        <Button color='black' onClick={this.props.fetchPost}>Load more from №{thread.id}</Button>
      </Item.Content>
      </Item>   



    );
  }
}

export default ThreadView;