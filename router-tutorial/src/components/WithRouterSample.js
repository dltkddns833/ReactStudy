import {useLocation, useNavigate} from 'react-router-dom'

const WithRouterSample = () => {
    let location = useLocation();
    let history = useNavigate();
    
    return(
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly={true}></textarea>
            {/* <h4>match</h4>
            <textarea value={JSON.stringify(match, null, 2)} rows={7} readOnly={true}></textarea> */}
            <button onClick={()=>history('/')}>홈으로</button>
        </div>
    )
}

export default WithRouterSample;