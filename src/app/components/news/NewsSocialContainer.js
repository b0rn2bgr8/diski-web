import React, {Component} from 'react';
import NewsListComponent from './newsList';

class NewsSocialContainer extends Component{
    render(){
        return(
            this.props.news.map(item=>{
                return(
                    <NewsListComponent news={item} key={item._id} />
                )
            })
           
        )
    }
}

export default NewsSocialContainer;