import React,{useState, useEffect} from 'react'
import router from 'next/router'
import Field from '../Molecules/Field'
import styles from '../../../styles/Form.module.css'
import styleField from '../../../styles/Field.module.css'

import usePost from '../../hooks/usePost'

export default function Form({post, onSend}){

	const [title, setTitle] =useState("");
	const [content, setContent] =useState("");
	const [time, setTime] =useState();
	const [imageLink, setImageLink] =useState();
	const [author, setAuthor] =useState("");
	const [authorImage, setAuthoImage] =useState();
	const [type, setType] = useState("Main");

	const handleSubmit = ()=>{
		event.preventDefault();
		console.log("Se esta ejecutando")
		var d = new Date();
		!time && setTime(d.toDateString()) 

		const newPost = {
			title,
			content,
			time,
			imageLink,
			author,
			authorImage,
			type
		}
		onSend(newPost, post?._id)
		router.push('/admin')
	}
	const setState = ()=>{
		setTitle(post.title)
		setContent(post.content)
		setTime(post.time)
		setImageLink(post.imageLink)
		setAuthor(post.author)
		setAuthoImage(post.authorImage)
		setType(post.type)
	}
	useEffect(()=>{
		post && setState()
	},[post])

	return(
		<form onSubmit={handleSubmit} className={styles.form}>
			<h2>Post</h2>
			<Field state={title} setState={(e)=>setTitle(e.target.value)} fieldName={"Title"}/>
			<Field state={imageLink} setState={(e)=>setImageLink(e.target.value)} fieldName={"Image Link"}/>
			<Field state={author} setState={(e)=>setAuthor(e.target.value)} fieldName={"Author name"}/>
			<Field state={authorImage} setState={(e)=>setAuthoImage(e.target.value)} fieldName={"Author Image Link"}/>
			<select value={type} onChange={(e)=>setType(e.target.value)}>
	            <option value="Main">Main</option>
	            <option value="Enterprise">Enterprise</option>
	            <option value="Education">Education</option>
	            <option value="Policy">Policy</option>
	            <option value="Company">Company</option>
	        </select>
	        <textarea placeholder="add more content" value={content} onChange={(e)=>setContent(e.target.value)} className={styleField.texterea}/>
	        <input type="submit" value="Submit" className={styleField.button}/>
		</form>
	)
}