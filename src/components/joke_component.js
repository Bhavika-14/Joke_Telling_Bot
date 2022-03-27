import React from "react"

class New_joke extends React.Component{
    constructor(props){
        super(props)
        this.state={
            j:" "
        }
    }

    
    
    
        
        
    
    render(){
        
        return(
            <>
               
               <div>
                    <h2 className="text-center">
                        Press the Button 'Tell me a Joke' to listen the joke.
                    </h2>
                 
                    <button className="btn btn-success center padding:10pt btn-lg position-absolute top-50 start-50 translate-middle" onClick={(e)=>this.props.getting_joke()}>
                        Tell me a Joke
                    </button>
            
                    
               </div>
            
            </>
  
        )
    }
    
}
export default New_joke