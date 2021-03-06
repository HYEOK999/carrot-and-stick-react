// Callback.js
import React, { useEffect } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import qs from 'qs';
import styled from 'styled-components';

const StyledCallback = styled.div`
  width: 1200px;
  margin: 3vh auto;
  padding: 30px 80px;
  background-color: rgba(241, 241, 241, 0.7);
  border-radius: 15px;
  text-align: center;
`;

function Callback({ history, location }) {
  useEffect(() => {
    async function getToken() {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        // 이 부분은 express에 요청하여 JWT 토큰을 발급한다.
        const { data } = await axios.post(`http://localhost:3001/api/auth`, {
          code,
        });

        // 유저 JWT 토큰을 해제한다.
        // const { token } = jwt.verify(
        //   data.access_token,
        //   process.env.REACT_APP_TOKEN_KEY,
        // );
        const { token } = jwt.verify(data.access_token, 'HongBeenPark');
        // 유저 JWT 토큰 저장한다.
        localStorage.setItem('access_token', token);
        history.push('/'); // 로그인이 완료되면 보여줄 페이지
      } catch (error) {
        history.push('/error'); // api요청이 실패했을때 애러 핸들링 페이지
      }
    }

    getToken();
  }, [location, history]);
  return (
    <StyledCallback>
      <p
        style={{
          fontSize: '60px',
          margin: '20px 10px',
          opacity: '0.8',
        }}
      >
        Loading...
      </p>
      <img src="/images/moominloading.gif" alt="로딩중" />
    </StyledCallback>
  ); // 이 부분에 로딩바와 같은 페이지를 렌더링 해도 좋아요.
}

export default Callback;
