import React, { useState } from 'react';
import Progressbar from '@components/WriteComment/Progressbar';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import photo from "@Assets/offer/Write-comment/[Progress]upload_photo.svg";

interface ICreatePostProps {
  children: any;
}

const CreatePost = ({ children }: ICreatePostProps) => {
  const [isIcon, setIsIcon] = useState(photo)
  const [isCreatePost, setIsCreatePost] = useState({});

  return (
    <div>
      <CommonHeader />
      <Progressbar number={2} total={6} icon={isIcon}/>
      {React.cloneElement(children, {setIsIcon: setIsIcon, isCreatePost:isCreatePost, setIsCreatePost:setIsCreatePost})}
    </div>
  );
};

export default CreatePost;