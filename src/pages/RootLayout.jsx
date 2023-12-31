import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Container from '../components/Container';

export default function RootLayout() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Outlet />
    </>
  );
}
