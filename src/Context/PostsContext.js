import { useContext, useState, useEffect , createContext} from 'react'

import Head from 'next/head'

const PostContext = createContext('');

export function PostsContextProvider({children}){

	const [posts, setPosts] = useState([])

	const initial = (e)=>{
		setPosts(e)
	}

	return (
		<PostContext.Provider value={{posts, initial}}>
			<Head>
				<meta chartset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<title>Github</title>
			</Head>
			{children}
		</PostContext.Provider>
	)
}

export default PostContext