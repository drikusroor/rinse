// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, routes } from '@redwoodjs/router'

import DashboardLayout from 'src/layouts/DashboardLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set private unauthenticated="login">
        <Set wrap={DashboardLayout} title="Play!">
          <Route path="/" page={PlayPage} name="playOverview" />
          <Route path="/play/decks/{id:Int}" page={PlayPage} name="playDeck" />
          <Route path="/play/study-set/{id:Int}" page={PlayPage} name="playStudySet" />
        </Set>
        <Set wrap={DashboardLayout} title="Study Sets" addNewButton={{ to: routes.newStudySet, label: 'New Study Set' }}>
          <Route path="/study-sets/new" page={StudySetNewStudySetPage} name="newStudySet" />
          <Route path="/study-sets/{id:Int}/edit" page={StudySetEditStudySetPage} name="editStudySet" />
          <Route path="/study-sets/{id:Int}" page={StudySetStudySetPage} name="studySet" />
          <Route path="/study-sets" page={StudySetStudySetsPage} name="studySets" />
        </Set>
        <Set wrap={DashboardLayout} title="StudySetDecks">
          <Route path="/study-set-decks/new" page={StudySetDeckNewStudySetDeckPage} name="newStudySetDeck" />
          <Route path="/study-set-decks/{id:Int}/edit" page={StudySetDeckEditStudySetDeckPage} name="editStudySetDeck" />
          <Route path="/study-set-decks/{id:Int}" page={StudySetDeckStudySetDeckPage} name="studySetDeck" />
          <Route path="/study-set-decks" page={StudySetDeckStudySetDecksPage} name="studySetDecks" />
        </Set>
        <Set wrap={DashboardLayout} title="Flashcards">
          <Route path="/flashcards/new" page={FlashcardNewFlashcardPage} name="newFlashcard" />
          <Route path="/flashcards/{id:Int}/edit" page={FlashcardEditFlashcardPage} name="editFlashcard" />
          <Route path="/flashcards/{id:Int}" page={FlashcardFlashcardPage} name="flashcard" />
          <Route path="/flashcards" page={FlashcardFlashcardsPage} name="flashcards" />
        </Set>
        <Set wrap={DashboardLayout} title="Decks" addNewButton={{ to: routes.newDeck, label: 'New Deck' }}>
          <Route path="/decks/new" page={DeckNewDeckPage} name="newDeck" />
          <Route path="/decks/{id:Int}/edit" page={DeckEditDeckPage} name="editDeck" />
          <Route path="/decks/{id:Int}" page={DeckDeckPage} name="deck" />
          <Route path="/decks" page={DeckDecksPage} name="decks" />
        </Set>
      </Set>
      <Set wrap={DashboardLayout}>
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
