import React, { useState } from "react";
import styled from "styled-components";

import { ClockTimerDetails } from "./ClockTimerDetails";
import { ClockTimerDisplay } from "./ClockTimerDisplay";

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  border: 5px;
  border-style: dotted;
  border-color: green;
  gap: 20px;
`;
//have title and timer switch once timer hits zero
//get time in minutes and seconds
//add pause, reset, play button
//add count down to time

export const Clock = () => {
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [sessionTime, setSessionTime] = useState(25 * 60);

  return (
    <ClockContainer>
      <h1>25 + 5 Clock</h1>
      <ClockTimerDetails
        setTime={setBreakTime}
        time={breakTime}
        title={"Break"}
      />
      <ClockTimerDetails
        setTime={setSessionTime}
        time={sessionTime}
        title={"Session"}
      />
      <ClockTimerDisplay breakTime={breakTime} sessionTime={sessionTime} />
    </ClockContainer>
  );
};
