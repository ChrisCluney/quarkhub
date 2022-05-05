import React from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { numberWithCommas } from '../Cryptocurrencies/Cryptocurrencies'
import { styled } from "@mui/material/styles";
import { LinearProgress, Typography } from '@mui/material'
import "./CoinPage.css"
import CoinInfo from './Coininfo'



export const CoinPage = () => {
    const { id } = useParams()
    const [coin, setCoin ] = useState()

    const fetchCoin = async () => {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

        setCoin(data);
    };


    console.log(coin)


    useEffect(() => {
        fetchCoin()
        .then((res) => {
            setCoin(res.data)
        }
        ).catch((err) => console.log(err))
    }, []);




    const useStyles = styled((theme) => ({
        container: {
          display: "flex",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        },
        sidebar: {
          width: "30%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 25,
          borderRight: "2px solid grey",
        },
        heading: {
          fontWeight: "bold",
          marginBottom: 20,
          fontFamily: "Montserrat",
        },
        description: {
          width: "100%",
          fontFamily: "Montserrat",
          padding: 25,
          paddingBottom: 15,
          paddingTop: 0,
          textAlign: "justify",
        },
        marketData: {
          alignSelf: "start",
          padding: 25,
          paddingTop: 10,
          width: "100%",
          [theme.breakpoints.down("md")]: {
            display: "flex",
            justifyContent: "space-around",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
          },
          [theme.breakpoints.down("xs")]: {
            alignItems: "start",
          },
        },
      }));
    
      const classes = useStyles();
    
      if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
    
      return (
        <div className={classes.container}>
          <div className={classes.sidebar}>
            <img
              src={coin?.image.large}
              alt={coin?.name}
              height="155"
              style={{ marginBottom: 20 }}
            />
            <Typography variant="h3" className={classes.heading}>
              {coin?.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.description}>
              {HTMLReactParser(coin?.description.en.split(". ")[0])}.
            </Typography>
            <div className={classes.marketData}>
              <span style={{ display: "flex" }}>
                <Typography variant="h5" className={classes.heading}>
                  Rank:
                </Typography>
                &nbsp; &nbsp;
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {numberWithCommas(coin?.market_cap_rank)}
                </Typography>
              </span>
    
              <span style={{ display: "flex" }}>
                <Typography variant="h5" className={classes.heading}>
                  Current Price:
                </Typography>
                &nbsp; &nbsp;
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {" "}
                  $ {numberWithCommas(coin?.market_data.current_price.usd)}
                </Typography>
              </span>
              <span style={{ display: "flex" }}>
                <Typography variant="h5" className={classes.heading}>
                  Market Cap:
                </Typography>
                &nbsp; &nbsp;
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {" "}
                  {numberWithCommas(
                    coin?.market_data.market_cap.usd
                      .toString()
                      .slice(0, -6)
                  )}
                  M
                </Typography>
              </span>
            </div>
          </div>
          <div className='coin__info__size'>
          <CoinInfo coin={coin} /></div>
        </div>
      );
    };
    