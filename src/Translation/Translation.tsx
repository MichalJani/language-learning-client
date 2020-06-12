import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Button, TextField, Grid, Card, CardContent, CardActions, Typography,
} from '@material-ui/core';

interface TranslationProps {
  text: string,
  target: string
 }

const useStyles = makeStyles(() => createStyles({
  root: {
    minWidth: 275,
  },
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
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {target}
        </Typography>
        <Typography variant="h5" component="h2">
          {text}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          "a benevolent smile"
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};
