import React from 'react'
import { HeadingDiv, HeadingRoute, HeadingTitle, Wrapper } from './NftCollectionsStyle'
import TableHeading from '../../components/common/tableheading/TableHeading'

const NftCollections = () => {
  return (
    <div>
      <Wrapper>
        <HeadingDiv >
          <HeadingTitle variant="h5" >Leaderboard</HeadingTitle>
          <HeadingRoute>View collections</HeadingRoute>
        </HeadingDiv>
        <TableHeading/>
      </Wrapper>
    </div>
  )
}

export default NftCollections