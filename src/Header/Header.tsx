import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface HeaderProps{
  sourceLanguage: string
}

const useStyles = makeStyles(() => createStyles({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export const Header: React.SFC<HeaderProps> = ({ sourceLanguage }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          className={classes.title}
        >
          Translate IT!
        </Typography>
        <Typography
          variant="h6"
        >
          {sourceLanguage.toUpperCase()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
