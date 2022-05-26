import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createUploadLink } from "apollo-upload-client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Store from "./pages/Store";
import LogIn from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";

const uploadLink = createUploadLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='bg-blue-50 min-h-screen flex flex-col justify-between'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/store/product/:id' element={<ProductDetails />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
