import React, { useState } from "react";
import {
  addInStorage,
  checkIsInStorage,
  deleteFromStorage,
} from "../../../utils/storage";
import {
  Wrapper,
  Image,
  InfoWrapper,
  Title,
  InfoWrapperBg,
  AddButton,
  Buttons,
  RemoveButton,
  Link,
} from "./styled";

type Props = {
  imageSrc: string;
  title: string;
  href: string;
  id: number;
};

const VideoCard: React.FC<Props> = ({ imageSrc, title, href, id }) => {
  const [isInFavorites, setIsInFavorites] = useState<boolean>(checkIsInStorage(id));
  const onAddOrRemoveClick = (id: number) => {
    setIsInFavorites(checkIsInStorage(id));
  };

  return (
    <Wrapper>
      <Link href={href} target="_blank">
        <Image src={imageSrc} alt="#" />
        <InfoWrapper>
          <InfoWrapperBg>
            <Title>{title}</Title>
          </InfoWrapperBg>
        </InfoWrapper>
      </Link>
      <Buttons>
        {isInFavorites ? (
          <RemoveButton
            onClick={() => {
              deleteFromStorage(id);
              onAddOrRemoveClick(id);
            }}
          >
            Удалить из избранного
          </RemoveButton>
        ) : (
          <AddButton
            onClick={() => {
              addInStorage(id);
              onAddOrRemoveClick(id);
            }}
          >
            Добавить в избранное
          </AddButton>
        )}
      </Buttons>
    </Wrapper>
  );
};

export default VideoCard;
