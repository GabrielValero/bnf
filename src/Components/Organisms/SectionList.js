import React from 'react'
import styles from '../../../styles/SectionList.module.css'

import OtherPosts from './OtherPosts'

export default function SectionList({list, name, main=false}){
	return (
		<div className={styles.container}>
			<h2 className={styles.name}>{name}</h2>
			{list && <OtherPosts title={list[0]?.title} content={list[0]?.content} imageAuthor={list[0]?.imageAuthor} author={list[0]?.author} imageLink={list[0]?.image} main={true}/>}
			{list && list.slice(1).map( (post, index) => (
				<OtherPosts title={post.title} content={post.content} imageAuthor={post.imageAuthor} author={post.author} key={`${post.name}/${index}`}/>
			))}
		</div>

	)
}