import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  wrapper: {
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div>Copyright &#169; 2020 Michał Janicki</div>
    </div>
  );
};
