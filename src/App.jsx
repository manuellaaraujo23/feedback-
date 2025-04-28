
import { useState } from "react"
import { CardInicial } from "./components/Cardinicial"
import { CardFinal } from "./components/CardFinal"

export function App(){
  const [submited, setSubmited] =useState(false)
  const [rateNote, setRateNote] = useState(0)

  


  return(
  
     submited === false ?(
      
      <CardInicial  setRateNote={setRateNote} setSubmited={setSubmited}  rateNote={rateNote}/>

     ) : (
      <CardFinal rateNote={rateNote} />
  
  )
  )
}