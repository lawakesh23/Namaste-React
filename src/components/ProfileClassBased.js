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
                <div className="container block sm:flex sm:grid-cols-4 grid-cols-1 justify-evenly">
                    <div className="sm:text-inherit text-center mx-5 pb-4">
                        <h1 className="text-4xl font-medium">Details</h1>
                        <h3 className=" text-2xl font-medium pt-3">Name:</h3>
                        <span> {this.props.name}</span>
                        <h3 className=' text-2xl font-medium pt-2'>Age: </h3>
                        <span> 27 Years</span>
                        <h3 className=' text-2xl font-medium pt-2'>Location:</h3>
                        <span> Sewapuri, Varanasi</span>
                        <h5 className=" text-2xl font-medium py-4"> Follow Me :</h5>
                        <div className="flex justify-center">
                            <ul className="flex">
                                <li className="pr-2"><Link><img alt="likdin" src={linkedinIcon}/></Link></li>
                                <li className="px-3"><Link><img alt="instagramIcon" src={instagramIcon}/></Link></li>
                                <li className="px-3"><Link><img alt="facebookIcon" src={facebookIcon}/></Link></li>
                                <li className="px-3"><Link><img alt="tweeterIcon" src={tweeterIcon}/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sm:text-inherit text-center mx-5 pb-4">
                        <h1 className="text-4xl font-medium">About Me</h1>
                        <h6 className="py-3">Bio : <i>{this.state.userInfo.bio}</i></h6>
                        <p className="pt-3">Lead Engineer at HCL Technologies || Ex-Niitians || Frontend || ReactJs || JavaScript</p>
                        <p className="py-3"> I'm Frontend Developer having 3.5+ Year of working Experience.</p>
                        <span className="mt-3">Github Username :  {this.state.userInfo.login}</span>
                        
                        <h6 className="pb-4 pt-3">Location: {this.state.userInfo.location}</h6>
                        <button className="w-40 h-10 rounded-full bg-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "><Link  to="../contact" ClassName="">Contact Me</Link></button>
                    </div>
                    <div className="mx-auto flex justify-center">
                        <div className="rounded-md bg-white" style={{width:"20rem"}}>
                            <img className="card-img-top" src={this.state.userInfo.avatar_url} alt="Card image cap"/>
                            <div className="card-body p-2">
                                <h4 className="text-2xl text-orange-600">{this.props.name}</h4>
                                <p className="py-4">I am a versatile Frontend Developer who collects requirement and perform implementation.</p>
                                <div className="flex ">
                                    <ul className="flex py-2">
                                        <li className="pr-2"><Link><img alt="likdin" src={linkedinIcon}/></Link></li>
                                        <li className="px-2"><Link><img alt="instagramIcon" src={instagramIcon}/></Link></li>
                                        <li className="px-2"><Link><img alt="facebookIcon" src={facebookIcon}/></Link></li>
                                        <li className="px-2"><Link><img alt="tweeterIcon" src={tweeterIcon}/></Link></li>
                                    </ul>
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
