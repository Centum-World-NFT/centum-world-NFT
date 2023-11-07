import React from 'react'
import { HeadingDiv, HeadingRoute, HeadingTitle, Wrapper } from './NftCollectionsStyle'

const NftCollections = () => {
  return (
    <div>
      <Wrapper>
        <HeadingDiv >
          <HeadingTitle variant="h5" >Leaderboard</HeadingTitle>
          <HeadingRoute>View collections</HeadingRoute>
        </HeadingDiv>
      </Wrapper>
    </div>
  )
}

export default NftCollections