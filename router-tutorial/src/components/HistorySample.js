
import {withRouter} from 'react-router-dom'

const HistorySample = ({location,match,history}) => {
    
    const handleGoBack = () => {
        history.goBack();
    }

    return(
        <div>
            <button onClick={handleGoBack}>뒤로</button>
            <button>홈으로</button>
        </div>
    )
}

export default HistorySample