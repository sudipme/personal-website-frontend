import { useEffect, useState } from "react";
import "../../css/Updates.css";
import { ApiBaseUrl } from "../../config";
import LoadingAnimation from "../LoadingAnimation";
import RightArrowIcon from "../../assets/icons/right-arrow-icon.svg";

function UpdatesRow(props) {
  const listItemStyle = {
    margin: "5px 0 5px 50px",
    padding: "5px 0",
    cursor: "pointer",
    boxSize: "border-box",
    fontSize: "18px",
  };

  return (
    <li
      id="list-item"
      style={listItemStyle}
      onClick={() => window.open(props.link, "_blank")}
    >
      {props.content}
    </li>
  );
}

function Updates(props) {
  const [updates, setUpdates] = useState(null);
  useEffect(() => {
    fetch(ApiBaseUrl + "highlights")
      .then((response) => response.json())
      .then((data) => setUpdates(data.highlights))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (updates !== null) {
      props.componentLoaded();
    }
  }, [updates]);

  const updatesContainerStyle = {
    padding: "0 0 10px 0",
  };
  const headingContainerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };
  const headingStyle = {
    fontSize: "24px",
    color: "#888",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };
  const rightArrowIconStyle = {
    fontSize: "28px",
    fontWeight: "400",
    width: "20px",
  };

  return (
    <>
      <ul id="updates-container" style={updatesContainerStyle}>
        <div
          style={headingContainerStyle}
          onClick={() => window.open("/updates", "_blank")}
        >
          <h1 style={headingStyle}>Updates &nbsp;</h1>
          <img
            src={RightArrowIcon}
            style={rightArrowIconStyle}
            alt="expand button"
          ></img>
        </div>

        {updates === null ? (
          <LoadingAnimation />
        ) : (
          Object.keys(updates).map((key) => {
            return (
              <UpdatesRow
                key={updates[key].time_stamp}
                content={updates[key].content}
                link={updates[key].link}
              />
            );
          })
        )}
        <div id="expand-button-container"></div>
      </ul>
    </>
  );
}

export default Updates;
