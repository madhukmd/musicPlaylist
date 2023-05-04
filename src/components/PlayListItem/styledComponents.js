import styled from 'styled-components'

export const PlayListCard = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const ImageContentContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Image = styled.img`
  height: 100px;
  margin-right: 20px;
  @media screen and (max-width: 567px) {
    height: 80px;
  }
`
export const NameGenreContainer = styled.div``

export const Name = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  @media screen and (max-width: 567px) {
    font-size: 15px;
  }
`

export const Genre = styled.p`
  font-family: 'Roboto';
  color: #3b82f6;
  font-size: 15px;
`
export const DurationDelateContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Duration = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  margin-right: 50px;
  @media screen and (max-width: 567px) {
    font-size: 15px;
  }
`
export const DeleteButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
`
