import {useEffect, useContext, useState} from 'react'
import Head from 'next/head'

import dbConnect from '../src/backend/db.js'

import usePost from '../src/hooks/usePost'
import PostsContext from '../src/Context/PostsContext'

import styles from '../styles/Home.module.css'

import PostList from '../src/Components/Organisms/PostList'
import SectionList from '../src/Components/Organisms/SectionList'
import Post from '../src/Components/Organisms/Post'
import Navbar from '../src/Components/Organisms/Navbar'


export default function Home(){

  const {getAllPosts} = usePost()

  const { posts } = useContext(PostsContext)

  const [main, setMain] = useState()
  const [enterprise, setEnterprise] = useState()
  const [education, setEducation] = useState()
  const [policy, setPolicy] = useState()
  const [company, setCompany] = useState()

  const setState = (e)=>{
    setMain(e.filter(post=> post.type == "Main").slice(0,4))
    setEnterprise(e.filter(post=> post.type == "Enterprise"))
    setEducation(e.filter(post=> post.type == "Education"))
    setPolicy(e.filter(post=> post.type == "Policy"))
    setCompany(e.filter(post=> post.type == "Company"))
  }

  useEffect(()=>{
    getAllPosts()
  },[])
  useEffect(()=>{
    posts && setState(posts)
  },[posts])

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.main}>
        {main && <Post title={main[0]?.title} imageLink={main[0]?.image} content={main[0]?.content} time={main[0]?.time} imageAuthor={main[0]?.imageAuthor} author={main[0]?.author} main={true}/>}
      </div>
      {main && <PostList list={main?.slice(1)}/>}
    </div>
    <section className={styles.section}>
      {enterprise && <SectionList list={enterprise} name="Enterprise"/>}
      {education && <SectionList list={education} name="Education"/>}
      {policy && <SectionList list={policy} name="Policy"/>}
      {company && <SectionList list={company} name="Company"/>}
    </section>
    </>
  )
}

export async function getServerSideProps(){
  await dbConnect()
  return{
    props:{}
  }
}