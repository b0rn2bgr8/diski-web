import React, {Component} from 'react';
import {Container, Row, Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import {SvgIcon} from 'material-ui';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ListIcon from 'material-ui-icons/List';
import DraftsIcon from 'material-ui-icons/Drafts';
import Person from 'material-ui-icons/Person';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import PostContainer from '../components/post/postContainer';
import * as actions from '../actions';
import NewsSocialContainer from '../components/news/NewsSocialContainer';

import {connect} from 'react-redux';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
    input: {
        display: 'none',
      },
  };
  

class Social extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.createPost = this.createPost.bind(this);
    }

    handleClick = () => {
        this.setState({ open: !this.state.open });
      };
    render(){
        console.log("post",this.props)
        const { classes } = this.props;
        return (
            <section>
                <Container>
                    <Row>
                        <Col md="3">
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={this.props.user.picture}
                                title={this.props.user.displayName}
                            />
                            <CardContent>
                            <List className={classes.root} subheader={<ListSubheader>{this.props.user.displayName}</ListSubheader>}>
                                <ListItem button>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText inset primary="Profile" />
                                </ListItem>
                                <ListItem button>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText inset primary="Favourite" />
                                </ListItem>
                                <ListItem button onClick={this.handleClick}>
                                <ListItemIcon>
                                    <ListIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Following" />
                                {this.state.open ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                    <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText inset primary="People I Follow" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                    <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Teams I Follow" />
                                </ListItem>
                                {/* <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                    <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Starred" />
                                </ListItem> */}
                                </Collapse>
                            </List>
                            </CardContent>
                        </Card>
                        </Col>
                        <Col md="6">
                            <Form onSubmit={this.createPost}>
                                <FormGroup>
                                    <Label for="exampleText">What's on your mind?</Label>
                                    <Input type="textarea" placeholder="Share your thoughts..." onChange={(e)=>{this.setState({postBody: e.target.value})}} />
                                </FormGroup>
                                <FormGroup>
                                    <input onChange={(e)=>{this.setState({file: e.target.files[0]})}} className={classes.input} type="file" id="file" />
                                    <label htmlFor="file">
                                        <Button component="span" className={classes.button}>
                                            <SvgIcon>
                                            <path fill="#000000" d="M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z" />
                                            </SvgIcon> Attach
                                        </Button>
                                    </label>
                                    <Button type="submit" className={classes.button}>
                                        <SvgIcon>
                                        <path fill="#000000" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                                        </SvgIcon>
                                    </Button>
                                </FormGroup>
                            </Form>
                            <PostContainer posts={this.props.posts} />
                        </Col>
                        <Col md="3">
                                <Label>Latest News Update</Label>
                                <NewsSocialContainer news={this.props.news} />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
    createPost(){
        let obj = {
            postbody: this.state.postBody,
            owner: this.props.user._id,
            file: this.state.file
        }
        let formData = new FormData();
        formData.append("postBody", obj.postbody);
        formData.append("file", obj.file);
        formData.append("owner", obj.owner);

        fetch("/api/post/new-post", {
            method: "POST",
            credentials: "include",
            body: formData
        })
        .then(res=>{return res.json();})
        .then(result=>{
                this.props.fetchPost();
        });
    }
}
function matchStateToProps(state){
    return {
        user: state.auth,
        posts: state.posts,
        news: state.news
    }
}

export default connect(matchStateToProps, actions)(withStyles(styles)(Social));