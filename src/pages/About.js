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
           name: props.name,
           age: props.age,
           location: props.location, 
        }
      
    
    }

      handleToggle = () => {
         this.setState((prevState) => {
            return {
                ...prevState,
                isToggled: !prevState.isToggled
            }
         })
    }

   

    componentDidMount() {
        console.log("child didMount called")
    }


      

     


    render() {
          console.log("child Render")
          console.log(this.state)
          const {name, age, location} = this.state;
          
        return <div> I am coming from it's child 
            
             <h1  >{name}</h1>
             <h2 >Age: {age}</h2>
             <h3 >Location: {location}</h3>
             <button onClick={() => this.setState({
                name: "Malik",
                age: 26,
                location: "Mumbai"
             })}>Click Me To Changes Details</button>

        </div>
    }
}

export default About;
