import { useState } from "react"

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ])
    const [inputText, setInputText] = useState('');
    const [nextId, setNextID] = useState(5)

    const onChange = e => setInputText(e.target.value);
    const onClick = e => {
        const nextName = names.concat({
            id: nextId,
            text: inputText
        });

        setNames(nextName);
        setNextID(nextId + 1);
        setInputText('');
    }
    const onRemove = (id) => {
        const nextName = names.filter(name => name.id !== id);
        setNames(nextName);
    }

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ))
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IterationSample