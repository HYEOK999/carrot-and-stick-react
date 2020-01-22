import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import '../../App.css';

const StyledMoominSection = styled.section`
  display: inline-block;
  width: 500px;
  margin-left: 40px;
`;

const StyledStatusSay = styled.h2`
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const StyledMoominSay = styled.em`
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  color: #313131;
  display: block;
  text-align: center;
  margin-bottom: 30px;
  height: 30px;
`;

const StyledNormalEye = styled.div`
  display: ${props => (props.compareStatus === 'normal' ? 'block' : 'none')};
`;

const StyledHappyEye = styled.g`
  display: ${props => (props.compareStatus === 'happy' ? 'block' : 'none')};
`;

const StyledHappyHearts = styled.div`
  display: ${props => (props.compareStatus === 'happy' ? 'block' : 'none')};
`;

const eyeblow = keyframes`
  0% {
    height: 20px;
    opacity: 0;
  }
  100% {
    height: 0px;
    opacity: 1;
  }
`;

const StyledAngryEye = styled.g`
  display: ${props => (props.compareStatus === 'angry' ? 'block' : 'none')};
  transform: scale(0.6) translate(33px, 21px);
  animation: ${eyeblow} 3s;
`;

const StyledAngryDiv = styled.div`
  ${props =>
    props.compareStatus === 'angry' &&
    css`
      position: absolute;
      top: 137px;
      left: 106px;
      background: white;
      width: 99px;
      height: 35px;
      animation: ${eyeblow} 2s both;
    `};
`;

const StyledAngryMark1 = styled.div`
  display: ${props => (props.compareStatus === 'angry' ? 'block' : 'none')};
`;

const StyledAngryMark2 = styled.div`
  display: ${props => (props.compareStatus === 'angry' ? 'block' : 'none')};
`;

const ImgRender = props => {
  return (
    <StyledMoominSection>
      <StyledStatusSay>Moomin say</StyledStatusSay>
      <StyledMoominSay>{props.sayMoomin}</StyledMoominSay>
      <div className="moomin-svg bg_heart">
        <form className="moomin-form">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 113 163.9"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M54.1,5.1c2.9,1.8,4.3,4.8,5.7,7.7c0.8,1.6,1.4,3.3,2.1,5c0.2,0.6,0.5,1,1.3,0.9c1.3-0.2,2.6,0,3.9,0.4
                c0.9,0.2,1.1-0.1,1.4-0.8c1.1-3.1,2.8-5.9,4.7-8.5c1.8-2.4,5.1-2.2,6.5,0.5c1.2,2.3,1.4,4.8,1.4,7.3c0.1,3.9-0.2,7.7-0.8,11.5
                c-0.2,1,0,1.9,0.5,2.8c1.6,3.1,2,6.5,2.4,9.9c1.2,8,1.5,16.1,2,24.2c0.4,6.9,1.7,13.6,2.9,20.3c1.9,10.6,5.8,20.7,9.3,30.8
                c2.6,7.4,5.3,14.7,8.8,21.6c0.8,1.7,2.1,3,3.1,4.5c0.4,0.6,0.5,1.2,0,1.8c-1.1,1.4-3.3,1.5-4.2,3.1c-0.1,0.2-0.7,0.2-1,0.2
                c-1.4-0.1-2.7-0.4-4.2,0.7c-1,0.8-2.7,0.4-4-0.3c-1.1-0.6-2.2-1.1-3.3-1.7c-0.5,2.2-1.2,2.7-3.3,2.4c-0.6-0.1-1.2-0.2-1.7-0.4
                c-0.7-0.4-1.3-0.2-1.9,0.3c-1.9,1.6-4.1,2.2-6.6,1.9c-1-0.1-1.7,0.1-2.5,0.6c-3.7,2.3-7.3,4.9-11.2,6.9c-0.7,0.4-1.4,0.6-2.4,0
                c-3-1.3-4.5-3.7-5.4-6.6c-0.3-1.1-0.8-1.2-1.8-1.1c-3.6,0.5-7.2,0.4-10.8,0c-2.5-0.3-4.8-1.8-7.4-1.4c-5,0.7-9.8,1.7-14.1,4.6
                c-1.6,1.1-3.4,1.8-5.3,2.4c-1.4,0.4-2.7,0.1-4-0.6c-5.1-3.1-8-7.7-9.5-13.3c-0.5-2-0.8-4.1-1.2-6.1c-0.3-2.1-0.7-4.3,0-6
                c1.6-3,3-3.6,6.3-2.6c1.4,0.4,2.7,1.5,4.1,1.7c1.3,0.2,2.5-1.4,4-1.7c0.5-0.1,1.1-0.3,1.6-0.4c2.1-0.4,2.1-0.4,1.9-2.5
                c-0.5-8.5,1.5-16.5,4.6-24.2c1.2-3,2.6-6,4.3-8.7c0.5-0.9,0.4-1.2-0.5-1.6c-5.5-2.3-10-5.8-12.9-11.2c-4-7.4-1-16.9,6.5-20.7
                c6-3.1,10.2-7.6,12.9-13.9c3.1-7.5,7-14.5,12.4-20.6c0.5-0.6,0.5-1.1,0.5-1.8c-0.5-4.6-0.5-9.2,0.4-13.7c0.3-1.6,0.6-2.9,2-3.7
                C52.5,4.7,53.4,4.6,54.1,5.1z M95.5,140.9c0.4-1.3,1.5,0.2,1.9,0.9c1.3,2.1,3.5,3.2,5.4,4.7c0.4,0.3,1.2,0.6,1.7,0.1
                c0.5-0.6,0-1.1-0.5-1.6c-1.2-1.2-2.4-2.4-3.5-3.7c-0.3-0.3-1.1-0.7-0.3-1.3c0.7-0.5,0.8,0.3,1.1,0.6c1.2,1.4,2.4,2.6,3.7,3.9
                c0.8,0.8,1.8,0.6,2.5,0.1c0.8-0.6,0-1.3-0.4-1.8c-1.2-1.5-2.1-3.1-3-4.8c-2.1-4.3-3.9-8.7-5.5-13.1C93.9,112,89,99.4,86.5,86
                c-1.3-6.9-2.5-13.9-2.9-20.9c-0.5-8.7-0.9-17.4-2.4-26c-0.4-2.3-0.7-4.7-2-6.7c-0.7-1-0.7-1.7-0.6-2.7c0.7-4,1-8,0.9-12.1
                c0-2.1-0.2-4.2-1-6.2c-0.9-2-2.7-2.2-4-0.5c-2.1,2.9-4,5.9-4.9,9.4c-0.2,0.8-0.4,1-1.3,0.8c-2.1-0.6-4.3-1.1-6.5-0.4
                c-0.7,0.2-0.8-0.2-0.9-0.7c-0.5-1.3-0.9-2.7-1.5-3.9c-1.2-2.9-2.4-5.7-4.5-8.1c-0.5-0.6-1.1-1.4-2-1.1c-0.9,0.3-1.2,1.1-1.4,2
                c-1,4.9-1.1,9.8-0.2,14.8c0.1,0.5,0,0.7-0.3,1c-5.9,6.4-9.9,13.9-13.3,21.8c-2.6,6.1-7,10.6-12.9,13.7c-4.9,2.6-7.1,6.9-8.2,12.1
                c-0.1,0.4,0,0.8,0.1,1.2c1,5.6,4.1,9.9,8.7,12.9c5.5,3.6,11.6,6.1,18.2,7c12,1.6,23.3-3.9,29.4-14.5c1.7-3,3-6.2,3.9-9.6
                c0.1-0.4,0.2-0.8,0.7-0.7c0.6,0.1,0.4,0.6,0.3,1c-0.3,1.1-0.6,2.1-1,3.2c-2.8,8.2-7.6,14.8-15.5,18.7c-9,4.4-18.2,4.2-27.3,0.5
                c-1-0.4-1.4-0.2-1.8,0.6c-1.1,2.1-2.3,4.1-3.2,6.3c-3.8,8.4-6.4,17.1-6,26.5c0.1,1.7,0.2,3.3,2,4c0.3,0.1,0.6,0.4,0.8,0.7
                c0.2,0.3,1,0.5,0.5,1c-0.5,0.6-0.9,0-1.2-0.3c-1.4-1.5-3-2-5-1.4c-1.8,0.5-3.7,0.7-5,2.2c-0.6,0.8-1,0.7-1.7,0.2
                c-1.7-1.1-3.5-2.1-5.6-2.3c-1.7-0.2-2.6,0.5-2.7,2.2c-0.1,1.5-0.1,3.1,0.1,4.6c0.5,5.9,2.1,11.4,6.3,15.8c3.9,3.9,6.8,4.1,11.2,0.8
                c1-0.7,2-1.3,3.1-1.7c3.3-1.2,6.7-2.3,10.4-2.9c-0.5-0.5-1.1-0.9-0.4-1.5c0.6-0.6,1-0.3,1.5,0.1c0.8,0.5,1.7,1,2.7,1.4
                c5.4,2.2,10.9,2,16.6,1.3c0.8-0.1,0.8-0.5,0.8-1.1c0.2-3.3,0.5-6.6,1.2-9.8c0.7-3,1.4-6.1,3.5-8.5c1.4-1.7,3.3-2.9,5.4-2
                c1.8,0.9,3.4,1,5.1,0.5c0.1,0,0.2,0,0.3,0c3.7-0.1,7.8,3.2,8.4,6.9c0.1,0.4,0,0.6-0.4,0.7c-0.5,0.2-0.6-0.2-0.7-0.5
                c-0.5-1.3-1.1-2.5-2-3.5c-1.7-2.2-4.2-3-6.7-2.3c-0.8,0.2-1.2,0.4-0.6,1.3c0.8,1.3,1.2,2.7,1.5,4.2c0.7,3.5,0.6,7,0.3,10.5
                c-0.1,0.5,0.4,1.6-0.6,1.5c-0.8-0.1-0.4-1-0.3-1.5c0.2-2.7,0.3-5.5,0-8.2c-0.2-2.4-0.8-4.6-2.2-6.6c-1.8-2.5-4.2-2.6-6.4-0.5
                c-1.1,1-1.7,2.3-2.2,3.7c-1.7,4.4-2.1,9-2.5,13.7c-0.3,2.8,0.7,5.1,2.1,7.3c1.7,2.6,3.7,2.9,6.2,1.3c3.2-2.1,6.4-4.1,9.6-6.1
                c0.6-0.4,1.2-0.5,2-0.3c1.8,0.4,3.5-0.1,5.1-0.8c1.5-0.7,2.1-1.8,1.8-3.5c-0.4-3.3-1.3-6.3-2.6-9.4c-1.8-4.5-3.6-9-5.3-13.5
                c-0.2-0.5-1-1.3,0-1.6c0.9-0.3,0.8,0.7,0.9,1.2c1.8,4.4,3.4,8.7,5.2,13.1c1.3,3.1,2.4,6.3,2.7,9.6c0.2,2.4,0.5,2.8,2.9,3.2
                c1.2,0.2,1.6-0.1,1.3-1.3c-0.2-0.9-0.5-1.7-0.9-2.8c2.2,1.1,4.1,2.1,6,3c0.6,0.3,1.3,0.7,1.9,0.8c0.6,0.1,1.4,0.4,1.8-0.3
                c0.3-0.6-0.3-1.1-0.7-1.5C97.5,144.1,95.3,141.4,95.5,140.9z"
              />
              <path
                d="M75.9,17.3c-1.1,1.9-1.9,3.5-2.6,5.2c-0.2,0.4-0.2,1.2-0.9,0.8c-0.6-0.3-0.2-0.8,0-1.2c1.1-2.7,2.5-5.2,4-7.7
                c0.2-0.3,0.3-0.8,0.9-0.5c0.7,0.4,0.2,0.8,0,1.1c-0.5,0.7-0.4,1.3-0.3,2.1c0.7,3.2,1.1,6.5,0.3,9.8c-0.1,0.3-0.1,0.7-0.3,1
                c-0.2,0.4-0.1,1.2-0.9,0.8c-0.7-0.3-0.2-0.7-0.1-1.1C77.1,24.3,76.7,21,75.9,17.3z"
              />
              <path
                d="M9.9,131.5c0.4,0.3,0.8,0.6,1.1,0.9c3.5,3.2,5.3,7.3,6.5,11.7c0.2,0.7,0.3,1.5,0.5,2.2c0.1,0.4,0.1,0.7-0.4,0.8
                c-0.5,0.1-0.6-0.2-0.7-0.6c-0.3-1.8-0.9-3.5-1.5-5.2c-1.2-3.3-3-6.2-5.7-8.5c-0.3-0.2-0.6-0.4-0.4-0.8
                C9.6,131.8,9.7,131.7,9.9,131.5z"
              />
              <path
                d="M54.8,14.6c-0.3,2.1-0.3,3.8-0.1,5.5c0.1,0.4,0.3,1-0.4,1.1c-0.7,0.1-0.6-0.6-0.6-1c-0.2-2-0.2-4,0-6
                c0.1-0.8,0.3-1.6-0.1-2.3c-0.2-0.4-0.1-0.7,0.3-0.8c0.5-0.2,0.6,0.2,0.7,0.5c1.1,2.6,2.3,5.1,3.4,7.7c0.2,0.4,0.4,0.7-0.2,1
                c-0.6,0.3-0.6-0.3-0.8-0.6C56.3,18.1,55.6,16.6,54.8,14.6z"
              />
              <path
                d="M70.5,143.5c-0.1,3.2-1,6.1-2.7,8.8c-0.2,0.3-0.3,1-1,0.6c-0.6-0.4-0.2-0.8,0.1-1.1c2-3.3,3-6.8,2.4-10.7
                c-0.1-0.4-0.1-0.8,0.5-0.9c0.5-0.1,0.5,0.4,0.6,0.7C70.4,141.7,70.4,142.6,70.5,143.5z"
              />
              <path
                d="M68,42.2c-0.1,0.3,0.3,1-0.4,1c-0.9,0.1-0.5-0.7-0.6-1.1c-0.4-2.9-1.6-5.2-4.6-6C62,36,61.5,36,61.7,35.4
                c0.2-0.5,0.6-0.3,0.9-0.2c2.4,0.6,4,2,4.8,4.3C67.8,40.3,67.9,41.2,68,42.2z"
              />
              <path
                d="M48.3,34.3c-1.8-0.1-3,0.7-3.9,2.2c-0.2,0.4-0.4,1.1-1.1,0.7c-0.6-0.4,0-0.8,0.1-1.1c1-1.9,2.6-2.9,4.8-2.7
                c0.4,0,1.2-0.2,1.1,0.6C49.3,34.7,48.7,34.3,48.3,34.3z"
              />
              <StyledAngryEye
                className="angry-eye"
                compareStatus={props.compareStatus}
              >
                <path
                  className="angry-left-eye"
                  d="M41.4,79.1c-4.1-0.2-7.8-1.5-10.3-5c-2.1-3-2.4-6.2-0.6-9.4c0.3-0.5,0.2-0.9,0-1.3c-0.1-0.2-0.3-0.5-0.4-0.7
                  c-0.1-0.3-0.2-0.6,0.1-0.8c0.3-0.2,0.5,0,0.7,0.2c2.7,1.7,5.3,3.5,8,5.1c3.2,1.8,6.5,3,10.1,3.5c0.7,0.1,1.4,0.1,2.1,0
                  c1,0,1.9,0.1,2.8,0.6c0.2,0.1,0.4,0.3,0.4,0.5c0,0.3-0.3,0.4-0.5,0.5c-0.5,0.1-1.1,0-1.6,0c-1.2-0.1-1.7,0.1-2,1.2
                  c-0.5,1.7-1.3,3.1-2.8,4.1C45.4,78.7,43.5,79.2,41.4,79.1z M36.1,67.9c-0.3,2.7-1.3,3.1-3.6,3.7c-0.1,0-0.3,0.1-0.4,0.1
                  c-0.7,0-0.7,0.4-0.4,0.9c0.1,0.1,0.2,0.3,0.3,0.4c3.1,4.7,10.1,6.1,14.8,2.8c1-0.7,1.8-1.6,2.1-2.9c0.2-0.6,0-0.9-0.7-1
                  c-3.9-0.6-7.6-2-11.1-3.7C36.8,68.1,36.5,67.8,36.1,67.9z"
                />
                <path
                  className="angry-right-eye"
                  d="M66.6,69.7c6.7-0.1,13.2-1,19.4-3.9c0.3-0.1,0.6-0.3,0.8,0c0.3,0.3,0.2,0.7-0.1,0.9c-0.3,0.4-0.3,0.7-0.1,1.1
                  c0.5,1.3,0.5,2.6,0.5,3.9c0,0.3-0.1,0.7-0.3,0.9c-2.9,3.4-6.4,6-10.9,6.8c-3.5,0.6-6.6-0.1-8.8-3.3c-0.1-0.2-0.2-0.4-0.4-0.5
                  c-1.2-1.1-1.4-2.5-1.5-3.9c0-0.6-0.3-0.8-0.8-0.9c-0.5-0.1-1.1-0.2-1.6-0.3c-0.2-0.1-0.5-0.3-0.4-0.6c0.1-0.4,0.4-0.2,0.6-0.2
                  C64.2,69.7,65.4,69.7,66.6,69.7z M74.5,77.8c1.5,0.1,3-0.3,4.5-0.9c2.1-0.8,4.1-1.9,5.7-3.5c1.3-1.3,1.7-3,1-4.6
                  c-0.4-0.9-0.9-1.1-1.8-0.7c-3.5,1.5-7.1,2.5-10.9,3c-0.8,0.1-0.9,0.4-0.6,1c0.7,1.7,0.2,3.1-1.2,4.3c-0.2,0.1-0.3,0.3-0.4,0.4
                  c-0.1,0.1-0.4,0.2-0.3,0.5c0.1,0.2,0.3,0.2,0.4,0.2C72.1,77.6,73.3,77.8,74.5,77.8z"
                />
              </StyledAngryEye>
              <StyledHappyEye
                className="happy-eye"
                compareStatus={props.compareStatus}
              >
                <path
                  className="happy-left-eye"
                  d="M78.3,41.6c-0.1,0.5-0.5,0.3-0.8,0.2c-3.8-1-5.8-0.1-7.7,3.5c-0.2,0.3-0.2,0.8-0.7,0.6c-0.3-0.1-0.2-0.5-0.2-0.8
                  c0.6-3.5,5.5-5.9,8.6-4.3C77.8,40.9,78.2,41.1,78.3,41.6z"
                />
                <path
                  className="happy-right-eye"
                  d="M87.3,36.1c0.9,0,1.8,0.2,2.7,0.5c0.4,0.2,0.6,0.4,0.5,0.8c-0.2,0.6-0.6,0.2-0.9,0.1c-3.2-1-4.3-0.5-6,2.3
                  c-0.2,0.3-0.3,0.8-0.7,0.6c-0.6-0.2-0.2-0.7-0.1-1C83.3,37.5,85.4,36.1,87.3,36.1z"
                />
              </StyledHappyEye>
            </g>
          </svg>
          <StyledNormalEye
            className="normal-eye"
            compareStatus={props.compareStatus}
          >
            <div className="normal-eye-left">
              <div className="normal-eyes">
                <div className="normal-eye-sclera">
                  <div className="normal-eye-iris"></div>
                </div>
              </div>
            </div>
            <div className="normal-eye-right">
              <div className="normal-eyes">
                <div className="normal-eye-sclera">
                  <div className="normal-eye-iris"></div>
                </div>
              </div>
            </div>
          </StyledNormalEye>
          <StyledAngryDiv
            className="angry-add"
            compareStatus={props.compareStatus}
          ></StyledAngryDiv>
          <StyledAngryMark1
            className="angry-mark"
            compareStatus={props.compareStatus}
          >
            <div className="angry-top"></div>
            <div className="angry-bottom"></div>
          </StyledAngryMark1>
          <StyledAngryMark2
            className="angry-mark angry-mark2"
            compareStatus={props.compareStatus}
          >
            <div className="angry-top2"></div>
            <div className="angry-bottom2"></div>
          </StyledAngryMark2>
          <StyledHappyHearts
            className="happy-hearts"
            compareStatus={props.compareStatus}
          >
            <div className="main-heart"></div>
            <div className="happy-heart happy-heart0"></div>
            <div className="happy-heart happy-heart1"></div>
            <div className="happy-heart happy-heart2"></div>
            <div className="happy-heart happy-heart3"></div>
            <div className="happy-heart happy-heart4"></div>
            <div className="happy-heart happy-heart5"></div>
            <div className="happy-heart happy-heart6"></div>
            <div className="happy-heart happy-heart7"></div>
          </StyledHappyHearts>
        </form>
      </div>
    </StyledMoominSection>
  );
};

export default ImgRender;