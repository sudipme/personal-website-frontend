import { useEffect, useState } from "react";
import "../../css/HighlightsRow.css";
import { ApiBaseUrl } from "../../config";
import LoadingAnimation from "../LoadingAnimation";
import RightArrowIcon from "../../assets/icons/right-arrow-icon.svg";

function UpdatesRow(props) {
  const listItemStyle = {
    margin: "5px 0 5px 50px",
    padding: "5px 0",
    cursor: "pointer",
    boxSize: "border-box",
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

function Highlights(props) {
  const [highlights, setHighlights] = useState(null);
  useEffect(() => {
    fetch(ApiBaseUrl + "highlights")
      .then((response) => response.json())
      .then((data) => setHighlights(data.highlights))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (highlights !== null) {
      props.componentLoaded();
    }
  }, [highlights]);

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

        {highlights === null ? (
          <LoadingAnimation />
        ) : (
          Object.keys(highlights).map((key) => {
            return (
              <UpdatesRow
                key={highlights[key].time_stamp}
                content={highlights[key].content}
                link={highlights[key].link}
              />
            );
          })
        )}
        <div id="expand-button-container"></div>
      </ul>
    </>
  );
}

export default Highlights;
