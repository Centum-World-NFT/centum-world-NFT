import React from "react";
import {
  CollectionName,
  CollectionNameBox,
  DolValue,
  EthValue,
  ImgBox,
  ImgDiv,
  LeftBox,
  MainDiv,
  PerChangeContentDiv,
  PerChangeDiv,
  PerChangeLabel,
  PerChangeLabelDiv,
  PerChangeValue,
  PerChangeValueDiv,
  RightBox,
  RightLowerBox,
  RightUperBox,
  SalesDiv,
  SalesLabelDiv,
  SalesValue,
  SalesValueDiv,
  SerialNumber,
  VolumeContentDiv,
  VolumeDiv,
  VolumeDolDiv,
  VolumeETHDiv,
  VolumeImgDiv,
  VolumeLabel,
  VolumeLabelDiv,
  VolumeLeftDiv,
  VolumeRightDiv,
  Wrapper,
} from "./CardContentStyle";
import { CardMedia } from "@mui/material";
import image from "@/utils/collectionImg/lambo.jpg";
import volumeImage from "../../../utils/collectionImg/Ethereum.png";

const CardContent = () => {
  return (
    <>
      <Wrapper>
        <MainDiv>
          <LeftBox>
            <ImgBox>
              <SerialNumber>#1</SerialNumber>
              <ImgDiv>
                <CardMedia component="img" image={image} />
              </ImgDiv>
            </ImgBox>
            <CollectionNameBox>
              <CollectionName>Centumo Card Image</CollectionName>
            </CollectionNameBox>
          </LeftBox>
          <RightBox>
            
            <RightUperBox>
            <VolumeDiv>
              <VolumeLabelDiv>
                <VolumeLabel>VOLUME</VolumeLabel>
              </VolumeLabelDiv>
              <VolumeContentDiv>
                <VolumeLeftDiv>
                  <VolumeImgDiv>
                    <CardMedia component="img" image={volumeImage} />
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
              </VolumeContentDiv>
            </VolumeDiv>

            <PerChangeDiv>
              <PerChangeLabelDiv>
                <PerChangeLabel>% CHANGE</PerChangeLabel>
              </PerChangeLabelDiv>
              <PerChangeContentDiv>
                <PerChangeValueDiv>
                  <PerChangeValue>89.6%</PerChangeValue>
                </PerChangeValueDiv>
              </PerChangeContentDiv>
            </PerChangeDiv>
            </RightUperBox>

            <RightLowerBox>
            <VolumeDiv>
              <VolumeLabelDiv>
                <VolumeLabel>FLOOR PRICE</VolumeLabel>
              </VolumeLabelDiv>
              <VolumeContentDiv>
                <VolumeLeftDiv>
                  <VolumeImgDiv>
                    <CardMedia component="img" image={volumeImage} />
                  </VolumeImgDiv>
                </VolumeLeftDiv>
                <VolumeRightDiv>
                  <VolumeETHDiv>
                    <EthValue>83.95 ETH</EthValue>
                  </VolumeETHDiv>
                  <VolumeDolDiv>
                    <DolValue>$80,381.49</DolValue>
                  </VolumeDolDiv>
                </VolumeRightDiv>
              </VolumeContentDiv>
            </VolumeDiv>
            <SalesDiv>
              <SalesLabelDiv>SALES</SalesLabelDiv>
              <SalesValueDiv>
                <SalesValue>799</SalesValue>
              </SalesValueDiv>
            </SalesDiv>
            </RightLowerBox>
           
          </RightBox>
        </MainDiv>
      </Wrapper>
    </>
  );
};

export default CardContent;
