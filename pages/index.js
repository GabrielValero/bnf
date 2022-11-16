import {useEffect} from 'react'
import Head from 'next/head'

import dbConnect from '../src/backend/db.js'

import usePost from '../src/hooks/usePost'

import styles from '../styles/Home.module.css'

import PostList from '../src/Components/Organisms/PostList'
import SectionList from '../src/Components/Organisms/SectionList'
import Post from '../src/Components/Organisms/Post'
import Navbar from '../src/Components/Organisms/Navbar'


export default function Home({main, enterprise, education, policy, company}){

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.main}>
        <Post title={main[0].title} imageLink={main[0].image} content={main[0].content} time={main[0].time} imageAuthor={main[0].imageAuthor} author={main[0].author} main={true}/>
      </div>
      <PostList list={main.slice(1)}/>
    </div>
    <section className={styles.section}>
      <SectionList list={enterprise} name="Enterprise"/>
      <SectionList list={education} name="Education"/>
      <SectionList list={policy} name="Policy"/>
      <SectionList list={company} name="Company"/>
    </section>
    </>
  )
}

export async function getServerSideProps(){

  await dbConnect()

  const posts = await fetch('http://localhost:3000/api/posts')
    .then(res=>res.json())
    .then(response=>{
      
      return response.data;
    })
    .catch(error=>{
      console.log(error.message)
    })
    console.log(posts)
    let main = posts.filter(post=> post.type == "Main").slice(0,4)
    let enterprise = posts.filter(post=> post.type == "Enterprise").slice(0,3)
    let education = posts.filter(post=> post.type == "Education").slice(0,3)
    let policy = posts.filter(post=> post.type == "Policy").slice(0,3)
    let company = posts.filter(post=> post.type == "Company").slice(0,3)

  return{
    props:{
      main,
      enterprise,
      education,
      policy,
      company
    }
  }
}