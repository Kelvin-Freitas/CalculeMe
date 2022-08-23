import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/OptionCard.module.css'

export default function OptionCard({myIcon}){
    return (
        <div className={styles.optionCard}>
            <FontAwesomeIcon icon={myIcon} className="fa-3x mt-2"/>
        </div>
    )
}