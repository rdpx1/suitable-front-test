import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => {

    return {
        root: {
            flexGrow: 1,
            backgroundColor: '#00A17C',
            height: '48px',
          },
          menuButton: {
            marginRight: theme.spacing(2),
          },
          title: {
            flexGrow: 1,
            fontSize: '20px',
            lineHeight: '32px',
            padding: '8px 12px',
            top: '10px',
          },
    }
});
 
export default useStyles;