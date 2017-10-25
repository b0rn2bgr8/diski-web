import React, {Component} from 'react';
import NewsCard from './newsCard';

class NewsCardContainer extends Component{
    render(){
        return(
            this.props.news.map(item=>{
                return(
                    <NewsCard key={item._id} news={item} />
                )
            })
        
    )
    }
}

export default NewsCardContainer;