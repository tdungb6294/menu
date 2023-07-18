import { useContext, useState } from "react"
import styles from "../styles/header.module.css"
import { BiMap, BiTime, BiPhone } from 'react-icons/bi'
import { LanguageContext} from '../pages/index'
import { checkLanguage } from "../pages/index"

const data = {
  lt: 'I-VI 9-20 val., VII 9-17 val.',
  en: 'I-VI 9-20 h, VII 9-17 h'
}

const address = {
  lt: 'Benedikto turgus, 2 aukštas, Ukmergės g. 259A, Vilnius',
  en: 'Benedikto turgus, 2nd floor, Ukmergės g. 259A, Vilnius'
}

function Header() {
  const {language, setLanguage} = useContext(LanguageContext)
  const [lang, setLang] = useState(true)

  function handleLanguage() {
    if(lang === true) setLang(false)
    else setLang(true)
    if(language === 'lt') setLanguage('en')
    else setLanguage('lt')
  }

  return (
    <div className={styles.header}>
      <div className={styles.info}>
        
        <BiMap className={styles.bimap} size={16}/>
          <span className={styles.text}>
            {checkLanguage(language) ? address.lt : address.en} 
          </span>
        
        <div className={styles.timeContainer}>
          <BiTime className={styles.bitime} size={16}/>
          <span className={styles.workTime}>
            {checkLanguage(language) ? data.lt : data.en} 
          </span>
        </div>
        
        <span className={styles.lt}>
          LT
        </span>
        <label className={styles.switch}>
          <input type="checkbox" onClick={() => {handleLanguage()}} checked={!checkLanguage(language)}></input>
          <span className={styles.slider}></span>
        </label>
        <span className={styles.en}>
          EN
        </span>

        <div className={styles.phone}>
          <BiPhone className={styles.biphone} size={16}/>
          <span className={styles.text}>
            +370 647 26198
          </span>
        </div>
        
      </div>
    </div>
  )
}

export default Header