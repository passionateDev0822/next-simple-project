import Link from "next/dist/client/link";
import Head from "next/head"
function HomePage() {
    return (
        <>
        <Head>
            <title>Welcome to Next.js</title>
        </Head>
           <div>Welcome to Next.js!</div>
           <Link href="/posts/first"><a>First Post</a></Link>
        </>	    
     )
}

export default HomePage;
