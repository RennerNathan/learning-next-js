import Link from "next/link"

const article = ({article}) => {
    /*  One way to do nested routing
    const router = useRouter()
    const {id} = router.query 
    */

  return <>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br />
    <Link href='/'>Go Back</Link>
  </>
}

export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}


export const getStaticPaths = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`)

    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => (
        {params: 
            {id: id.toString()}
        }))

    return {
        paths,
        // if we go to something that doesn't exist in data return 404
        fallback: false
    }
}


export default article