import Link from "next/link";
export default () => (
    <div>
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a>Home</a>
        </Link>
        <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
            <a>About page</a>
        </Link>
    </div>
);
