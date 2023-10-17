import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/common/Layout/Layout';
import Home from '@Pages/Home/Home';
import Auth from '@Pages/Auth';
import SignUp from '@Pages/SingUp';
import Search from '@Pages/Search/Search';
import Articles from '@Pages/Articles';
import WriteComment from '@Pages/WriteComment';
import Progress2 from '@Pages/Articles/WriteComment/CreatePost/Progress2/Progress2';
import Progress3 from '@Pages/Articles/WriteComment/CreatePost/Progress3/Progress3';
import Progress4 from '@Pages/Articles/WriteComment/CreatePost/Progress4/Progress4';
import Progress5 from '@Pages/Articles/WriteComment/CreatePost/Progress5/Progress5';
import Progress6 from '@Pages/Articles/WriteComment/CreatePost/Progress6/Progress6';
import InsertPostLink from '@Pages/Articles/WriteComment/GetPost/InsertPostLink';
import MyPosts from '@Pages/Articles/WriteComment/GetPost/MyPosts';
import FinalCheck from '@Pages/Articles/WriteComment/GetPost/FinalCheck';
import ScrollToTop from '@utils/ScrollToTop';
import OAuthRedirectHandler from '@components/Auth/OAuthRedirectHandler';
import PrivateRoute from '@components/PrivateRoute';
import PublicRoute from '@components/PublicRoute';
import ChoicePostType from '@Pages/WritePost/ChoicePostType/ChoicePostType';
import SelectElement from '@Pages/WritePost/WritePost/SelectElement';
import WriteContent from '@Pages/WritePost/WritePost/WriteContent';
import FinalCheckPost from '@Pages/WritePost/WritePost/FinalCheckPost';
import WritePost from '@Pages/WritePost/WritePost/WritePost';
import MyPage from '@Pages/MyPage';
import EditProfile from '@Pages/MyPage/EditProfile';
import LikePosts from '@Pages/MyPage/LikePosts';
import ExchangeHistory from '@Pages/MyPage/ExchangeHistory';
import MannersDetail from '@Pages/MyPage/MannersDetail';
import Notifications from '@Pages/Notifications';
import SetNotificationKeywords from '@Pages/SetNotificationKeywords';
import ChatList from '@Pages/Chat/ChatList';
import ChatRoom from '@Pages/Chat/ChatRoom';
import MakePlan from '@Pages/Chat/MakePlan';
import TradeEvaluation from '@Pages/Chat/TradeEvaluation';
import NotFound from '@Pages/NotFound';

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
                element={<OAuthRedirectHandler service="kakao" />}
              />
              <Route
                path="google"
                element={<OAuthRedirectHandler service="google" />}
              />
              <Route
                path="naver"
                element={<OAuthRedirectHandler service="naver" />}
              />
            </Route>
            <Route path="/articles/:id" element={<Articles />}>
              <Route path="edit/select-element" element={<SelectElement />} />
              <Route path="edit/write-content" element={<WriteContent />} />
              <Route path="edit/final-check" element={<FinalCheckPost />} />
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
            <Route path="chat-list" element={<ChatList />} />
            <Route path="chat-list/:id" element={<ChatRoom />} />
            <Route path="chat-list/:id/make-plan" element={<MakePlan />} />
            <Route
              path="chat-list/:id/trade-evaluation"
              element={<TradeEvaluation />}
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
