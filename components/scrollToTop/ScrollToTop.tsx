import { IoIosArrowUp } from 'react-icons/io'
import styles from './scrollToTop.module.css'
import { useEffect, useState } from 'react'

function ScrollToTop() {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    })

    function scrollUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
        { backToTopButton &&
            <div className={styles.scrollContainer}>
                <IoIosArrowUp className={styles.arrow} size={48} onClick={() => {scrollUp()}}/>
            </div>
        }
        </>
    )
}

export default ScrollToTop