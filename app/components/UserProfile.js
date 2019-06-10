import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { minHeight, height, maxWidth } from "@material-ui/system";
import { connect } from "react-redux";
import Root from "./root";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "100px"
  },
  img: {
    backgroundImage:
      "url(https://www.k9web.com/wp-content/uploads/2018/03/animal-portrait-2499092_1280.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxWidth: "600px",
    height: "300px"
  },
  favoriteList: {
    textAlign: "left"
  }
}));

const UserProile = props => {
  const classes = useStyles();
  const { id, firstName, lastName, email } = props.users.user;
  return (
    <div className={classes.root}>
      <Root />
      <Grid
        container
        spacing={2}
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={1} />
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div className={classes.img} />
            <h1>{`${firstName} ${lastName}`}</h1>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <div className={classes.favoriteList}>
              <h3>My favorites</h3>
              <ul>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
                <li>Thing 4</li>
                <li>Thing 5</li>
              </ul>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserProile);
