import { configureStore } from '@reduxjs/toolkit'
import episodesReducer from './reducers/episodesReducer'
import infoReducer from './reducers/infoReducer'

export const store = configureStore({
  reducer: {
    showInfo: infoReducer,
    episodes: episodesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch