import GreenSideBar from "../components/GreenSideBar";
import Feed from "../components/Feed";
import "../assets/styles/showcase.css";
import Header from '../components/Header';
function GreenShowcase() {
  return (
    <>
    <Header></Header>
    
    
      <div className="showCaseContainer">

        <GreenSideBar />
        <Feed/>
      </div>
    </>
  );
}
export default GreenShowcase;
