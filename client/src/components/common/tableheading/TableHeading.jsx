import React from 'react'
import { HeadingDiv, Wrapper, HeadingTitle, HeadingLeftBox, HeadingRightBox } from './TableHeadingStyle'

const TableHeading = () => {
    return (
        <>
            <Wrapper>
                <HeadingDiv>
                    <HeadingLeftBox>
                        <HeadingTitle>COLLECTION</HeadingTitle>
                    </HeadingLeftBox>
                    <HeadingRightBox>
                        <HeadingTitle>VOLUME</HeadingTitle>
                        <HeadingTitle>% CHANGE</HeadingTitle>
                        <HeadingTitle>FLOOR PRICE</HeadingTitle>
                        <HeadingTitle>ITEMS</HeadingTitle>
                        <HeadingTitle>SALES</HeadingTitle>
                    </HeadingRightBox>
                </HeadingDiv>
            </Wrapper>
        </>
    )
}

export default TableHeading