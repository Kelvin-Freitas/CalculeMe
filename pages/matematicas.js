import styles from '../styles/Matematicas.module.css'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import OptionCard from './components/OptionCard'

export default function matematicas() {
    return (
        <>
            <div className="container">
                <div className='row align-items-center mt-5'>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="d-flex justify-content-between">
                            <OptionCard myIcon={faCalculator} />
                            <OptionCard myIcon={faCalculator}  />
                            <OptionCard myIcon={faCalculator}  />
                        </div>
                    </div>
                </div>
                <div className='row align-items-center mt-5'>
                    <div className="col-sm-12 col-md-12 col-lg-12">

                    </div>
                </div>
            </div>
        </>
    )
}