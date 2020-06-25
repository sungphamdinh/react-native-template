// Copy right: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useRef } from "react";

type Void = () => void;
const EmptyFunction = () => {
    return 0;
};

export default function useInterval(callback: Void, delay: number | null) {
    const savedCallback = useRef<Void>(EmptyFunction);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
