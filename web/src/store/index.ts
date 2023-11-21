import { create } from 'zustand'

import createPlaySessionSlice, { IPlaySessionState } from './play-session'

export type IRootState = IPlaySessionState

export const useBoundStore = create<IRootState>((...a) => ({
  ...createPlaySessionSlice(...a),
}))
