import React,{ useState } from "react"

import logo from './logo.svg';
import './App.css';
import New_joke from './components/joke_component';




function App() {

  let [j,setjoke]=useState(" ")
  var synthesis = window.speechSynthesis;
  
  
  const speakjoke=(m)=>{
   
    
    

    
    
    var utterance = new SpeechSynthesisUtterance(m);

    
    

    synthesis.speak(utterance); 
    
  }
  const getting_joke=()=>{fetch('https://v2.jokeapi.dev/joke/Any?format=json&type=single&lang=en&amount=1',{
            method:'GET'
            
})
      
        .then((response)=>(response.json()))
        .then((json)=>{
        console.log(json.joke);
        setjoke(json.joke)
        speakjoke(json.joke)

      }
        )
        
  }
 
  


var SpeechRecognition = window.webkitSpeechRecognition 
var SpeechGrammarList = window.webkitSpeechGrammarList 
var SpeechRecognitionEvent = window.webkitSpeechRecognitionEvent 
var text ="Tell me a joke."
var grammar = '#JSGF V1.0; grammar text; public <text>';
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;
function startbutton() {
  recognition.start();
  console.log('Ready to receive a  command.');
}
recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  console.log(event.results[0][0].transcript)
  if(event.results[0][0].transcript=="Tell me a joke."){
    getting_joke();
  }
}
  
recognition.onspeechend = function() {
  recognition.stop();
}
recognition.onnomatch = function(event) {
  console.log("command not matched");
}




  
  
        
  return (
    <>
      <div>
        
        <New_joke getting_joke={getting_joke} j={j} speakjoke={speakjoke}/>
        <h2 className="text-center">Or, Press the button 'Start' and Say "Tell me a joke" to listen the joke</h2>
        <button className="btn btn-success center btn-lg position-absolute bottom-500 start-50" onClick={startbutton}>    Start    </button>
        
        
        
        
        
      </div>
    </>
  );
}

export default App;
