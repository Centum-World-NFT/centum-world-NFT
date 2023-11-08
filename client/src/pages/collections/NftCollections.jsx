import React from 'react'
import { HeadingDiv, HeadingRoute, HeadingTitle, TableHeadigRightBox, TableHeadingLeftBox, TableMainDiv, Wrapper } from './NftCollectionsStyle'
import TableHeading from '../../components/common/tableheading/TableHeading'

const NftCollections = () => {
  return (
    <>
        <Wrapper>
            <HeadingDiv>
            <HeadingTitle>Leaderboard</HeadingTitle>
            <HeadingRoute>View Collections</HeadingRoute>
            </HeadingDiv>
            <TableHeading/>
        </Wrapper>
    </>
  )
}

export default NftCollections