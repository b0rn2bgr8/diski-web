import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import NewsCardContainer from '../components/news/newsCardContainer';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
      color: theme.palette.text.secondary,
    },
    pos: {
      marginBottom: 12,
      color: theme.palette.text.secondary,
    },
  });


class News extends Component{


    render(){
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;
        //console.log(this.props)
        return (
            <Container>
                <h3 className="page-header">IN THE NEWS TODAY</h3>
                <Row>
                    <Col md="9">
                        <NewsCardContainer news={this.props.news} />
                    </Col>
                    <Col md="3">
                        <Card className={classes.card}>
                            <CardContent>
                            <Typography type="body1" className={classes.title}>
                                Word of the Day
                            </Typography>
                            <Typography type="headline" component="h2">
                                be{bull}nev{bull}o{bull}lent
                            </Typography>
                            <Typography type="body1" className={classes.pos}>
                                adjective
                            </Typography>
                            <Typography component="p">
                                well meaning and kindly.<br />
                                {'"a benevolent smile"'}
                            </Typography>
                            </CardContent>
                            <CardActions>
                            <Button dense>Learn More</Button>
                            </CardActions>
                        </Card>
                </Col>
                </Row>
              
           </Container>
        )
    }
}
function matchStateToProps(state){
    return {
        news: state.news
    }
}

export default connect(matchStateToProps)(withStyles(styles)(News));