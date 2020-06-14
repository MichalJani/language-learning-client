import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface HeaderProps{
  sourceLanguage: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header: React.SFC<HeaderProps> = ({ sourceLanguage }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Translate IT!
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Source:
          {' '}
          {sourceLanguage}
        </Typography>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
