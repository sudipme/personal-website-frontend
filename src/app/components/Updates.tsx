import React, { CSSProperties } from 'react';
import Link from 'next/link';

import "@styles/Updates.css";
import { ApiBaseUrl } from "@utils/config";

interface UpdatesRowProps {
  content: string;
  link: string;
}

const UpdatesRow: React.FC<UpdatesRowProps> = ({ content, link }) => {
  const listItemStyle: CSSProperties = {
    width: "100%",
    padding: "10px",
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "var(--font-raleway)",
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    boxSizing: "border-box",
  };

  return (
    <Link href={link}>
    <li
      id="list-item"
      style={listItemStyle}
    >
      {content}
    </li>
    </Link>
  );
}

interface Update {
  time_stamp: string;
  content: string;
  link: string;
}

async function getUpdates(): Promise<Update[]> {
  try {
    const response = await fetch(ApiBaseUrl + "highlights");
    if (!response.ok) {
      throw new Error("Error fetching updates data");
    }

    const data = await response.json();
    return data.highlights;
  } catch (error) {
    console.error("Error fetching updates data:", error);
    throw error;
  }
  
}

const Updates: React.FC = async () => {
  const updates = await getUpdates();

  const listStyle: CSSProperties = {
    minWidth: "300px",
    padding: "0px",
    listStyleType: "none",
    textAlign: "center",
  };
  const listTitleWrapperStyle: CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };
  const listTitleStyle: CSSProperties = {
    fontSize: "28px",
    color: "#f5f5f7",
    fontFamily: "var(--font-raleway)",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <>
      <ul id="updates-list" style={listStyle}>
        <Link href="/updates">
        <div
          style={listTitleWrapperStyle}
        >
          <h1 style={listTitleStyle}>Updates</h1>
        </div>
        </Link>

        {updates != null &&
          updates.map((update) => {
            return (
              <UpdatesRow
                key={update.time_stamp}
                content={update.content}
                link={update.link}
              />
            );
          })}
        <div id="expand-button-container"></div>
      </ul>
    </>
  );
}

export default Updates;
