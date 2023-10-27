import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/types';
import { setImagePost } from '@/store/slices/WritePostSlice';
import BottomSheet from '@/components/common/BottomSheet';

interface IImageBottomSheetProps {
  close: () => void;
}

const ImageBottomSheet = ({close}: IImageBottomSheetProps) => {
  const selectImages = useSelector((state: RootState) => state.WritePost.image);
  const dispatch = useDispatch();

  //* 이미지를 가져와 URL을 생성한다.
  const handleAddImages = (e: React.ChangeEvent) => {
    const imageLists = (e.target as HTMLInputElement).files as FileList;
    let imageUrlLists = [...selectImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }
    
    dispatch(setImagePost(imageUrlLists));
    close();
  };

  return (
    <BottomSheet height={'140px'} onClick={close}>
      <label className='single'>
        사진 앨범
        <input 
          type='file'
          id='file'
          accept='image/*'
          multiple
          onChange={handleAddImages}
          />
      </label>
    </BottomSheet>
  );
};

export default ImageBottomSheet;
