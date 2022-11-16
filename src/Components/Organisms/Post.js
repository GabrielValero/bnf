import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import usePost from '../../hooks/usePost'

import Image from '../Atom/Image'
import Author from '../Molecules/Author'
import Time from '../Atom/Time'

import styles from '../../../styles/MainPost.module.css'

export default function Post({title, imageLink, content, time, imageAuthor, author, _id, main = false, admin=false}){

	const {deletePost} = usePost()
	const router = useRouter()

	const onNavigate = ()=>{
		router.push({
		    pathname: `/admin/edit`,
		    query: { 
		    	id: _id
		     }
		})
	} 

	return(
		<div className={main ? styles.containerMain : styles.container}>
			{imageLink && <Image link={imageLink} main={main}/>}
			<div className={main && styles.text}>
				<h2 className={main && styles.title}>{title}</h2>
				<p className={main && styles.content}>{content}</p>
				<div className={styles.row}>
					<div className={main ? styles.extraInfoMain : styles.extraInfo}>
						<Author imageLink={imageAuthor} name={author} time={time} main={main}/>
						<Time time={time}/>

					</div>
					{admin && (
							<>
								<div  className={`${styles.button} ${styles.pen}`} onClick={onNavigate}>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
									  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
									</svg>
								</div>
								<div className={`${styles.button} ${styles.trash}`} onClick={()=>deletePost(_id)}>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
									  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
									</svg>
								</div>
							</>
						)}
				</div>
			</div>

			
		</div>

	)
}