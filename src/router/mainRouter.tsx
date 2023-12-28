import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '@components/common/header';
import { Footer } from '@components/common/footer';
import ABC from '@pages/abc/abc.page';
import Main from '@pages/main/main.page';

export function MainLayout() {
  return (
    <StyledMainContainer>
      <Header />
      <StyledContentContainer>
        <Outlet />
      </StyledContentContainer>
      <Footer />
    </StyledMainContainer>
  );
}

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/abc" element={<ABC />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0 auto;
  max-width: 412px;
  min-height: 100vh;
`;

const StyledContentContainer = styled.div`
  padding: 0 20px;
  margin-bottom: auto;
`;
