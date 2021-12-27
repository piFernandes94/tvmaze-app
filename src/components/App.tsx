import React, { useEffect } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import GetDataFunctions from '../scripts/GetDataFunctions';
import { Provider, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { updateShowInfo } from '../state/reducers/infoReducer';
import { updateEpisodeList } from '../state/reducers/episodesReducer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import EpisodeArea from './EpisodeArea';

const App = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    GetDataFunctions.fetchShowInfo.then((response) => {dispatch(updateShowInfo(response));});
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/episodes" element={<EpisodeArea />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
