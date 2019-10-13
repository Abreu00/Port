import React, { useState } from "react";
import pt from "./assets/translations/pt";
import en from "./assets/translations/en";

export const Context = React.createContext();

export const Provider = props => {
  const [lang, setLang] = useState("en");

  function handleLangChange(lang) {
    console.log("oi");
    setLang(lang);
  }

  return (
    <Context.Provider
      value={{
        translation: lang === "pt" ? pt : en,
        changeLang: handleLangChange
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
