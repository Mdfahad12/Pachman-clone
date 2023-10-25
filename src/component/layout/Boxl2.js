import React from "react";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import "../../assets/Boxl2.css";
import img from '../../assets/server-storage.png'

const Boxl2 = ({ expand, box }) => {
  const data = [
    {
      icon: <MonetizationOnOutlinedIcon />,
      title: "COST",
      dollar: <AttachMoneyOutlinedIcon />,
      mainnumber: "24.0K",
      day: "/Day",
      rate: "Run Rate",
    },
    {
      icon: <TroubleshootOutlinedIcon fontSize="small"/>,
      title: "MONITORING",
      dollar: "",
      mainnumber: "3.4M",
      day: "Requests",
      rate: "Last 5 hours 30 minutes",
    },
    {
      icon: <WbCloudyOutlinedIcon/>,
      title: "INVENTORY",
      dollar: "",
      mainnumber: "6.5K",
      day: "current",
      rate: "instances",
    },
    {
      icon: <TimelapseOutlinedIcon/>,
      title: "UTILIZATION",
      dollar: "",
      mainnumber: "39",
      percentage: "%",
      day: "",
      rate: "Overall",
    },
    {
      icon: <VerifiedIcon />,
      title: "COMPLIANCE",
      dollar: "",
      mainnumber: "99.82",
      percentage: "%",
      day: "comilance",
      rate: "All Apps",
    },
    {
      icon: img,
      title: "STORAGE",
      dollar: "",
      mainnumber: "4.15",
      day: "",
      rate: "PB In Use",
    },
  ];

  const selectedData = data[box - 1] || {};
  const shouldRenderContent =
    (expand === 2 && box === 1) ||
    (expand === 1 && box === 2) ||
    (expand === 4 && box === 3) ||
    (expand === 3 && box === 4) ||
    (expand === 6 && box === 5) ||
    (expand === 5 && box === 6);

  return (
    <div>
      <div
        className={`main-content-2${shouldRenderContent ? " expanded" : ""}`}
      >
        <div className="top-content-2">
          <div className="title">{selectedData.title}</div>
        </div>

        {shouldRenderContent ? (
          <div className="bottom-content-2">
         
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Boxl2;
