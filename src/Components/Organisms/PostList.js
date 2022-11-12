import React from 'react'

import Post from './Post'
import styles from '../../../styles/PostList.module.css'

export default function PostList({list}){
	return (
		<div className={styles.container}>
			{list.map(postInfo=>(
				<Post title={postInfo.title} imageLink={postInfo.image} content={postInfo.content} time={postInfo.time} imageAuthor={postInfo.imageAuthor} author={postInfo.author} key={postInfo.title}/>
			))}
		</div>
	)
}