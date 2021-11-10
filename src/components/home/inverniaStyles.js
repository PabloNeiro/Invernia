import { makeStyles } from '@material-ui/core';
const inverniaStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  rootMd: {
    width: '100%',
  },
  mediaMd: {
    height: 400,
    padding: theme.spacing(1),
  },
  rootXs: {
    // width: '100%',
    marginTop: '1em',
  },
  mediaXs: {
    height: 180,
    padding: theme.spacing(1),
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default inverniaStyles;
