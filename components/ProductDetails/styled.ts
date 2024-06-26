import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Image = styled.img`
  // margin: 0 20px;
  height: 300px;
  width: 300px;
  // cursor: pointer;
  // object-fit: contain;
`

export const LeftColumn = styled.div`
  padding: 10px 0;
`

export const RightColumn = styled(LeftColumn)`
  max-width: 430px;
`
