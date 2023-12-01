import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MainPage from './pages/MainPage'
import Group from './pages/Group/board/Group'
import GroupAdd from './pages/Group/board/GroupAdd';
import GroupNotice from './pages/Group/board/GroupNotice'
import GroupNoticeDetail from './pages/Group/board/GroupNoticeDetail';

import Profile from './pages/Proifle/Profile';
import { GlobalStyle } from './styles/global';
import SideBar from './components/SideBar/SideBar';
import Reservation from './pages/Reservation/Reservation';
import ReservationDetail from './pages/Reservation/ReservationDetail';


export default function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>

        <Route path='/login' element = {<Login/>} />
        <Route path='/signUp' element = {<SignUp/>} />
        <Route path='/' element = {<SideBar content={<MainPage/>}/>} />

        {/* profile */}
        <Route path='/profile' element = {<SideBar content={<Profile/>}/>} />

        {/* group */}
        <Route path='/group' element = {<SideBar content={<Group />} />} />

        <Route path='/group/notice' element = {<SideBar content={<GroupNotice />} />} />
        <Route path='/group/notice/detail/:id' element = {<SideBar content={<GroupNoticeDetail />} />} />
        {/* <Route path='/group/vote/' element = {<GroupVote />} />
        <Route path='/group/vote/detail/*' element = {<GroupVoteDetail />} /> */}

        {/* ㄱreservation */}
        <Route path='/reservation' element = {<SideBar content={<Reservation />} />} />
        <Route path='/reservation/detail/:id' element = {<SideBar content={<ReservationDetail />} />} />
      

      </Routes>
    </div>
  )}