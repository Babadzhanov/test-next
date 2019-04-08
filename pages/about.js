import Link from "next/link";
import styled from "styled-components";

import Layout from "../components/layout";

const H1 = styled.h1`
  color: red;
`;

export default () => (
  <Layout>
    <H1>About page.</H1>
    <div>
      Back to{" "}
      <Link href="/" as={process.env.BACKEND_URL + "/"}>
        <a>Home</a>
      </Link>
    </div>
  </Layout>
);
