import {useContext, useEffect} from 'react'
import dbConnect from '../../src/backend/db.js'
import PostContext from '../../src/Context/PostsContext.js'

import usePost from '../../src/hooks/usePost.js'

import PostList from '../../src/Components/Organisms/PostList'

export default function Home({receivedPosts}){
  const {posts} = useContext(PostContext)

	return(
		<div style={{display:"flex", justifyContent:"center", marginTop: 60, marginBottom: 60}}>
      <PostList list={posts.length > 0 ? posts : receivedPosts} admin/>
		</div>
	)
}


export async function getServerSideProps(){

  await dbConnect()

  const posts = await fetch('/api/posts')
    .then(res=>res.json())
    .then(response=>{
      
      return response.data;
    })
    .catch(error=>{
      console.log(error.message)
    })
  return{
    props:{
      receivedPosts: posts
    }
  }
}