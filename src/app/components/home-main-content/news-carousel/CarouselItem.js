import React, { Component } from 'react';
import {
    CarouselItem,
    CarouselCaption
  } from 'reactstrap';

  class CarouselListItem extends Component{
      render(){
        return (
            <CarouselItem
            onExiting={()=>{this.props.onExiting()}}
            onExited={()=>{this.props.onExited()}}
            src={this.props.item.media}
            altText={this.props.item.title}
            >
                <CarouselCaption captionHeader={this.props.item.title} captionText={(this.props.item.body).substring(0, 100)} />
            </CarouselItem>
        )
      }
  }

  export default CarouselListItem;

  