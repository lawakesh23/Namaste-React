import React from 'react'
import { Link } from 'react-router-dom';

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
                        <div className="d-flex f-list-none pt-5">
                            <li className="pr-2">Linkedin</li>
                            <li className="px-2">Facebook</li>
                            <li className="px-2">Instagram</li>
                            <li className="px-2">Tweeter</li>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h1>About Me</h1>
                        <h6>Bio : {this.state.userInfo.bio}</h6>
                        <p className="pt-3">Lead Engineer at HCL Technologies || Ex-Niitians || Frontend || ReactJs || JavaScript</p>
                        <p> I'm Frontend Developer having 3.5+ Year of working Experience.</p>
                        <span>Github Username :  {this.state.userInfo.login}</span>
                        
                        <h6 className="pb-5 pt-3">Location: {this.state.userInfo.location}</h6>
                        <Link class="btn btn-primary">Contact Me</Link>
                    </div>
                    <div className="col-lg-4">
                        <div class="card" style={{width:"20rem"}}>
                            <img class="card-img-top" src={this.state.userInfo.avatar_url} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">{this.props.name}</h5>
                                <p class="card-text">I am a versatile Frontend Developer who collects requirement and perform implementation.</p>
                                <div className="d-flex f-list-none">
                                    <li className="pr-1"><Link><img alt="likdin" src="./assets/img/linkedin.png"/></Link>Linkedin</li>
                                    <li className="px-1">Facebook</li>
                                    <li className="px-1">Instagram</li>
                                    <li className="px-1">Tweeter</li>
                                    
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
