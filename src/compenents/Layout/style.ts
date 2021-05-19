import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 650px;
  margin: auto;
  justify-content: space-between;
  height: 250px;
  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 12px;
    border: 2px solid black;
    justify-content: space-between;
    width: 48%;
    height: 100%;
    min-height: 250px;
  }
  > img {
    border: 2px solid black;
    width: 48%;
    height: 100%;
  }
  @media (max-width: 756px) {
    flex-direction: column;
    > div {
      width: 100%;
      margin-bottom: 20px;
    }
    > img {
      width: 100%;
    }
  }
`

export const Header = styled.h2`
  max-width: 650px;
  margin-top: 20px;
  position: relative;
  border: 2px solid black;
  margin: 20px auto;
  padding: 10px;
`
