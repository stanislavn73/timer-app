import { observer } from "mobx-react-lite";

const App = observer(({ timerStore }) => {

  return (
    <div className='app_container'>
      <p>Timer App</p>
      <p>{timerStore.display}</p>
      <button onClick={() => timerStore.startStopTimer()} >Start/Stop</button>
      <button  onClick={()=>timerStore.wait()}>Wait</button>
      <button onClick={()=>timerStore.reset()} >Reset</button>
    </div>
  );
})

export default App;
