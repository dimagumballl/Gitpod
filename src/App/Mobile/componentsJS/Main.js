import {CreateAction} from '../../../Store/Action/CreateAction'
import {connect} from 'react-redux'
import {Component} from 'react'

import Frame from '../../../Style/Image/Linck/Frame.png'
import github from '../../../Style/Image/Linck/github.png'
import gitlab from '../../../Style/Image/Linck/gitlab.png'
import Rectangle from '../../../Style/Image/Linck/Rectangle.png'
import Code from '../../../Style/Image/Linck/Code.png'
import Code1 from '../../../Style/Image/Linck/Code1.png'
import v from '../../../Style/Image/Linck/google.png'
import v1 from '../../../Style/Image/Linck/firefox.png'



class Main extends Component {
    render(){
        const{MainStateReduser}=this.props.State.MainStateReduser
        return (
        <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <div className="DoubleConteiner">
                <div className="Conteiner" style={{ justifyContent:"center"}}>
                    <p style={{fontSize:"40px", fontWeight:"bold", marginTop:"5px",textAlign:"center"}}>
                        Always Ready to Code.
                    </p>
                    <p style={{fontSize:"20px", fontWeight:"normal", marginTop:"10px",textAlign:"center",color: "rgba(18, 16, 12, 0.7)"}}>
                        Spin up fresh, automated dev environments for each task, in the cloud, in seconds.
                    </p>
                    <div className="DoubleConteiner">
                        <div className="Conteiner">
                            <div className="ButtonDiv">
                                Try Now
                            </div>
                        </div>
                        <div className="Conteiner">
                            <p style={{fontSize:"16px", fontWeight:"normal", marginTop:"10px",textAlign:"center",color: "rgba(18, 16, 12, 0.7)"}}>
                            Open a workspace. Start from any Git context.
                            </p>
                        </div>
                        <div className="Conteiner" style={{flexDirection:"row", justifyContent:"center"}}>
                            <img src={Frame}></img>
                            <img src={github}></img>
                            <img src={gitlab}></img>
                        </div>
                    </div>
                </div>
                <div className="Conteiner">
                    <img src={Rectangle}></img>
                </div>
            </div>
            <div className="Conteiner" style={{marginTop:"20px",marginBottom:"20px"}}> 
                <p style={{fontSize:"27px", fontWeight:"bold", marginTop:"5px",textAlign:"center"}}>
                    Select project,
                </p>
                <p style={{fontSize:"27px", fontWeight:"normal", marginTop:"10px",textAlign:"center",color: "rgba(18, 16, 12, 0.7)",textDecoration:"line-through"}}>
                    check dependencies, checkout branch, view readme.txt, install tools, run build, run test,
                </p>
                <p style={{fontSize:"27px", fontWeight:"bold", marginTop:"5px",textAlign:"center"}}>
                    start coding.
                </p>
            </div>
            <div className="DoubleConteiner">
                <div className="Conteiner" style={{ justifyContent:"center"}}>
                    <p style={{fontSize:"16px", fontWeight:"bold", marginTop:"5px",textAlign:"center"}}>
                        Think CI/CD for dev environments
                    </p>
                    <p style={{fontSize:"12px", fontWeight:"normal", marginTop:"10px",textAlign:"center",color: "rgba(18, 16, 12, 0.7)"}}>
                    We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.
                    </p>
                    <div className="DoubleConteiner">
                        <div className="Conteiner">
                            <div className="ButtonDiv">
                                More on prebuilds
                            </div>
                            <div className="ButtonDiv" style={{marginTop:"-10px", backgroundColor:"#FFB0AE"}}>
                                Documentation
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="Conteiner">
                    <img src={Code}></img>
                </div>
            </div>
            <div className="Conteiner" style={{marginTop:"80px"}}>
                    <p style={{fontSize:"27px", fontWeight:"bold", marginTop:"5px",textAlign:"center"}}>
                        Always Ready to Code.
                    </p>
                    <div className="Conteiner" style={{marginTop:"80px",}}>
                        <img src={Code1}></img>
                    </div>
                    <p style={{fontSize:"12px", fontWeight:"normal", marginTop:"10px",textAlign:"center",color: "rgba(18, 16, 12, 0.7)"}}>
                        You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes all source code and never stores it on insecure machines and networks.
                    </p>
                    <div className="DoubleConteiner">
                        <div className="Conteiner" style={{flexDirection:"row", marginTop:"10px"}}>
                            <div className="ButtonDiv" style={{ backgroundColor:"white"}}>
                            <img src={v}></img> Chrome Extension
                            </div>
                            <div className="ButtonDiv" style={{ backgroundColor:"white"}}>
                            <img src={v1}></img> Firefox Extension
                            </div>
                        </div>
                        
                    </div>
            </div>
            <div className="Conteiner" style={{marginTop:"30px"}}>
                    <p style={{fontSize:"27px", fontWeight:"bold", marginTop:"5px",textAlign:"center"}}>
                        Used by 400,000+ developers.
                    </p>
            </div>
            <div className="Conteiner">

            </div>
            <div className="DoubleConteiner">
                <div className="Conteiner">
                
                </div>
                <div className="Conteiner">
                
                </div>
            </div>
            <div className="Footer">

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
  )(Main);

