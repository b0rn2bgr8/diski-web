import React, {Component} from 'react';
import CarouselListComponent from './Carousel';

class CarouselContainerPart extends Component{
    render(){
        return(
            <CarouselListComponent news={this.props.news} />
        )
    }
}

export default CarouselContainerPart;