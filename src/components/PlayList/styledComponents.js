import styled from 'styled-components'

export const PlayListContainer = styled.div`
  height: 100vh;
  background-color: #152850;
  display: flex;
  flex-direction: column;
`
export const SingerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 400px;
  background-size: 100% 100%;
  display: flex;
  align-items: flex-end;
  padding-left: 100px;
  @media screen and (max-width: 567px) {
    height: 300px;
    padding-left: 20px;
  }
`
export const SingerName = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #ffffff;
`
export const Singer = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
`
export const TrackListContainer = styled.div`
  padding: 20px;
  @media screen and (max-width: 567px) {
    padding: 6px;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 567px) {
    padding: 0 10px;
  }
`

export const SearchPlayList = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  @media screen and (max-width: 567px) {
    font-size: 20px;
  }
`
export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
  height: 35px;
  width: 30%;
  border-radius: 5px;
  @media screen and (max-width: 567px) {
    width: 40%;
  }
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 90%;
  margin-right: 10px;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
`
export const PlayLists = styled.ul`
  padding-left: 0;
  list-style: none;
  padding: 30px;
  overflow-y: scroll;
  margin-top: 0px;
  height: 43vh;
  @media screen and (max-width: 567px) {
    padding: 10px;
  }
`
export const NoSongs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
export const NoSongsText = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
`
