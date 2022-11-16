import React from 'react'

import Post from './Post'
import styles from '../../../styles/PostList.module.css'

export default function PostList({list, admin =false}){
	return (
		<div className={styles.container}>
			{list.map(postInfo=>(
				<Post admin={admin} title={postInfo.title} imageLink={postInfo.image} content={postInfo.content} time={postInfo.time} imageAuthor={postInfo.imageAuthor} _id={postInfo._id} author={postInfo.author} key={postInfo._id}/>
			))}
		</div>
	)
}