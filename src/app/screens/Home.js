import React, {Component} from 'react';
import {
    Container, 
    Row, 
    Col,
} from 'reactstrap';
import {} from 'material-ui';
import FixtureListContainer from '../components/home-sidebar/fixture/fixtureListContainer';
import CarouselContainerPart from '../components/home-main-content/news-carousel/CarouselContainer';
import NewsCardContainer from '../components/home-main-content/news-card/NewsCardContainer';
import {connect} from 'react-redux';

class Home extends Component{
    render(){
        return (
            <section style={{paddingTop: 20}}>
                <Container>
                    <Row>
                        <Col md="4" style={{textAlign: 'center'}}>
                        <h5 style={{background: '#F44336', color: '#ffffff', padding: 10, fontWeight: 300}}>Upcoming Fixtures</h5>
                            <div style={{height: 300, overflowY: 'scroll'}}>
                            <FixtureListContainer fixtures={this.props.fixtures} />
                            </div>
                            <h5 style={{background: '#F44336', color: '#ffffff', padding: 10, fontWeight: 300}}>Results</h5>
                            <h5 style={{background: '#F44336', color: '#ffffff', padding: 10, fontWeight: 300}}>Logs</h5>
                        </Col>
                        <Col md="8">
                            <CarouselContainerPart news={this.props.news}  />
                            <section style={{marginTop: 10}}>
                            <h5>Latest News</h5>
                            <NewsCardContainer news={this.props.news} />
                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

function matchStateToProps(state){
    return {
        fixtures: state.fixtures,
        news: state.news
    }
}

export default connect(matchStateToProps)(Home);