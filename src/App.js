import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import {
  FlashCard,
  Group,
  Home,
  VideoCall,
  Forum,
  Error,
  JoinTeam,
  CreateTeam,
  Register,
  ReadMore,
  Login,
} from "./pages";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import GroupSelectionPage from "./pages/GroupSelectionPage";
import AddCard from "./pages/AddCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<SharedLayout />>
          <Route index element=<Home />></Route>
          <Route path="/flash-cards" element=<FlashCard /> />
          <Route path="/add-card" element=<AddCard /> />
          <Route path="/forum" element=<Forum /> />
          <Route path="/group" element=<GroupSelectionPage /> />
          <Route path="/join-team" element=<JoinTeam /> />
          <Route path="/create-team" element=<CreateTeam /> />
          <Route path="/meeting" element=<VideoCall /> />
          <Route path="/register" element=<Register /> />
          <Route path="/login" element=<Login /> />
          <Route path="/readmore" element=<ReadMore /> />
          <Route path="*" element=<Error /> />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
