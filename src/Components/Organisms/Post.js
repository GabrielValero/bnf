import React from 'react'

import Image from '../Atom/Image'
import Author from '../Molecules/Author'
import Time from '../Atom/Time'

import styles from '../../../styles/MainPost.module.css'

export default function Post({title, imageLink, content, time, imageAuthor, author, main = false}){
	return(
		<div className={main ? styles.containerMain : styles.container}>
			<Image link={imageLink} main={main}/>
			<div className={!main && styles.text}>
				<h2 className={main && styles.title}>{title}</h2>
				<p className={main && styles.content}>{content}</p>
				<div className={main ? styles.extraInfoMain : styles.extraInfo}>
					<Author imageLink={imageAuthor} name={author} time={time} main={main}/>
					<Time time={time}/>
				</div>
			</div>
		</div>

	)
}