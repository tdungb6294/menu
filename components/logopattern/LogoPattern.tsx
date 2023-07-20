import styles from './logo.module.css'

function LogoPattern() {
    return (
        <div className={styles.patternMainContainer}>
            <div className={styles.patternContainer}>
                <div className={styles.diamondContainer}>
                    <div className={styles.diamondLeft}/>
                </div>
                
                <div className={styles.circle}/>
                <div className={styles.line}/>
                <div className={styles.circleCenter1}/>
                <div className={styles.diamondCenter}/>
                <div className={styles.circleCenter2}/>
                <div className={styles.line}/>
                <div className={styles.circle}/>

                <div className={styles.diamondContainer}>
                    <div className={styles.diamondRight}/>
                </div>
            </div>
        </div>
        
    )
}

export default LogoPattern