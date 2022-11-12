import React from 'react'

import styles from '../../../styles/Time.module.css'

export default function Time({time}){
	return (
		<small className={styles.small}>{time}</small>
	)
}