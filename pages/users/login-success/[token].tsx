import Link from 'next/link';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import Layout from '../../../components/Layout';

const WithStaticProps = () => {
  const router = useRouter();
  const { token } = router.query;
  const decoded = jwt.decode(token);

  return (
    <Layout title="Next.js + TypeScript Example">
      <h1>Login successful</h1>
      <p>Received a JWT</p>
      {decoded && (
        <>
          <p>id: {decoded.id}</p>
          <p>name: {decoded.name}</p>
          <p>email: {decoded.email}</p>
          <p>role: {decoded.role}</p>
        </>
      )}
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default WithStaticProps;
