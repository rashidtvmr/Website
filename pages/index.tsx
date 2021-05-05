
import Head from 'next/head';
import Post from '../types/post'
import {createGlobalStyle} from "styled-components";
import React from "react";

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;

type Props = {
  allPosts: Post[]
}

const Home = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>SSR styled-components! Next.js Starter</title>
      </Head>
      <GlobalStyle/>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {props: []},
  }
}

export default Home
