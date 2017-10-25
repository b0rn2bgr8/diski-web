import React, {Component} from 'react'
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class LeagueTable extends Component{
    render(){
      console.log("com", this.props);
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Team</TableCell>
                  <TableCell>P</TableCell>
                  <TableCell>W</TableCell>
                  <TableCell>L</TableCell>
                  <TableCell>D</TableCell>
                  <TableCell>GF</TableCell>
                  <TableCell>GA</TableCell>
                  <TableCell>+/-</TableCell>
                  <TableCell>Pts</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {

                  this.props.teams.map(item=>{
                    return(
                      <TableRow key={item._id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.season_games_played}</TableCell>
                        <TableCell>{item.games_won}</TableCell>
                        <TableCell>{item.games_lost}</TableCell>
                        <TableCell>{item.games_drawn}</TableCell>
                        <TableCell>{item.season_goal_for}</TableCell>
                        <TableCell>{item.season_goal_against}</TableCell>
                        <TableCell>{item.season_goal_for - item.season_goal_against}</TableCell>
                        <TableCell>{item.point}</TableCell>
                      </TableRow>
                    
                    )
                  })
                }
              </TableBody>
            </Table>
          </Paper>
        )
    }
}

export default withStyles(styles)(LeagueTable);