import React, {useState, useCallback, useEffect, useContext} from 'react'
import PostsContext from '../Context/PostsContext'

const link = "https://bnf-mu.vercel.app"

export default function usePost(){
	const {initial} = useContext(PostsContext);

	const getAllPosts = useCallback(async()=>{

		const posts = await fetch(link+'/api/posts')
		.then(res=>res.json())
		.then(response=>{
			const data = response.data;
			initial(data)
		})
		.catch(error=>{
			console.log(error.message)
		})
	},[])
	const getPostById = useCallback(async(id)=>{
		const posts = await fetch(`${link}/api/${id}`)
			.then(res=>res.json())
			.then(response=>{
				return response.data
			})
			.catch(error=>{
				console.log(error.message)
			})
		return posts
	}, [])

	const createPost = useCallback(async (post)=>{

		fetch(link+'/api/posts', {
			method: "POST",
			headers: {
	          'Content-Type': 'application/json',
	        },
			body: JSON.stringify(post)
		})
		.then(res=> res.json())
		.then(response=>{
			getAllPosts();
		})
		.catch(error=>{

			console.log(error.message)
		})
	},[])

	const updatePost = useCallback(async (post, id)=>{

		fetch(`${link}/api/${id}`, {
			method: "PUT",
			headers: {
	          'Content-Type': 'application/json',
	        },
			body: JSON.stringify(post)
		})
		.then(res=> res.json())
		.then(response=>{
			getAllPosts();
		})
		.catch(error=>{
			console.log(error.message)
		})
	},[])

	const deletePost = useCallback(async(id)=>{
		fetch(`${link}/api/${id}`,{
			method: "DELETE"
		})
		.then(response=>response.json())
		.then(res=>{
			getAllPosts();
			alert("The article has been deleted")
		})
		.catch(error=>{
			console.log(error.message)
		})
	},[])

	return {
		getAllPosts,
		getPostById,
		createPost,
		updatePost,
		deletePost
	}
}

