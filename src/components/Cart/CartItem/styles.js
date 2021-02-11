import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 200,
    width: 250
  },
  cardsize:{
    height: 350,
    width: 250
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    
  },
  buttonsize: {
    height: 10,
    width: 20
  }
}));