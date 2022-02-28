import React, { useState } from "react";
import styled from "styled-components";

import { ClockTimerLength } from "./ClockTimerLength";

const ClockContainer = styled.div``;

export const Clock = () => {
  const [breakTime, setBreakTime] = useState("5");
  const [sessionTime, setSessionTime] = useState("25");

  return (
    <ClockContainer>
      <h1>25 + 5 Clock</h1>
      <ClockTimerLength />
    </ClockContainer>
  );
};
