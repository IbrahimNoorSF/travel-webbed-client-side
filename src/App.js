import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AboutUs from './pages/AboutUs/AboutUs';
import AddServices from './pages/AddServices/AddServices';
import AllBookings from './pages/AllBookings/AllBookings';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import MyBookings from './pages/MyBookings/MyBookings';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Services from './pages/ServicesPage/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import NavBar from './pages/Shared/Navbar/NavBar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute path="/contact">
            <ContactUs></ContactUs>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/add-new-service">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/my-bookings">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path="/manage-all-bookings">
            <AllBookings></AllBookings>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;