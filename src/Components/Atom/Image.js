import React from 'react'
import styles from '../../../styles/Image.module.css'

export default function Image({link, main = false}){
	return(
		<img src={link} alt="Post Image" className={main ? styles.imageMain : styles.image} />
	)
}