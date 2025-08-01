import React from "react";



class About extends React.Component {
    constructor(props) {
        super(props); // ✅ You must call super(props) to access this.props
        console.log("parent Consturctor")
    }
 
    componentDidMount() {
        console.log("Parent Component did Mount called")
    }

    render() {

        console.log("rendered called")
        return<>
          <div> Hello </div>
         <ExampleComponent  name = "Ghazala" age = {25} location = "Vijayawada" />
        </>;
              
    }
}


class ExampleComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state=  {
           name: "",
           age: "",
           location: "",
        }
      
    
    }

    componentDidMount() {
        console.log("child didMount called")
    }

    render() {
          console.log("child Render")
          const {name, age, location} = this.props
          
        return <div> I am coming from it's child 
            
             <h1 nam>{name}</h1>
             <h2 nam>Age: {age}</h2>
             <h3 nam>Location: {location}</h3>

        </div>
    }
}

export default About;
