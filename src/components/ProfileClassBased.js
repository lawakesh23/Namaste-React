import React from 'react'
import { Link } from 'react-router-dom';
import linkedinIcon from '../assets/img/linkedin.png'
import instagramIcon from '../assets/img/instagram.png'
import facebookIcon from '../assets/img/facebook.png'
import tweeterIcon from '../assets/img/twitter.png'

class Profile extends React.Component {
    constructor(props){
        super(props);
        
        this.state= {
            userInfo:{
                name:"Hello",
                location:"Varanasi"
            },
        };
        console.log("Inside Child - Constructor")
    };

    async componentDidMount(){
        console.log("Inside - Child ComponenetDidMount")
        const profileData= await fetch("https://api.github.com/users/lawakesh23");
        const getdata = await profileData.json();
        this.setState({
             userInfo: getdata,
        });

    }

    componentDidUpdate(){
        console.log("Inside - Child ComponenetDidUpdate")
    }
    componentWillUnmount(){
        console.log("Inside - Child ComponenetWillUnmount")
    }
    render(){
        console.log("Inside - child Render")
        return(
            <>  
                <div className="row">
                    <div className="col-lg-4">
                        <h1>Details</h1>
                        <h3 className="pt-3">Name:</h3>
                        <span> {this.props.name}</span>
                        <h3 className='pt-2'>Age: </h3>
                        <span> 27 Years</span>
                        <h3 className='pt-2'>Location:</h3>
                        <span> Sewapuri, Varanasi</span>
                        <h5 className="pt-4"> Follow Me :</h5>
                        <div className="d-flex f-list-none ">
                            <li className="pr-2"><Link><img alt="likdin" src={linkedinIcon}/></Link></li>
                            <li className="px-3"><Link><img alt="instagramIcon" src={instagramIcon}/></Link></li>
                            <li className="px-3"><Link><img alt="facebookIcon" src={facebookIcon}/></Link></li>
                            <li className="px-3"><Link><img alt="tweeterIcon" src={tweeterIcon}/></Link></li>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h1>About Me</h1>
                        <h6>Bio : {this.state.userInfo.bio}</h6>
                        <p className="pt-3">Lead Engineer at HCL Technologies || Ex-Niitians || Frontend || ReactJs || JavaScript</p>
                        <p> I'm Frontend Developer having 3.5+ Year of working Experience.</p>
                        <span>Github Username :  {this.state.userInfo.login}</span>
                        
                        <h6 className="pb-4 pt-3">Location: {this.state.userInfo.location}</h6>
                        <button className="button-theme"><Link  to="../contact" ClassName="">Contact Me</Link></button>
                    </div>
                    <div className="col-lg-4">
                        <div className="card" style={{width:"20rem"}}>
                            <img className="card-img-top" src={this.state.userInfo.avatar_url} alt="Card image cap"/>
                            <div className="card-body">
                                <h4 className="card-title font-theme-color">{this.props.name}</h4>
                                <p className="card-text">I am a versatile Frontend Developer who collects requirement and perform implementation.</p>
                                <div className="d-flex f-list-none justify-content-around">
                                    <li className="pr-1"><Link><img alt="likdin" src={linkedinIcon}/></Link></li>
                                    <li className="px-1"><Link><img alt="instagramIcon" src={instagramIcon}/></Link></li>
                                    <li className="px-1"><Link><img alt="facebookIcon" src={facebookIcon}/></Link></li>
                                    <li className="px-1"><Link><img alt="tweeterIcon" src={tweeterIcon}/></Link></li>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>

        )
    }
}

export default Profile;
