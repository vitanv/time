import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Tab,Tabs} from 'react-bootstrap';
import './index.css';
import Clock from './Clock';
import Timer from './Timer';
import Countdown from './Countdown';
import Pomodoro from './Pomodoro';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className='wrapper'>
        <div>
          <Tabs
            defaultActiveKey="timer"
            className="mb-3"
          >
            <Tab eventKey="clock" title="Clock">
              <Clock />
            </Tab>
            <Tab eventKey="timer" title="Stopwatch">
              <Timer />
            </Tab>
            <Tab eventKey="countdown" title="Countdown">
              <Countdown />
            </Tab>
            <Tab eventKey="pomodoro" title="Pomodoro">
              <Pomodoro />
            </Tab>
          </Tabs>
        </div>
    </div>
  </React.StrictMode>
);


