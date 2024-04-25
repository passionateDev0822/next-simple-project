import Link from "next/dist/client/link";
import Head from "next/dist/next-server/lib/head";
import Container from "../../components/container";

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({postData}){
    return (
        <Container>
            {postData.id}
            <br />
            {postData.title}
            <br />
            {postData.date}
            <br />
        </Container>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}