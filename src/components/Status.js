import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import getData from '../utils/getData';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 480px){
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
`;
const Block = styled.div`
  background: #ddd;
  background: linear-gradient(to top, #e3e3e3, #efefef);
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  box-shadow: 4px 4px 12px rgba(0,0,0,.05),
                -4px -4px 12px rgba(255,255,255,.3),
                -4px -4px 12px rgba(255,255,255,.3) inset;

  @media screen and (max-width: 480px){
    padding: .5rem 1rem;
  }

  h3,h4,h5 {
    font-size: 1.125rem;
    font-weight: normal;
    margin: .5rem 0;
  }
  h3 {
    color: #333;
  }
  h4 {
    color: #333;
  }
  h5 {
    color: #333;
  }
  span {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.2;
  }
  h3, h4, h5 {
    span {
      font-size: 1.5rem;
    }
  }
  h3 + span {
    color: #FF7849;
  }
  h4 + span {
    color: #ae2b26;
  }
  h5 + span {
    color: #13CE66;
  }
`;

export default function Status({ url }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError();
      const newData = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      setData(newData);
      setLoading(false);
    }
    if (!data) {
      fetchData();
    }
  }, [url, data]);
  if (loading || error) return null;
  return (
    <Grid>
      <Block>
        <h3>Terkonfirmasi <span role="img" aria-label="sad">😔</span>:</h3>
        <span>{data.confirmed.value}</span>
      </Block>
      <Block>
        <h4>Meninggal <span role="img" aria-label="cry">😢</span>:</h4>
        <span>{data.deaths.value}</span>
      </Block>
      <Block>
        <h5>Sembuh <span role="img" aria-label="glad">🤗</span>:</h5>
        <span>{data.recovered.value}</span>
      </Block>
    </Grid>
  );
}