import Head from 'next/head'
import Image from 'next/image'

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
  const posts = await fetch('https://bnf-mu.vercel.app/api/posts')
  .then( result => result.json())
  .then(res=>{
    return res.posts;
  })

  return{
    props:{
      main: posts.main,
      enterprise: posts.enterprise,
      education: posts.education,
      policy: posts.policy,
      company: posts.company
    }
  }
}