import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const CustomButton = withStyles({
  root: {
    fontSize: 14,
    padding: 16,
    textTransform: 'none',
    minHeight: '-webkit-fit-content'
  }
})(Button);

export default CustomButton
