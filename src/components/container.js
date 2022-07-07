import { useEffect, useState } from "react";
import Api from "../utils/api";
import TabPanel from "./tabPanel";
import "../sytle/container.scss";
import ContactCard from "./cantactCard";
import LoadingUi from "./loadingUi";
import SwitchTheme from "./switchTheme";

const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Container = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [char, setChar] = useState("");

  useEffect(() => {
    setTimeout(() => {
      Api()
        .then((item) => setState(item.results))
        .then((item) => setLoading(false));
    }, [900]);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <LoadingUi />
      ) : (
        <>
          <SwitchTheme />
          <TabPanel char={ALPHABET} changeTab={setChar} />
          <ContactCard char={char} items={state} />
        </>
      )}
    </div>
  );
};
export default Container;
