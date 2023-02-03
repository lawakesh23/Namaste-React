
import React from 'react';
import Profile from './ProfileClassBased'

class AboutClass extends React.Component {
    //CB Life cycle - Order of executing 1
    constructor(props){
        super(props);
        console.log("Inside Constructor")
    }

    //CB Life cycle - Order of executing 3
    componentDidMount(){
        //Basically used to API call here
        console.log("Inside ComponentDidMount")
        this.timer = setInterval(()=>{
            console.log("Interval")
        },1000)
    }

    //CB Life cycle - Order of executing 4
    componentDidUpdate(){

        console.log("Inside ComponentDidUpdate")
    }

    //CB Life cycle - Order of executing 5
    componentWillUnmount(){
        // It is used for unmouting the state Exmple- clearing interval or stopping setTimeInterval
        clearInterval(this.timer);
        console.log("Inside ComponentWillUnmount")
    }

    //CB Life cycle - Order of executing 2
    render(){
        console.log("Inside Render");
        return(
            <div>
                {/* <h1>This is About us page from Class based component</h1> */}
                <div className="text-center py-5">
                    <h1 className="text-5xl font-bold text-orange-600">Profile</h1>
                    <p className="text-lg">I'm Frontend Developer </p>
                </div>
                <div className="py-3 bg-orange-500">
                    <Profile name={"Lawakesh Patel"}/>
                </div>
            </div>
        )
    }
}

 export default AboutClass;