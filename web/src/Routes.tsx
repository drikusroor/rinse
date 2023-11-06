// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import DashboardLayout from 'src/layouts/DashboardLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={DashboardLayout} title="Study Sets" titleTo="studySets" buttonLabel="New StudySet" buttonTo="newStudySet">
        <Route path="/study-sets/new" page={StudySetNewStudySetPage} name="newStudySet" />
        <Route path="/study-sets/{id:Int}/edit" page={StudySetEditStudySetPage} name="editStudySet" />
        <Route path="/study-sets/{id:Int}" page={StudySetStudySetPage} name="studySet" />
        <Route path="/study-sets" page={StudySetStudySetsPage} name="studySets" />
      </Set>
      <Set wrap={DashboardLayout} title="StudySetDecks" titleTo="studySetDecks" buttonLabel="New StudySetDeck" buttonTo="newStudySetDeck">
        <Route path="/study-set-decks/new" page={StudySetDeckNewStudySetDeckPage} name="newStudySetDeck" />
        <Route path="/study-set-decks/{id:Int}/edit" page={StudySetDeckEditStudySetDeckPage} name="editStudySetDeck" />
        <Route path="/study-set-decks/{id:Int}" page={StudySetDeckStudySetDeckPage} name="studySetDeck" />
        <Route path="/study-set-decks" page={StudySetDeckStudySetDecksPage} name="studySetDecks" />
      </Set>
      <Set wrap={DashboardLayout} title="Flashcards" titleTo="flashcards" buttonLabel="New Flashcard" buttonTo="newFlashcard">
        <Route path="/flashcards/new" page={FlashcardNewFlashcardPage} name="newFlashcard" />
        <Route path="/flashcards/{id:Int}/edit" page={FlashcardEditFlashcardPage} name="editFlashcard" />
        <Route path="/flashcards/{id:Int}" page={FlashcardFlashcardPage} name="flashcard" />
        <Route path="/flashcards" page={FlashcardFlashcardsPage} name="flashcards" />
      </Set>
      <Set wrap={DashboardLayout} title="Decks" titleTo="decks" buttonLabel="New Deck" buttonTo="newDeck">
        <Route path="/decks/new" page={DeckNewDeckPage} name="newDeck" />
        <Route path="/decks/{id:Int}/edit" page={DeckEditDeckPage} name="editDeck" />
        <Route path="/decks/{id:Int}" page={DeckDeckPage} name="deck" />
        <Route path="/decks" page={DeckDecksPage} name="decks" />
      </Set>
      <Route path="/home" page={HomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
