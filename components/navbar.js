import Link from "next/link";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
`;

const Li = styled.li`
  float: left;
  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &:hover {
      background-color: #111;
    }
  }
  .active {
    background-color: #4caf50;
  }
`;

export default () => (
  <div>
    <Ul>
      <Li>
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a className="active">Home</a>
        </Link>
      </Li>
      <Li>
        <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
          <a>About</a>
        </Link>
      </Li>
      <Li>
        <a href="#contact">Contact</a>
      </Li>
    </Ul>
  </div>
);
