import Link from 'next/link';
import Head from "next/head";

function HomePage(props) {
    return (
        <>
            <Head>
                <title>Welcome to Next.js</title>
            </Head>
            <h1>Welcome to Next.js!</h1>
            <Link href="/posts/first">First Post</Link><br />
            <div>Next stars: {props.stars}</div>
            <img src="/logo.png" alt="TutorialsPoint Logo" />
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
        props: { stars: json.stargazers_count }
    }
}

export default HomePage