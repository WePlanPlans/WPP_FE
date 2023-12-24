import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '@components/common/header';
import { Footer } from '@components/common/footer';
import ABC from '@pages/abc/abc.page';
import Main from '@pages/main/main.page';

function Dashboard() {
  return (
    <>
      <Header />
      <StyledMainContainer>
        <Outlet />
      </StyledMainContainer>
      <Footer />
    </>
  );
}

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route index element={<Main />} />
        <Route path="/abc" element={<ABC />} />
      </Routes>
    </>
  );
};

export default MainRouter;

const StyledMainContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;
