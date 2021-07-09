import React from "react";

// *Import Components
import Card from "./UI/Card";

import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import Result from "./Components/Result";


const App=()=>{
  return (
    <>
    <Card>
      <Header/>
      <InputForm/>
    </Card>
    <Card>
      <Result/>
    </Card>
    </>
  )
}

export default App;