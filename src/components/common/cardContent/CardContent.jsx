import React from 'react'
import { CollectionName, DolValue, EthValue, ImgDiv, LeftBox, MainDiv, PerChangeDiv, PerChangeValue, PerChangeValueDiv, RightBox, SalesDiv, SalesValue, SalesValueDiv, SerialNumber, VolumeDiv, VolumeDolDiv, VolumeETHDiv, VolumeImgDiv, VolumeLeftDiv, VolumeRightDiv, Wrapper } from './CardContentStyle'
import { CardMedia } from '@mui/material'
import image from '@/utils/collectionImg/lambo.jpg'
import volumeImage from '../../../utils/collectionImg/Ethereum.png'

const CardContent = () => {
    return (
        <>
            <Wrapper>
                <MainDiv>
                    <LeftBox>
                        <SerialNumber>#1</SerialNumber>
                        <ImgDiv>
                            <CardMedia
                                component="img"
                                image={image}
                            />
                        </ImgDiv>
                        <CollectionName>Centumo Card Image</CollectionName>
                    </LeftBox>
                    <RightBox>
                        <VolumeDiv>
                            <VolumeLeftDiv>
                                <VolumeImgDiv>
                                    <CardMedia
                                        component="img"
                                        image={volumeImage}
                                    />

                                </VolumeImgDiv>
                            </VolumeLeftDiv>
                            <VolumeRightDiv>
                                <VolumeETHDiv>
                                    <EthValue>10,683.95 ETH</EthValue>
                                </VolumeETHDiv>
                                <VolumeDolDiv>
                                    <DolValue>$20,380,381.49</DolValue>
                                </VolumeDolDiv>
                            </VolumeRightDiv>
                        </VolumeDiv>

                        <PerChangeDiv>
                            <PerChangeValueDiv>
                                <PerChangeValue>89.6%</PerChangeValue>
                            </PerChangeValueDiv>
                        </PerChangeDiv>

                        <VolumeDiv>
                            <VolumeLeftDiv>
                                <VolumeImgDiv>
                                    <CardMedia
                                        component="img"
                                        image={volumeImage}
                                    />

                                </VolumeImgDiv>
                            </VolumeLeftDiv>
                            <VolumeRightDiv>
                                <VolumeETHDiv>
                                    <EthValue>32.19 ETH</EthValue>
                                </VolumeETHDiv>
                                <VolumeDolDiv>
                                    <DolValue>$61,404.61</DolValue>
                                </VolumeDolDiv>
                            </VolumeRightDiv>
                        </VolumeDiv>
                        <SalesDiv>
                            <SalesValueDiv>
                                <SalesValue>799</SalesValue>
                            </SalesValueDiv>
                        </SalesDiv>
                    </RightBox>
                </MainDiv>
            </Wrapper>
        </>
    )
}

export default CardContent