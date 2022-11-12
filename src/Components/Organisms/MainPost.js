import React from 'react'
import Image from '../Atom/Image'
import Author from '../Molecules/Author'
import Time from '../Atom/Time'

import styles from '../../../styles/MainPost.module.css'



export default function MainPost({post}){
	return(
		<div className={styles.container}>
			<Image link={post.image}/>
			<h2 className={styles.title}>{post.title}</h2>
			<p className={styles.content}>{post.content}</p>
			<div className={styles.extraInfo}>
				<Author imageLink={post.imageAuthor} name={post.author} time={post.time} main={true}/>
				<Time time={post.time}/>
			</div>
		</div>
	)
}