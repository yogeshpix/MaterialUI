import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';

//conversion of styles const using withStyles and makeStyles

const useStyles = makeStyles({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    width: '320px',
    height: '100%',
    backgroundColor: '#253053',
    '&:hover': {
      backgroundColor: 'black',
    },
  },
});

function SideMenu() {
  const classes = useStyles();
  return <div className={classes.sideMenu}></div>;
}

export default SideMenu;
