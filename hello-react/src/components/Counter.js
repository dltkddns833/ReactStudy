import {Component} from 'react';
import PropTypes, { number } from 'prop-types';

class Counter extends Component{
    state = {
        number : 0,
        fixedNumber : 0
    }
    
    render(){
        this.setNumber = this.setNumber.bind(this)
        const {number, fixedNumber} = this.state;
        return(
            <div>
                <h1>{number}</h1>
                <h2>Fixed Number : {fixedNumber}</h2>
                <button onClick={this.setNumber}>+1</button>
            </div>
        )
    }
    
    setNumber(){
        this.setState(prevState => ({
            number : prevState.number + 1
        }), () => {
            console.log(this.state)
        })
    }

    
}

export default Counter;