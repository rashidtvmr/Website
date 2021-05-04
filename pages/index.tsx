

import Post from '../types/post'
import Layout from "../components/layout/layout";

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <div>Home page!!</div>
  )
}

export default Index

export const getStaticProps = async () => {
  return {
    props: {props: []},
  }
}
