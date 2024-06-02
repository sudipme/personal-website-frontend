import { useEffect, useState } from "react";
import "../../css/Updates.css";
import { ApiBaseUrl } from "../../config";

function UpdatesRow(props) {
  const listItemStyle = {
    width: "100%",
    fontSize: "18px",
    color: "rgb(41, 151, 255)",
    cursor: "pointer",
    textDecoration: "underline",
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

  const listStyle = {
    minWidth: "300px",
    padding: "0px",
    backgroundColor: "#000",
    listStyleType: "none",
    textAlign: "center",
  };
  const listTitleWrapperStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };
  const listTitleStyle = {
    fontSize: "24px",
    color: "#f5f5f7",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };

  return (
    <>
      <ul id="updates-list" style={listStyle}>
        <div
          style={listTitleWrapperStyle}
          onClick={() => (window.location.href = "/updates")}
        >
          <h1 style={listTitleStyle}>Updates</h1>
        </div>

        {updates != null &&
          Object.keys(updates).map((key) => {
            return (
              <UpdatesRow
                key={updates[key].time_stamp}
                content={updates[key].content}
                link={updates[key].link}
              />
            );
          })}
        <div id="expand-button-container"></div>
      </ul>
    </>
  );
}

export default Updates;
