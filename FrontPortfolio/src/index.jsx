
import Header from "./componants/Header.jsx";
import HeroBlock from "./pages/HeroBlock.jsx";
import HeroAbout from "./pages/HeroAbout.jsx";
import HeroFooter from "./pages/HeroFooter.jsx";

function Router() {
  return (
    <>
    <Header style={{height:'500px'}}/>
    <HeroBlock/>
    <HeroAbout />
    <HeroFooter/>
    </>
  );
}

export default Router;