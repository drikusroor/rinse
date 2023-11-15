import type { Prisma, StudySet } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StudySetCreateArgs>({
  studySet: {
    one: {
      data: {
        deckId: 2809694,
        name: 'String',
        updatedAt: '2023-11-05T20:51:32.616Z',
      },
    },
    two: {
      data: {
        deckId: 5257101,
        name: 'String',
        updatedAt: '2023-11-05T20:51:32.616Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<StudySet, 'studySet'>
