import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

import './App.scss';

import Header from '../../shared/components/Header/Header';
import ProfileList from '../Profile/List';
import ProfileForm from '../Profile/Form';

const App = ({ history }) => {
  return (
    <>
      <Header />
      <main>
        <Router history={history}>
          <Routes>
            <Route path="/profile/list" element={<ProfileList />} exact />
            <Route path="/profile/new" element={<ProfileForm />} exact />
            <Route path="/profile/edit/:id" element={<ProfileForm />} exact />
            <Route path="*" element={<Navigate to="/profile/list" />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
