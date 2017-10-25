import React, {Component} from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import format from 'date-fns/distance_in_words_to_now';


class NewsListComponent extends Component{
    render(){
      
        return(
          <Card>
            <CardImg top width="100%" src={this.props.news.media} />
            <CardBody>
              <CardTitle>{this.props.news.title}</CardTitle>
              <CardText>{(this.props.news.body).substring(0, 100)}</CardText>
              <CardText>
                <small className="text-muted">{format(this.props.news.createdAt) + " ago"}</small>
              </CardText>
              <a className="btn btn-danger" href="/news">Read more</a>
            </CardBody>
          </Card>
        )
    }
}

export default NewsListComponent;