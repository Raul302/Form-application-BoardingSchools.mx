import React from 'react'
import styles from './Landing.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function LandingPage() {
  return (
    // workArea
    <div className={styles.workArea}>

        {/* box user panel right and logout button */}
        <div>
        <FontAwesomeIcon
        icon={faUser}
        /> 
      
         %% Usuario %% | 

        </div>

    </div>
  )
}
