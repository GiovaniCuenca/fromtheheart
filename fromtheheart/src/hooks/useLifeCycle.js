import { useEffect, useRef } from 'react'

const useComponentDidMount = func => useEffect(func, []);

const useComponentDidUpdate = (func, deps) => {
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current)
            func();
        else
            didMountRef.current = true;
    }, deps);
};

const useComponentWillMount = func => {
    const willMount = useRef(true);

    if (willMount.current)
        func();

    useComponentDidMount(() => {
        willMount.current = false;
    });
};

const useComponentWillUnmount = func => {
    useEffect(() => {
        return () => func();
    }, []);
};

export { useComponentDidMount, useComponentDidUpdate, useComponentWillMount, useComponentWillUnmount }