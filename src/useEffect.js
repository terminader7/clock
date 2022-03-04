// export const isPlayingUseEffect = useEffect(() => {
//   if (isPlaying) {
//     setIntervalId(
//       setInterval(() => {
//         console.log(currTimeRef.current);
//         setCurrTime(currTimeRef.current - 1);
//       }, 1000)
//     );
//   } else {
//     clearInterval(intervalID);
//   }
// }, [isPlaying]);

// export const sessionTimeBreakTimeUseEffect = useEffect(() => {
//   if (currTimerLabel === "Session") {
//     setCurrTime(sessionTime);
//   } else {
//     setCurrTime(breakTime);
//   }
// }, [sessionTime, breakTime]);
