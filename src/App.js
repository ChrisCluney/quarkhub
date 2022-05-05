import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Components/LoginLogout/Signup";
import Login from "./Components/LoginLogout/Login";
import { Container, Row, Col } from "react-bootstrap";
import ProtectedRoute from "./Components/LoginLogout/ProtectedRoute";
import { Main } from "./Components/Main/Main";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/main/*"
                element={
                  <ProtectedRoute>
                    <Main />
                  </ProtectedRoute>
                }
              />

              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

{
  /* <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router> */
}
