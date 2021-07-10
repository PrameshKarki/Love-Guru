import React,{useState} from "react";

// *Import Components
import Card from "./UI/Card";

import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import Result from "./Components/Result";


const App=()=>{
 
  // *Mange state for conditional rendering
  const [pair,setPair]=useState();

  const formSubmitHandler=pair=>{
    setPair(pair);
  }
  return (
    <>
    <Card>
      <Header/>
      <InputForm onFormSubmit={formSubmitHandler}/>
    </Card>
    {pair && <Card>
      <Result pairDetails={pair}/>
    </Card>}
    </>
  )
}

export default App;