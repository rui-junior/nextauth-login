import { useSession, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

export default function dashboard() {

    const router = useRouter()

    // const { status } = useSession({
    //     required: true,
    //     onUnauthenticated() {
    //         router.push("/")
    //     },
    // })

    async function Logout(){

        await signOut({
            redirect: false, 
            callbackUrl: "/"
        })
            .then(response => {

                router.push(response.url)

            })

    }


    // if(status === 'authenticated'){

        return(

            <div>

                dashboard

                <button onClick={Logout}>Logout</button>

            </div>

        )
        
    // }
}