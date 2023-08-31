import { useNavigate, useParams } from 'react-router-dom';
import Progressbar from '@/components/WriteComment/Progressbar';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import checkIcon from '@Assets/icons/WriteComment/Check.svg';
import TitleSection from '@/components/WriteComment/TitleSection';
import ContentsSection from '@/components/WriteComment/ContentsSection';
import styled from 'styled-components';
import ActionButton from '@/components/common/Buttons/ActionButton';
import BlueButton from '@/components/common/Buttons/BlueButton';
import { size } from '@/styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 34px 24px;
  background-color: rgba(33, 86, 242, 0.08);
  border-radius: 8px;
  margin: 20px 0;
`;

const Row = styled.div`
  display: flex;
  line-height: 130%;
  .title {
    ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.gray};
    flex: 1;
  }

  .product_img {
    width: 55px;
    height: 55px;
  }

  span {
    flex: 2.5;
  }
`;

const SBlueButton = styled(BlueButton)`
  margin: 20px 0;
`;

function FinalCheck() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleReSelectBtnClick = () => navigate(-1);

  // Todo: 게시글 id로 정보 받아오는 API 받아오기

  const handleCloseButton = () => {
    navigate(`/articles/${id}`, { replace: true });
  };
  return (
    <>
      <CommonHeader display={'flex'} closeClick={handleCloseButton} />
      <Progressbar number={3} total={3} icon={checkIcon} />
      <ContentsSection>
        <TitleSection
          h1Text="최종 확인"
          h2Text="내가 작성한 게시글을 가져오는 경우, 수정이 불가능하니 신중하게 선택해주시길 바랍니다."
        />
        <Container>
          <Row>
            <div className="title">이미지</div>
            <span>
              <img
                className="product_img"
                src="https://health.chosun.com/site/data/img_dir/2021/06/08/2021060801363_0.jpg"
                alt="제품 이미지"
              />
            </span>
          </Row>
          <Row>
            <div className="title">희망 물품</div>
            <span>선글라스</span>
          </Row>
          <Row>
            <div className="title">카테고리</div>
            <span>의류</span>
          </Row>
          <Row>
            <div className="title">예상 가격대</div>
            <span>21,000~24,000</span>
          </Row>
          <Row>
            <div className="title">작성글</div>
            <span>
              (본문) 선글라스를 구매하신다고 하면 다른 물건도 얹어드릴 수
              있습니다.
            </span>
          </Row>
        </Container>
        <ActionButton
          $backgroundColor="white"
          $borderColor="Mainblue"
          onClick={handleReSelectBtnClick}
        >
          다시 선택하기
        </ActionButton>
        <SBlueButton maxWidth={size.mobile}>완료</SBlueButton>
      </ContentsSection>
    </>
  );
}

export default FinalCheck;
