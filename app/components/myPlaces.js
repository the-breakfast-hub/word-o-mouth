import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { getUsersPlaces } from '../reducers/placesReducer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

class myPlaces extends React.Component {
  async componentDidMount() {
    console.log(this.props);
    this.props.getMyPlaces();
  }
  render() {
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              My Places
            </Typography>
            <div className={classes.demo}>
              <List>
                {this.props.places.map(place => (
                  <ListItem key={place.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={place.name}
                      secondary={place.cuisine}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="Delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const classes = useStyles();

const mapStateToProps = state => ({
  places: state.places.myPlaces,
});

const mapDispatchToProps = dispatch => ({
  getMyPlaces: id => dispatch(getUsersPlaces(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(myPlaces);
