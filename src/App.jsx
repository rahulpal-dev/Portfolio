import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Header = lazy(() => import("./components/Header"));
const Page1 = lazy(() => import("./pages/Page1"));
const Page2 = lazy(() => import("./pages/Page2"));
const Page3 = lazy(() => import("./pages/Page3"));
const Page4 = lazy(() => import("./pages/Page4"));
const Page5 = lazy(() => import("./pages/Page5"));
const Page6 = lazy(() => import("./pages/Page6"));
const Page7 = lazy(() => import("./pages/Page7"));
const Page8 = lazy(() => import("./pages/Page8"));
const Page9 = lazy(() => import("./pages/Page9"));
const Page10 = lazy(() => import("./pages/Page10"));
const Page11 = lazy(() => import("./pages/Page11"));
const Page12 = lazy(() => import("./pages/Page12"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div id="main">
        <Header />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Page12 />
      </div>
    </Suspense>
  );
};

export default App;
