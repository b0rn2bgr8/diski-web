import React, { Component } from 'react';
import {
    Carousel,
    CarouselControl,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  import CarouselListItem from './CarouselItem';

  class CarouselListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }

      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.news.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.news.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    
    render(){
        const { activeIndex } = this.state;
      return (
        <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.props.news} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {
                this.props.news.map((data, index)=>{
                    return (
                        <CarouselItem
                        onExiting={()=>{this.onExiting()}}
                        onExited={()=>{this.onExited()}}
                        src={data.media}
                        altText={data.title}
                        >
                            <CarouselCaption captionHeader={data.title} captionText={(data.body).substring(0, 100)} />
                        </CarouselItem>
                    )
                })
            }
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      )
    }
}

export default CarouselListComponent;