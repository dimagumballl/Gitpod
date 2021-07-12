import {CreateAction} from '../../../Store/Action/CreateAction'
import {connect} from 'react-redux'
import {Component} from 'react'
import v from '../../../Style/Image/Logo/Vector.png'
import v1 from '../../../Style/Image/Logo/Vector-1.png'
import v2 from '../../../Style/Image/Logo/Vector-2.png'
import v3 from '../../../Style/Image/Logo/Vector-3.png'
import v4 from '../../../Style/Image/Logo/Vector-4.png'
import v5 from '../../../Style/Image/Logo/Vector-5.png'
import v6 from '../../../Style/Image/Logo/Vector-6.png'
import v7 from '../../../Style/Image/Logo/Vector-7.png'
import MenuButt from '../../../Style/Image/com/menubutt.png'



class Header extends Component {
    render(){
        const{MainStateReduser}=this.props.State.MainStateReduser
        return (
        <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <div className="Header">
              <div className="HeaderLogo">
                    
                    <div className="Logo">
                        <img src={v7}></img>
                    </div>
                    <div className="LogoTitle">
                        <div className="LogoTitlev1">
                            <img src={v}></img>
                        </div>
                        <div className="LogoTitlev2">
                            <img src={v1}></img>
                        </div>
                        <div className="LogoTitlev3">
                            <img src={v6}></img>
                        </div>
                        <div className="LogoTitlev4">
                            <img src={v2}></img>
                        </div>
                        <div className="LogoTitlev5">
                            <img src={v3}></img> 
                        </div>
                        <div className="LogoTitlev6">
                            <img src={v4}></img>
                        </div>
                        <div className="LogoTitlev7">
                            <img src={v5}></img>
                        </div>
                    </div>
              </div>
              
              <div className="HeaderMenuButt" onClick={()=>this.props.MenuClick()}>
                <img src={MenuButt}></img>   
              </div>
            </div>
            <div className="HeaderMenu" style={MainStateReduser.interfase.Menu?{display:"block"}:{display:"none"}}>
                <div className="HeaderMenuItem">
                    <p>
                    Features
                    </p>
                </div>
                <div className="HeaderMenuItem">
                    <p>
                    Pricing
                    </p>
                    
                </div>
                <div className="HeaderMenuItem">
                    <p>
                    Blog
                    </p>
                    
                </div>
                <div className="HeaderMenuItem">
                    <p>
                    Docs
                    </p>
                    
                </div>
                <div className="HeaderMenuItem">
                    <p>
                    Changelog
                    </p>
                    
                </div>
                <div className="HeaderMenuItem">
                    <p>
                    We're hiring 
                    </p>
                    
                </div>
                <div className="HeaderMenuItem" style={{backgroundColor:"black",color:"white"}}>
                    <p>
                        Login
                    </p>
                    
                </div>
            </div>
        </div>
            
          );
    }
  
}

export default connect(
    state=>({State:state}),
    dispatch => ({
        MenuClick: () => {
              dispatch(CreateAction("MENU_CLICK"))
              
          },
      })
  )(Header);

