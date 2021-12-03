import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./components/Home";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import CreateProduct from "./components/CreateProduct";
import "./app.css";
// import { fetchUser } from "../../redux/currentUser";
// import { googleTagEvent } from "../../helpers";

const gaTrackingId = "UA-999999999-1";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchUser())
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route path="/products/new" element={<CreateProduct />} />
            <Route
              exact
              path="/products/:productId"
              element={<ProductDetails />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// class App extends Component {
//   componentDidMount() {
//     this.props.fetchUser();
//     if (this.props.user) {
//       this.setGoogleAnalytics();
//     }
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.user !== prevProps.user) {
//       this.setGoogleAnalytics();
//     }
//   }

//   setGoogleAnalytics = () => {
//     googleTagEvent('config', gaTrackingId, {
//       'user_id': this.props.user?._id
//     });
//   };

//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Header />
//           <ErrorBoundary>
//             <div className="content main">
//               <Route exact path="/" component={Landing} />
//               <Route exact path="/instructor-signup" component={InstructorSignup} />
//               <Route exact path="/instructor-success" component={InstructorSuccess} />
//               <Route exact path="/become-an-instructor">
//                 <Redirect to="/instructors" />
//               </Route>
//               <Route exact path="/instructors" component={InstructorLeads} />
//               <Route exact path="/oauth" component={ModalLogin} />
//               <Route exact path="/courses" component={CourseList} />
//               <Switch>
//                 <Route path="/courses/new" component={ModalCreate} />
//                 <Route exact path="/courses/:titleUrl" component={CourseDetail} />
//               </Switch>
//               <Route exact path="/courses/:titleUrl/videos/:videoUrl" component={VideoPlayer} />
//               <Route exact path="/courses/:titleUrl/alert" component={ModalVideoAlert} />
//               <Route exact path="/courses/:titleUrl/edit" component={CourseEditor} />
//               <Route exact path="/courses/:titleUrl/review" component={ModalReview} />
//               <Route exact path="/guidelines-and-faqs" component={Guidelines} />
//               <Route exact path="/my_courses" component={MyCourses} />
//               <Route exact path="/goodbye" component={Logout} />
//               <Route exact path="/about" component={About} />
//               <Route exact path="/contact" component={Contact} />
//               <Route exact path="/admin" component={Admin} />
//               <Route exact path="/terms-of-service" component={TermsOfService} />
//               <Route exact path="/privacy-policy" component={PrivacyPolicy} />
//               <Route exact path="/sentry" component={SentryException} />
//               <Route exact path="/users/:_userId" component={UserProfile} />
//               {/* <Route exact path="/users/:_userId/edit" component={UserProfileEditor} /> */}
//             </div>
//           </ErrorBoundary>
//           <Footer />
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// const mapStateToProps = ({ user }) => {
//   return { user }
// };

// export default connect(mapStateToProps, { fetchUser })(App);

// NOTE: this file, App.js, is the rendering layer (i.e. react-router)
// index.js provides provides data layer control (i.e. redux)
