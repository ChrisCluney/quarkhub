import React, {useEffect, useState } from 'react'
import axios from 'axios'

import { styled } from '@mui/material'
import { Pagination } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Container,
  ThemeProvider,
  TableCell,
  LinearProgress,
  createTheme,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from '@mui/material'
import { useNavigate } from 'react-router'
import { useUserAuth } from '../../context/UserAuthContext'
import { useContext } from 'react'
import { doc, setDoc} from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../firebase';
import { Link } from 'react-router-dom';
import BasicAlerts from '../../config/MuiAlert';
import "./Cryptocurrencies.css"


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default function Cryptocurrencies() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const {user} = useUserAuth()
  // console.log(user.uid)

  const useStyles = styled({
    row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Inter",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "gold",
      },
    },
  });

  const classes = useStyles();
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#5dd1ff",
      },
      type: "dark",
    },
  });


  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`);
    

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };




console.log(BasicAlerts())


  const handleFavorite = async (user, currency, image) =>{
   
  //   await setDoc(doc(db, "Favorites"), {
  //     uid: user,
  //     currency: currency
  //   });
  // }
   alert(`${currency} has been added to your favorites`)
    
  try {
    const docRef = await addDoc(collection(db, `${user}`), {
      
      currency: currency,
      image: image
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
      




  }

 



  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}
                  className="list__currency">
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Inter" }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "#0e0246" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "#0e0246" }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap", "Favorite"].map((head) => (
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontFamily: "Inter",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => navigate.push(`/coins/${row.id}`)}
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          
                          
                          <Link to={`../coins/${row.id}`}>
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                            className="coin__thumb"
                          /></Link>

                          <Link 
                          style={{textDecoration: 'none'}}
                          to={`../coins/${row.id}`}>
                          <div
                          
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span 
                              className='coin__link'
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span 
                            className='coin__link'
                            style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </div></Link>


                        </TableCell>

                        
                        <TableCell align="right">
                          {" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                        <TableCell align="right">
                        <StarBorderIcon
                            
                            
                            height="50"
                            style={{ marginBottom: 10, cursor:"pointer" }}
                            onClick={() => handleFavorite(user.uid, row.id, row.image)}
                            
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer> 

         {/* Comes from @material-ui/lab */}
        <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
















// useEffect(() => {
//   const getList = async () => {
//     const querySnapshot = await getDocs(collection(db, "Favorites"));
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     }); 




//   }

  
  

//   getList()

// }, [])

