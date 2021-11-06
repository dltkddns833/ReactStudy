import styles from '../CssModule.module.css'

const CssModule = () => {
    return(
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요, 저는 <span className="something">CSS Module</span>
        </div>
    )
}

export default CssModule