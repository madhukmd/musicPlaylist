import {AiOutlineDelete} from 'react-icons/ai'

import {
  PlayListCard,
  ImageContentContainer,
  Image,
  NameGenreContainer,
  Name,
  Genre,
  DurationDelateContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const PlayListItem = props => {
  const {playlistItem, onDelete} = props
  const {id, imageUrl, name, genre, duration} = playlistItem
  const deleteItem = () => {
    onDelete(id)
  }
  //   console.log(playlistItem)
  return (
    <PlayListCard>
      <ImageContentContainer>
        <Image src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </ImageContentContainer>
      <DurationDelateContainer>
        <Duration>{duration}</Duration>
        <DeleteButton type="button" data-testid="delete" onClick={deleteItem}>
          <AiOutlineDelete size={25} />
        </DeleteButton>
      </DurationDelateContainer>
    </PlayListCard>
  )
}
export default PlayListItem
