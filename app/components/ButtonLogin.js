import Link from "next/link"

const ButtonLogin = ({ isLoggedIn, name }) => {
    if (isLoggedIn) {
        return (
            <Link href="/dashboard" className="">Welcome back {name}</Link>
        )
    } else {
        return (
            <button>Login</button>
        )
    }
}

export default ButtonLogin