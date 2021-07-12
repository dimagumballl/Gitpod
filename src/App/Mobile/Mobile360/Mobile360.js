
import {connect} from 'react-redux'
import {Component} from 'react'
import Header from '../componentsJS/Header';
import Main from '../componentsJS/Main'

class Mobile360 extends Component {
    render(){
        
        return (
            <div className="Main">
              <Header/>
              <Main/>
            </div>
          );
    }
  
}

export default connect(
    state=>({State:state}),
    
  )(Mobile360);

