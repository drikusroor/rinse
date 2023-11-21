import { StateCreator } from 'zustand'

// import { IPlaySession } from ''

interface IPlaySession {}

import { IRootState } from '.'

export interface IPlaySessionState {
  lastPlaySession: IPlaySession
  setLastPlaySession: (playSession: IPlaySession) => void
  clearLastPlaySession: () => void
}

const createPlaySessionSlice: StateCreator<
  IRootState,
  [],
  [],
  IPlaySessionState
> = (set, _x, _y) => ({
  lastPlaySession: null,
  setLastPlaySession: (playSession: IPlaySession) =>
    set(() => ({ lastPlaySession: playSession })),
  clearLastPlaySession: () => set(() => ({ lastPlaySession: null })),
})

export default createPlaySessionSlice
