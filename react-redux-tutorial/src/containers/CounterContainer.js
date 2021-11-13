import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter'

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispath = useDispatch();
    const onIncrease = useCallback(() => dispath(increase()), [dispath]);
    const onDecrease = useCallback(() => dispath(decrease()), [dispath]);
    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    )
}


export default CounterContainer