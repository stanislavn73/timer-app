import { observable } from "mobx";

const App = observable(({timerStore}) => {

  return (
    <div >
      {console.log(timerStore)}
      <p>Timer App</p>
      <p></p>
      <button onClick={()=>timerStore.startTimer()} >Start/Stop</button>
      <button>Wait</button>
      <button>Reset</button>
    </div>
  );
}
)
export default App;
