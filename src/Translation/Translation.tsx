import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Card, CardContent, Typography,
} from '@material-ui/core';

interface TranslationProps {
  text: string,
  target: string
 }

const useStyles = makeStyles(() => createStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export const Translation: React.SFC<TranslationProps> = ({ text, target }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {target}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
