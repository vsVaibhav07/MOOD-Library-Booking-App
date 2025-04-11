import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "../css/Sidebar.module.css";
import Documents from "./sidebar-links/Documents/Documents";
import Overview from "./sidebar-links/Overview";
import Profile from "./sidebar-links/Profile";
import Reviews from "./sidebar-links/Reviews";
import { DocumentIcon, OverviewIcon, PhotoIcon, ProfileIcon, ProfilePic, ReviewsIcon } from "./svgs/index";

function SubmitDetail() {
    const { view } = useParams(); 

  const [Sidebar, setSidebar] = useState([
    {
id  :uuidv4(),
      buttonIcon: <ProfileIcon />,
      buttonName: "PROFILE",
      component: <Profile />,
    },
    {
      id  :uuidv4(),
      buttonIcon: <OverviewIcon/>,
      buttonName: "OVERVIEW",
      component: <Overview/> ,
    },
    {
      id  :uuidv4(),
      buttonIcon: <PhotoIcon/>,
      buttonName: "PHOTOS",
    },
    {
      id  :uuidv4(),
      buttonIcon: <ReviewsIcon/>,
      buttonName: "REVIEWS",
      component: <Reviews/>,
    },
    {
      id  :uuidv4(),
      buttonIcon: <DocumentIcon/>,
      buttonName: "Documents",
      component: <Documents/>,
    },
  ]);

  const [activeComponent, setActiveComponent] = useState(Sidebar[0].id);// State to track the active component

  const renderComponent = () => {
    const activeOption = Sidebar.find((option) => option.id === activeComponent);
    return activeOption ? activeOption.component : null;
  };

  return (
    <>
    <div className={styles.WholeComponent}>
      <div className={styles.allOptions}>
        {/* profile pic and name starts here  */}
        <div className={styles.profilePicNname}>
          {/* profilepic section starts */}
          <div className={styles.profilePic}>
            <ProfilePic />
          </div>
          {/* profile i.e user name starts */}
          <div className={styles.UserName}>
            <p className={styles.hello}>Hello</p>
            <p className={styles.name}>Rakesh Pal</p>
          </div>
        </div>
        {/* profile pic and name ends here  */}

        {/* dashboard options starts from here */}
        <div className={styles.Sidebar}>
          <div className={styles.innerDashboardDiv}>
            {Sidebar.map((item) => (
              <button
              key={item.id}
               className={`${styles.profile} ${styles.btns} ${activeComponent === item.id ? "bg-blue-100": ""}`}
              onClick={() => setActiveComponent(item.id)} >
                {item.buttonIcon}
                <span>{item.buttonName}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

       
        <div className="h-full p-16" >
          {renderComponent()}
      </div>
  </div>
    </>
  );
}

export default SubmitDetail;
