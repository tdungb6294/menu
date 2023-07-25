
import styles from './filter.module.css'
import { useContext } from 'react'
import { Dish } from '../dishes/PopularDishes'
import { LanguageContext, checkLanguage } from '@/pages'
import { FilterContext } from '@/pages/menu'

function FilterBar() {
    const {language} = useContext(LanguageContext)
    const {filter, setFilter} = useContext(FilterContext)

    function handleOnChange(category: string) {
        let tempFilter: string[]
        if (filter.includes(category)) tempFilter = filter.filter((categories: string) => categories !== category)
        else {
            tempFilter = filter.slice()
            tempFilter.push(category)
        }
        setFilter(tempFilter)
    }

    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterBox}>
                {checkLanguage(language) ? 'Sriubos' : 'Soup'}
                <input type="checkbox" id="Soup" defaultChecked={true} onChange={() => {handleOnChange('Soup')}}></input>
            </div>
            <div className={styles.filterBox}>
                {checkLanguage(language) ? 'Vištiena' : 'Chicken'}
                <input type="checkbox" id="Chicken" defaultChecked={true} onChange={() => {handleOnChange('Chicken')}}></input>
            </div>
            <div className={styles.filterBox}>
                {checkLanguage(language) ? 'Jautiena' : 'Beef'}
                <input type="checkbox" id="Beef" defaultChecked={true} onChange={() => {handleOnChange('Beef')}}></input>
            </div>
            <div className={styles.filterBox}>
                {checkLanguage(language) ? 'Kita' : 'Other'}
                <input type="checkbox" id="Other" defaultChecked={true} onChange={() => {handleOnChange('Other')}}></input>
            </div>
        </div>
    )
}

export default FilterBar