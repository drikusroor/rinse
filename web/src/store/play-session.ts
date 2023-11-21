import { PlaySession as IPlaySession, PlaySession } from 'types/graphql'
import { StateCreator } from 'zustand'

import { IRootState } from '.'

export interface IPlaySessionState {
  playSession: IPlaySession | Partial<IPlaySession> | null
  setPlaySession: (playSession: IPlaySession | Partial<IPlaySession>) => void
  clearPlaySession: () => void
}

const createPlaySessionSlice: StateCreator<
  IRootState,
  [],
  [],
  IPlaySessionState
> = (set, _x, _y) => ({
  playSession: null,
  setPlaySession: (playSession: PlaySession | Partial<IPlaySession>) =>
    set(() => ({ playSession })),
  clearPlaySession: () => set(() => ({ playSession: null })),
})

export default createPlaySessionSlice
