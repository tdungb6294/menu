import Header from "@/components/header/Header";
import LogoPattern from "@/components/logopattern/LogoPattern";
import NavBar from "@/components/navbar/NavBar";
import PhoneMenu from "@/components/phone/PhoneMenu";
import PhoneNavBar from "@/components/phonenavbar/PhoneNavBar";
import styles from '../../components/dishes/dishes.module.css'
import contactStyles from './contacts.module.css'
import { LanguageContext, checkLanguage } from "..";
import { useContext } from "react";
import { BiLogoFacebookSquare, BiMap, BiPhone, BiTime } from "react-icons/bi";

const data = {
    lt: 'Darbo laikas',
    en: 'Working hours'
  }
  
const address = {
    lt: 'Benedikto turgus, 2 aukštas, Ukmergės g. 259A, Vilnius',
    en: 'Benedikto turgus, 2nd floor, Ukmergės g. 259A, Vilnius'
}

const workingHours = [
    {
        lt: 'Pirmadienis',
        en: 'Monday'
    },
    {
        lt: 'Antradienis',
        en: 'Tuesday'
    },
    {
        lt: 'Trečiadienis',
        en: 'Wednesday'
    },
    {
        lt: 'Ketvirtadienis',
        en: 'Thursday'
    },
    {
        lt: 'Penktadienis',
        en: 'Friday'
    },
    {
        lt: 'Šeštadienis',
        en: 'Saturday'
    },
    {
        lt: 'Sekmadienis',
        en: 'Sunday'
    },
]

export default function Page() {
    const {language} = useContext(LanguageContext)
    return (
        <>
        <div className={contactStyles.background}></div>
            <PhoneNavBar/>
            <Header/>
            <PhoneMenu/>
            <NavBar/>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src='/logo.png' alt='logo'/>
            </div>
            <LogoPattern/>
            <div className={contactStyles.title}>
                {checkLanguage(language) ? 'KONTAKTAI' : 'CONTACTS'}
            </div>
            <div className={contactStyles.contactsContainer}>

                <div className={contactStyles.infoContainer}>
                <BiMap className={contactStyles.bi} size={20}/>
                <span className={contactStyles.text}>
                    {checkLanguage(language) ? address.lt : address.en} 
                </span>
                </div>
                
                <div className={contactStyles.infoContainer}>
                <BiTime className={contactStyles.bi} size={20}/>
                <span className={contactStyles.text}>
                    {checkLanguage(language) ? data.lt : data.en} 
                </span>
                </div>

                <div className={contactStyles.workHoursContainer}>
                    <div className={contactStyles.workHoursText}>{checkLanguage(language) ? workingHours[0].lt : workingHours[0].en}</div>
                    <div className={contactStyles.workHoursTime}>9:00-20:00</div>
                    <div className={contactStyles.workHoursText}>{checkLanguage(language) ? workingHours[1].lt : workingHours[1].en}</div>
                    <div className={contactStyles.workHoursTime}>9:00-20:00</div>
                    <div className={contactStyles.workHoursText}>{checkLanguage(language) ? workingHours[2].lt : workingHours[2].en}</div>
                    <div className={contactStyles.workHoursTime}>9:00-20:00</div>           
                    <div className={contactStyles.workHoursText}>{checkLanguage(language) ? workingHours[3].lt : workingHours[3].en}</div>
                    <div className={contactStyles.workHoursTime}>9:00-20:00</div>
                    <div className={contactStyles.workHoursText}>{checkLanguage(language) ? workingHours[4].lt : workingHours[4].en}</div>
                    <div className={contactStyles.workHoursTime}>9:00-20:00</div>
                    <div className={contactStyles.workHoursText}>{checkLanguage(language) ? workingHours[5].lt : workingHours[5].en}</div>
                    <div className={contactStyles.workHoursTime}>9:00-20:00</div>
                    <div className={contactStyles.workHoursText}>{checkLanguage(language) ? workingHours[6].lt : workingHours[6].en}</div>
                    <div className={contactStyles.workHoursTime}>9:00-17:00</div>
                </div>
                
                <div className={contactStyles.infoContainer}>
                <BiPhone className={contactStyles.bi} size={20}/>
                <span className={contactStyles.text}>
                    +370 647 26198
                </span>
                </div>
                
                <div className={contactStyles.infoContainer}>
                <BiLogoFacebookSquare className={contactStyles.bi} size={20}/>
                <span className={contactStyles.text}>
                    COM VIET
                </span>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1629.1293202510788!2d25.23932015309597!3d54.728326851193735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd91eac81b705b%3A0xef3c8c00954398f9!2sCom%20Viet!5e0!3m2!1sen!2slt!4v1690177309341!5m2!1sen!2slt"
                className={contactStyles.map} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
            </div>
        </>
      )
}