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
  gap: 20px;
  flex-direction: column;
`;

const ClockTimerDetailsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
//have title and timer switch once timer hits zero
//add pause, reset, play button
//add count down to time

export const Clock = () => {
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [sessionTime, setSessionTime] = useState(25 * 60);

  return (
    <ClockContainer>
      <h1>25 + 5 Clock</h1>
      <ClockTimerDetailsWrapper>
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
      </ClockTimerDetailsWrapper>
      <ClockTimerDisplay
        setSessionTime={setSessionTime}
        setBreakTime={setBreakTime}
        breakTime={breakTime}
        sessionTime={sessionTime}
      />
    </ClockContainer>
  );
};
