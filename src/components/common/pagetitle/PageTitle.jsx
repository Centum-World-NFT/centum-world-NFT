import React from 'react'
import { HeadingDiv, HeadingTitle, HighlightedText, IconContainer, InputSearchBox, SearchBox, Wrapper } from './PageTitleStyle'
import { SearchIcon } from '../../../utils/icons'
import Header from '../header/Header'
import NavTabs from '../tabs/NavTabs'

const PageTitle = () => {
    return (
        <>
         <Header/>
            <Wrapper>
                <HeadingDiv>
                    <HeadingTitle variant="h3">Find your next collectible</HeadingTitle>
                    <HighlightedText variant="h3"> wherever it lives </HighlightedText>
                    <SearchBox>
                        <InputSearchBox
                            id="filled-basic"
                            label="Search profiles and NFTs by name..."
                            variant="filled"
                        />
                        <IconContainer>
                            <SearchIcon />
                        </IconContainer>
                    </SearchBox>
                </HeadingDiv>
                <NavTabs/>
            </Wrapper>
        </>
    )
}

export default PageTitle