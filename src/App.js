import { observer } from "mobx-react-lite";
import Button from '@material-ui/core/Button';
import { ButtonGroup } from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import TimerIcon from '@material-ui/icons/Timer';

const App = observer(({ timerStore }) => {

  return (
    <div className='app_container'>
      <TimerIcon />
      <p>{timerStore.display}</p>
      <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
        <Button
          onClick={() => timerStore.startStopTimer()}
        >
          {!timerStore.isTicking ?
            <PlayArrowIcon /> :
            timerStore.isWaiting ?
              <PlayArrowIcon /> :
              <StopIcon />
          }

        </Button>
        <Button
          color="primary"
          onClick={() => timerStore.wait()}
        >
          <PauseIcon />
        </Button>
        <Button
          color="secondary"
          onClick={() => timerStore.reset()}
        >Reset</Button>
      </ButtonGroup >
    </div >
  );
})

export default App;
