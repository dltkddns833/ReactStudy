import { Component } from "react";

class LifeCycleSample extends Component{
    state = {
        number : 0,
        color : null
    }

    myRef = null;

    // 실행 1
    constructor(props){
        super(props);
        console.log('constructor');
    }

    // 실행 2, update 1(props에서 받아 온 값을 state에 동기화 시킬 때, 컴포넌트가 업데이트 될때)
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return {color : nextProps.color};
        }
        return null;
    }

    componenetDidMout(){
        console.log('compoenentDidMount');
    }

    // update 2 (props 또는 state를 변경 했을 때)
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }

    // 컴포넌트를 DOM에서 제거할 떄
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    // update 4(render에서 받은 결과물 반영 되기 직전)
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    // update 5(렌더링 완료 후)
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('compoenentDidUpdate', prevProps, prevState);
        if(snapshot){
            console.log('업데이트되기 직전 색상 : ', snapshot);
        }
    }

    handleClick = () => {
        this.setState({
            number : this.state.number + 1
        })
    }

    // 실행 3, update 3
    render(){
        console.log('render');

        const style = {
            color: this.props.color
        };

        return(
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
}

export default LifeCycleSample