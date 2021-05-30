import React from "react";
import calltoaction from "../scss/telegramexpo1-01.png";

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${calltoaction})` }}>
      <p className="introducing">Introducing FreeMinder for Telegram</p>
    </div>
  );
};

export default Header;
