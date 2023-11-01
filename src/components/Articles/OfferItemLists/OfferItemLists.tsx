import { useState } from 'react';
import styled from 'styled-components';
import OfferItem from '@components/Articles/OfferItem';
import { OfferPostTypes } from '@/types/OfferTypes';
import useModal from '@hooks/useModal';
import BottomSheet from '@components/common/BottomSheet';
import ConfirmModal from '@components/common/ConfirmModal';

const Ul = styled.ul``;

const Container = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const SBottomSheet = styled(BottomSheet)`
  margin: 0 -20px;
`;

const DeleteText = styled.div`
  color: ${({ theme }) => theme.color.orange};
`;

interface IOfferItemListsProps {
  offers: OfferPostTypes[];
  isOwner: boolean;
}

function OfferItemLists({ offers, isOwner }: IOfferItemListsProps) {
  const {
    isOpen: isOptionModalOpen,
    open: openOptionModal,
    close: closeOptionModal,
  } = useModal();
  const [selectedOffer, setSelectedOffer] = useState({ id: '', nickname: '' });
  const {
    isOpen: isOpenDeleteModal,
    open: openDeleteModal,
    close: closeDeleteModal,
  } = useModal();

  const handleOptionModalOpen = (offerId: string, nickname: string) => {
    setSelectedOffer({ id: offerId, nickname });
    openOptionModal();
  };

  const onDeleteButtonClick = () => {
    closeOptionModal();
    openDeleteModal();
  };

  const handleDeleteOffer = () => {
    console.log(selectedOffer.id);
    closeDeleteModal();
  };

  return (
    <>
      <Ul>
        {offers.map((offers) => (
          <Container key={offers.id}>
            <OfferItem
              {...offers}
              isOwner={isOwner}
              onOptionBtnClick={handleOptionModalOpen}
            />
          </Container>
        ))}
      </Ul>
      {isOptionModalOpen && (
        <SBottomSheet onClick={closeOptionModal} height="140px">
          <DeleteText onClick={onDeleteButtonClick}>삭제</DeleteText>
        </SBottomSheet>
      )}
      <ConfirmModal
        isOpen={isOpenDeleteModal}
        title="오퍼 삭제"
        content={`${selectedOffer.nickname}님의 오퍼를 삭제하시겠습니까?`}
        confirmedContent="오퍼가 삭제되었습니다."
        onFinalOkClick={handleDeleteOffer}
        closeAction={closeDeleteModal}
      />
    </>
  );
}

export default OfferItemLists;
