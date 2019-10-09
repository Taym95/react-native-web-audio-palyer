import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


export const useFetching = (fetchActionCreator) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchActionCreator());
    }, [])
}
