import { useState, useCallback } from 'react';
import {MdAdd} from 'react-icons/md';
import '../scss/TodoInsert.scss'

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    const onChanage = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e=>{
        onInsert(value);
        setValue('');

        e.preventDefault();
    },[onInsert, value]);

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 선택하세요" value={value} onChange={onChanage}/>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    )
}

export default TodoInsert;