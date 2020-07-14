import React, {useState} from 'react';
import './App.css';



function App() {
  let [input,setInput] = useState("");
  let [main,setMain] = useState("");
  let [temp,setTemp] = useState("");
  let [img,setImg] = useState("");


  const showData = ()=>{
    const countryName = input;
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+countryName+"&appid=279b4be6d54c8bf6ea9b12275a567156";
  
    fetch(url).then((Response)=>{
        let data = Response.json();
        return data;
      }).then((getdata)=>{
        setImg("/images/"+getdata.weather[0].icon + ".png");
        setMain(getdata.weather[0].main);
        setTemp(getdata.main.temp+"F");
      }).catch(()=>alert("Please enter correct country!"))
 
      
  }

     return ( 
      <div className = "App">
        <h1 className="head-name">Weather App</h1>
        <input value={input} onChange={(e)=>setInput(e.target.value)} id="search-input"/>
        <button disabled={!input} onClick={showData} id="Searchbtn">Search</button>

        <div className="info">
          <img src={img}/>
          {console.log(img)}
         <h3><strong>{main}</strong></h3>
          <h5><strong>{temp}</strong></h5>

        </div>

       </div>
    );
}

export default App;
