import React from "react";
import styled from "styled-components";

import { ClockBreakButton } from "./ClockBreakButton";

const ClockContainer = styled.div``;

export const Clock = () => {
  return (
    <ClockContainer>
      <h1>25 + 5 Clock</h1>
      <ClockBreakButton />
    </ClockContainer>
  );
};
