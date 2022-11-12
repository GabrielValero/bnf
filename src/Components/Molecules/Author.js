import React from 'react'

import styles from '../../../styles/AuthorImage.module.css'

export default function Author({imageLink, name, time, main = false}){
	return(
		<div className={styles.container}>
			{main && <img src={imageLink} alt={`image of ${name}`} className={styles.author}/>}
			<small className={styles.name}>{name}</small>
		</div>
	)
}