import {useState, createContext, useEffect} from 'react'

// create context 
export const CityContext = createContext()

export default function CityContextProvider(props){
    // setting state to save cities 
const [error, setError] = useState(false)
const [cities, setCities] = useState([]);
  
useEffect(()=>{
   const fetchData = async () =>{
        try{
            const res = await fetch('https://unilife-server.herokuapp.com/cities?limit=20');
            const json = await res.json();
            console.log(json.response)
            setCities(json.response)
        }
        catch(err){
            setError(true)
            console.log(err);
        }
    }
   fetchData();
}, [])

return(
    <CityContext.Provider value={{error, cities}}>
        {props.children}
    </CityContext.Provider>
)
}