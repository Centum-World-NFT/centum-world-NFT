import React from 'react'
import { HeadingDiv, Wrapper, HeadingTitle, HeadingLeftBox, HeadingRightBox } from './TableHeadingStyle'

const TableHeading = () => {
    return (
        <>
            <Wrapper>
                <HeadingDiv>
                    <HeadingLeftBox>
                        <HeadingTitle style={{ marginLeft: '30px' }} >COLLECTION</HeadingTitle>
                    </HeadingLeftBox>
                    <HeadingRightBox>
                        <HeadingTitle>VOLUME</HeadingTitle>
                        <HeadingTitle>% CHANGE</HeadingTitle>
                        <HeadingTitle>FLOOR PRICE</HeadingTitle>
                        <HeadingTitle>SALES</HeadingTitle>

                    </HeadingRightBox>
                </HeadingDiv>
            </Wrapper>
        </>
    )
}

export default TableHeading