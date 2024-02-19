import Articles from '@Pages/Articles';
import EditArticlesOutlet from '@Pages/Articles/ArticlesEdit/EditArticlesOutlet';
import EditSelectElement from '@Pages/Articles/ArticlesEdit/EditSelectElement';
import EditWriteContent from '@Pages/Articles/ArticlesEdit/EditWriteContent';
import Progress2 from '@Pages/Articles/WriteComment/CreatePost/Progress2/Progress2';
import Progress3 from '@Pages/Articles/WriteComment/CreatePost/Progress3/Progress3';
import Progress4 from '@Pages/Articles/WriteComment/CreatePost/Progress4/Progress4';
import Progress5 from '@Pages/Articles/WriteComment/CreatePost/Progress5/Progress5';
import Progress6 from '@Pages/Articles/WriteComment/CreatePost/Progress6/Progress6';
import FinalCheck from '@Pages/Articles/WriteComment/GetPost/FinalCheck';
import InsertPostLink from '@Pages/Articles/WriteComment/GetPost/InsertPostLink';
import MyPosts from '@Pages/Articles/WriteComment/GetPost/MyPosts';
import Auth from '@Pages/Auth';
import ChatList from '@Pages/Chat/ChatList';
import ChatRoom from '@Pages/Chat/ChatRoom';
import MakePlan from '@Pages/Chat/MakePlan';
import TradeEvaluation from '@Pages/Chat/TradeEvaluation';
import Home from '@Pages/Home/Home';
import MyPage from '@Pages/MyPage';
import EditProfile from '@Pages/MyPage/EditProfile';
import ExchangeHistory from '@Pages/MyPage/ExchangeHistory';
import LikePosts from '@Pages/MyPage/LikePosts';
import MannersDetail from '@Pages/MyPage/MannersDetail';
import NotFound from '@Pages/NotFound';
import Notifications from '@Pages/Notifications';
import Search from '@Pages/Search/Search';
import SetNotificationKeywords from '@Pages/SetNotificationKeywords';
import SignUp from '@Pages/SingUp';
import WriteComment from '@Pages/WriteComment';
import WritePost from '@Pages/WritePost/01-PostOutlet/WritePost';
import ChoicePostType from '@Pages/WritePost/02-ChoicePostType/ChoicePostTypePage';
import SelectElement from '@Pages/WritePost/03-SelectPostOptions/01-SelectElement';
import WriteContent from '@Pages/WritePost/03-SelectPostOptions/02-WriteContent';
import FinalCheckPost from '@Pages/WritePost/04-FinalCheck/FinalCheckPost';
import OAuthRedirectHandler from '@components/Auth/OAuthRedirectHandler';
import PrivateRoute from '@components/PrivateRoute';
import PublicRoute from '@components/PublicRoute';
import Layout from '@components/common/Layout/Layout';
import ScrollToTop from '@utils/ScrollToTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        {/* 모든 유저가 접근 가능한 페이지 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/articles/:id" element={<Articles />} />

          {/* 비로그인 유저만 접근 가능한 페이지 */}
          <Route element={<PublicRoute />}>
            <Route path="/auth" element={<Auth />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/oauth2/callback">
              <Route
                path="kakao"
                element={<OAuthRedirectHandler serviceName="kakao" />}
              />
              <Route
                path="google"
                element={<OAuthRedirectHandler serviceName="google" />}
              />
              <Route
                path="naver"
                element={<OAuthRedirectHandler serviceName="naver" />}
              />
            </Route>
            <Route path="/articles/:id" element={<Articles />} />

            {/* 게시물 생성 페이지 */}
            <Route
              path="/write-post/:exchangeType"
              element={<ChoicePostType />}
            />
            <Route
              path="/write-post/:exchangeType/:tradeType"
              element={<WritePost />}
            >
              <Route path="select-element" element={<SelectElement />} />
              <Route path="write-content" element={<WriteContent />} />
              <Route path="final-check" element={<FinalCheckPost />} />
            </Route>
          </Route>

          {/* 로그인한 유저만 접근 가능한 페이지 */}
          <Route element={<PrivateRoute />}>
            <Route path="/articles/:id/write-comment">
              <Route index element={<WriteComment />} />
              <Route path="create-post">
                <Route path="2" element={<Progress2 />} />
                <Route path="3" element={<Progress3 />} />
                <Route path="4" element={<Progress4 />} />
                <Route path="5" element={<Progress5 />} />
                <Route path="6" element={<Progress6 />} />
              </Route>
              <Route path="get-post">
                <Route path="2">
                  <Route index element={<InsertPostLink />} />
                  <Route path="my-posts" element={<MyPosts />} />
                </Route>
                <Route path="3" element={<FinalCheck />} />
              </Route>
            </Route>

            <Route path="/my-page">
              <Route index element={<MyPage />} />
              <Route path="edit" element={<EditProfile />} />
              <Route path="like-posts" element={<LikePosts />} />
              <Route path="exchange-history" element={<ExchangeHistory />} />
              <Route path="manners-detail" element={<MannersDetail />} />
            </Route>
            <Route path="/notifications">
              <Route index element={<Notifications />} />
              <Route
                path="set-notification-keyword"
                element={<SetNotificationKeywords />}
              />
            </Route>
            {/* 채팅 */}
            <Route path="/chat-list">
              <Route index element={<ChatList />} />
              <Route path=":id">
                <Route index element={<ChatRoom />} />
                <Route path="make-plan" element={<MakePlan />} />
                <Route path="trade-evaluation" element={<TradeEvaluation />} />
              </Route>
            </Route>
            {/* 게시물 수정 페이지 */}
            <Route path="/articles/:id/edit" element={<EditArticlesOutlet />}>
              <Route path="select-element" element={<EditSelectElement />} />
              <Route path="write-content" element={<EditWriteContent />} />
              <Route path="final-check" element={<FinalCheckPost />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
