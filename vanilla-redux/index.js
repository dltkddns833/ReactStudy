import { createStore } from "redux";

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
    toggle: false,
    counter: 0
}

// 2. 액션발생시 reducer 함수 실행
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            }
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

// 2. store 액션 발생시 실행할 함수 적용
const store = createStore(reducer);

// 3. store 값이 업데이트 될 때 함수 실행
const render = () => {
    const state = store.getState();
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    counter.innerText = state.counter;
}

render();

// 3. store 값이 업데이트 될 때 실행할 함수 적용
store.subscribe(render);

// 1. dispatch로 액션 발생
divToggle.onclick = () => {
    console.log(TOGGLE_SWITCH)
    store.dispatch(toggleSwitch());
}

btnIncrease.onclick = () => {
    console.log(INCREASE)
    store.dispatch(increase(1));
}

btnDecrease.onclick = () => {
    console.log(DECREASE)
    store.dispatch(decrease());
}