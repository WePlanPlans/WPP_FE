import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '@components/common/header';
import { Footer } from '@components/common/footer';
import Main from '@pages/main/main.page';
import { Search } from '@pages/search/search.page';
import Detail from '@pages/detail/detail.page';

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
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
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
  max-width: 375px;
  min-height: 100vh;
`;

const StyledContentContainer = styled.div`
  padding: 0 20px;
  margin-bottom: auto;
`;
