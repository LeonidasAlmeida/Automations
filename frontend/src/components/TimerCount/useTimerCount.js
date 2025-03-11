
import { useStopwatch } from "react-timer-hook";
const useTimerCount = () => {
    const { seconds, minutes, hours, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });
    return {
        seconds,
        minutes,
        hours,
        isRunning,
        reset,
        start,
        pause,
    };
};

export default useTimerCount;
