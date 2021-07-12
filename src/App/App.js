
import {connect} from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Mobile360 from './Mobile/Mobile360/Mobile360'
import Mobile768 from './Mobile/Mobile768/Mobile768'
import "../Style/Style.scss"





function App () {
 
  
  const matches360 = useMediaQuery('(min-width:0px) and (max-width:360px)');
  const matches768 = useMediaQuery('(min-width:361px) and (max-width: 768px)');
  const matches1024 = useMediaQuery('(min-width:768px) and (max-width: 1150px)');
  const matches1366 = useMediaQuery('(min-width:1150px) and (max-width: 1366px)');
  const matches1920 = useMediaQuery('(min-width:1366px) and (max-width: 1900px)');
    
    return (
      <div>
        {
          
         
          matches360?<Mobile360/>:<Mobile768/>
          
        }
          
         
      </div>
      
     
      
    );
  

}

export default connect(
  state=>({State:state}),
  
)(App);
