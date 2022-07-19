import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Status from '../components/Status';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: "Open Sans", "PT Sans", "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
  }
  body {
    min-height: 100%;
    font-size: 16px;
    line-height: 1.5;
    background: #ddd;
  }
  @keyframes blink {
    0% {
      transform: scale(1);
      opacity: .5;
    }
    50% {
      transform: scale(1.05);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: .5;
    }
  }
`;
const Layout = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
const Header = styled.header`
  position: relative;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  .logo {
    transform-origin: 50% 50%;
    animation: blink 3.6s infinite alternate ease-out;
    background: #ddd;
    font-size: 1rem;
    text-align: center;
    width: 120px;
    height: 120px;
    overflow: hidden;
    line-height: 120px;
    border-radius: 30rem;
    border: 8px solid #ae2b26;
    color: #ae2b26;
    font-weight: bold;
    box-shadow: 4px 4px 12px rgba(0,0,0,.2),
                -4px -4px 12px rgba(255,255,255,1),
                -4px -4px 12px rgba(255,255,255,1) inset,
                4px 4px 12px rgba(0,0,0,.2) inset;
  }
`;
const Content = styled.section`
  position: relative;
  padding: 1.5rem 0;
`;
const Footer = styled.footer`
  position: relative;
  text-align: center;
  padding: 1rem 0;
  .copyright {
    font-size: 14px;
    color: #888;
    text-shadow: 1px 1px 1px rgba(0,0,0,.05);
    a {
      color: #ae2b26;
      opacity: .6;
    }
  }
`;
const Intro = styled.div`
  position: relative;
  padding: 1rem 2rem;
  text-shadow: 1px 1px 1px rgba(0,0,0,.05);
  color: #888;
  background: #ddd;
  background: linear-gradient(to top, #e3e3e3, #efefef);
  box-shadow: 4px 4px 12px rgba(0,0,0,.05),
                -4px -4px 12px rgba(255,255,255,.1),
                -4px -4px 12px rgba(255,255,255,.1) inset;
  margin-bottom: 2rem;
  border-radius: 30px;
  h2 {
    font-weight: normal;
    color: #333;
  }
  @media screen and (max-width: 480px){
    display: none;
  }
`;

export default function Home() {
  return (
    <Layout>
      <GlobalStyle />
      <Header>
        <div className="logo">COVID-19</div>
      </Header>
      <Content>
        <Intro>
          <h2>Update informasi seputar COVID-19 di Indonesia</h2>
          <p>Menyikapi kasus pandemik virus COVID-19 yang makin meluas, kami menyediakan media informasi yang cukup tepat dan cukup akurat untuk menjadi panduan kita semua.</p>
          <p>Data yang disajikan tidaklah akurat 100%, sehingga jika terdapat kesalahan mohon di maklumi.</p>
          <p>Tetap jaga kesahatan, jaga jarak sekitar, selalu memakai masker ketika sedang berkegiatan</p>
        </Intro>
        <Status url="https://covid19.mathdro.id/api/countries/id" />
      </Content>
      <Footer>
        <div className="copyright"><a href="https://link.georgemiracle.repl.co/" target="_blank" rel="noreferrer noopener">George Miracle</a> using <a href="https://github.com/mathdroid/covid19" target="_blank" rel="noreferrer noopener">Covid19 API</a></div>
      </Footer>
    </Layout>
  );
}