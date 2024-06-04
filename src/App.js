import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MemberSave from "./member/MemberSave";
import Login from "./member/Login";
import MemberList from "./member/MemberList";
import MemberDetail from "./member/MemberDetail";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/memberSave" exact={true} element={<MemberSave />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/memberList" exact={true} element={<MemberList />} />
          <Route path="/memberdetail/:id" exact={true} element={<MemberDetail />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
