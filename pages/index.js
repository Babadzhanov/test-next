import Link from "next/link";
export default () => (
  <div>
    <h1>Index page.</h1>
    <div>
      Hello World!
      <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
        <a>About page</a>
      </Link>
    </div>
  </div>
);
