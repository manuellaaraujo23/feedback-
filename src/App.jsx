import iconStar from "./assets/icon-star.svg"
import illustrationThankYou from "./assets/illustration-thank-you.svg"
import { useState } from "react"

export function App(){
  const [submited, setSubmited] =useState(false)
  const [rateNote, setRateNote] = useState(0)

   function handleSubmit(){
    if(rateNote !== 0){
      setRateNote(true)
      return
    }
   
    alert("Please,choose a rate button!")

 }

 function handleChangeRateNote(value){
    setSubmited(value)
  }
   
 

  return(
  
     submited === false ?(
       <div className="bg-radial-gradient max-w-103 px-6 pt-6 pb-8 rounded-2xl font-overpass">
        
       <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
       <img src={iconStar} alt="ícone da estrela" />
       </div>

       <h1 className="font-bold text-2xl mg-2.5">How did we do?</h1>
       <p className="text-light-grey text-sm leading-1 mb-6">Please let us know how we did your suport request. All feedback is appreciated to help us improve our offering!</p>

       <div className="flex justify-between mb-6">
         <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5  rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white"onClick={()=>handleChangeRateNote(1)}/>
         <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5  rounded-full text-sm text-medium-grey font-bold  focus:bg-medium-grey  focus:text-white"onClick={()=>handleChangeRateNote(2)}/>
         <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5  rounded-full text-sm text-medium-grey font-bold  focus:bg-medium-grey  focus:text-white"onClick={()=>handleChangeRateNote(3)}/>
         <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5  rounded-full text-sm text-medium-grey font-bold  focus:bg-medium-grey  focus:text-white"onClick={()=>handleChangeRateNote(4)}/>
         <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5  rounded-full text-sm text-medium-grey font-bold  focus:bg-medium-grey  focus:text-white"onClick={()=>handleChangeRateNote(5)}/>
       </div>

      <button className="bg-orange w-full py-3 rounded-3xl uppercase font-bold tracking-1" onClick={handleSubmit}>SUBMIT</button>

     </div>
     ) : (
      <div className="bg-radial-gradient max-w-103 px-6 pt-6 pb-8 rounded-2xl font-overpass"> 
          <img src={illustrationThankYou} alt="illustration thank you" />
       
          <p></p>

      </div>
     )
  
  )
}