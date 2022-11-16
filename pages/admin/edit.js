import {useState, useEffect} from 'react'
import {useRouter, withRouter } from 'next/router'
import styles from '../../styles/Create.module.css'

import usePost from '../../src/hooks/usePost'

import Form from '../../src/Components/Organisms/Form'

export default function createPost(){

	const [post, setPost] = useState()

	const router = useRouter()
	const {getPostById, updatePost} = usePost()

	const getPost = async ()=>{
		const response = await getPostById(router.asPath.slice(router.asPath.indexOf('=')+1))
		setPost(response)
		console.log(response)
	}

	useEffect(()=>{
		getPost();
	},[])
	return(
		<div className={styles.container}>
			<Form post={post} onSend={updatePost}/>
		</div>
	)
}