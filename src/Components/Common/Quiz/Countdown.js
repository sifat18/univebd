import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { Button, Popup } from 'semantic-ui-react';
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

import Swal from 'sweetalert2';
import timeConverter from '../timeConverter';


const Countdown = ({ countdownTime, timeOver, setTimeTaken }) => {
  const totalTime = countdownTime * 1000;
  const [timerTime, setTimerTime] = useState(totalTime);
  const { hours, minutes, seconds } = timeConverter(timerTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timerTime - 1000;

      if (newTime >= 0) {
        setTimerTime(newTime);
      } else {
        clearInterval(timer);

        Swal.fire({
          title: `Your Time's Up`,
          icon: 'info',
          timer: 5000,
          willClose: () => timeOver(totalTime - timerTime)
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      setTimeTaken(totalTime - timerTime + 1000);
    };

    // eslint-disable-next-line
  }, [timerTime]);

  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="button-tooltip-2">hours</Tooltip>}
        >
          {({ ref, ...triggerHandler }) => (
            <Button variant="light"   {...triggerHandler}>{hours}</Button>
          )}
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="button-tooltip-2">minitues</Tooltip>}
        >
          {({ ref, ...triggerHandler }) => (
            <Button variant="light"  {...triggerHandler}>{minutes}</Button>
          )}
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="button-tooltip-2">seconds</Tooltip>}
        >
          {({ ref, ...triggerHandler }) => (
            <Button variant="light"  {...triggerHandler}>{seconds}</Button>
          )}
        </OverlayTrigger>
      </ButtonGroup>

    </>
  );
};

Countdown.propTypes = {
  countdownTime: PropTypes.number.isRequired,
  timeOver: PropTypes.func.isRequired,
  setTimeTaken: PropTypes.func.isRequired
};

export default Countdown;
