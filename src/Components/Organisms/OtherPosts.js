import React from 'react'
import styles from '../../../styles/OtherPosts.module.css'
import Image from '../Atom/Image'
import Author from '../Molecules/Author'

export default function OtherPosts({title, content, imageAuthor, imageLink, author, main }){
	return(
		<div className={styles.container}>
			{main && 
				<div className={styles.imageContainer}>
					<Image link={imageLink} main={main}/>
				</div>
			}
			<div className={styles.text}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.content}>{content}</p>
				<div className={styles.extraInfo}>
					<Author imageLink={imageAuthor} name={author} main={false}/>
				</div>
			</div>
		</div>
	)

}