import React, { useState } from "react";
import styled from "styled-components";

import { ClockTimerLength } from "./ClockTimerLength";
import { ClockTimerDisplay } from "./ClockTimerDisplay";

const ClockContainer = styled.div``;

export const Clock = () => {
  const [breakTime, setBreakTime] = useState("5");
  const [sessionTime, setSessionTime] = useState("25");

  return (
    <ClockContainer>
      <h1>25 + 5 Clock</h1>
      <ClockTimerLength
        setBreakTime={setBreakTime}
        setSessionTime={setSessionTime}
        breakTime={breakTime}
        sessionTime={sessionTime}
      />
      <ClockTimerDisplay breakTime={breakTime} sessionTime={sessionTime} />
    </ClockContainer>
  );
};
