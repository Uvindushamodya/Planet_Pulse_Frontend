import "../assets/styles/greensidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../assets/dummy/dummyData";
import CloseFriend from "../components/CloseFriend";

export default function GreenSideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <a href="/blogs" ><li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Blogs</span>
          </li></a>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Donations</span>
          </li>
          {/* <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li> */}
          <a href="/projectDash" ><li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li></a>
          {/* <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li> */}
        </ul>
        <button className="sidebarButton">Show More</button>
        <a href="/dashboard"><button className="sidebarButton">Back</button></a>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">         
            <CloseFriend />
        </ul>
      </div>
    </div>
  );
}
