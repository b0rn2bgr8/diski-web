import React, {Component} from 'react';
import PostCard from './postCard';
class PostContainer extends Component{
    render(){
       // console.log("container", this.props)
        return (
            this.props.posts.map(item=>{
                return(
                    <PostCard post={item} key={item._id} />
                )
            })
            
        )
    }
}

export default PostContainer;