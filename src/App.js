import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MemberSave from "./member/MemberSave";
import Login from "./member/Login";
import MemberList from "./member/MemberList";
import MemberDetail from "./member/MemberDetail";
import BookUpload from "./book/BookUpload";
import BookDetail from "./book/BookDetail";
import BookList from "./book/BookList";

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

          <Route path="/bookUpload" exact={true} element={<BookUpload />} />
          <Route path="/bookList" exact={true} element={<BookList />} />
          <Route path="/bookDetail/:id" exact={true} element={<BookDetail />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
