import Link from "next/link";
export default () => (
  <div>
    <h1>About page.</h1>
    <div>
      Back to{" "}
      <Link href="/" as={process.env.BACKEND_URL + "/"}>
        <a>Home</a>
      </Link>
    </div>
  </div>
);
