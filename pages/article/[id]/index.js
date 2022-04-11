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

export const getServerSideProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export default article