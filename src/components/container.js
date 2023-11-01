import { useState } from "react";
import TabPanel from "./tabPanel";
import "../sytle/container.scss";
import ContactCard from "./cantactCard";
import LoadingUi from "./loadingUi";
import SwitchTheme from "./switchTheme";
import useDataFetching from "../hooks/useDataFetching";

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

  const [char, setChar] = useState("a");
  const { data, loading } = useDataFetching("https://randomuser.me/api/?results=100&seed=abc")


  return (
    <div className="container">
      {loading ? (
        <LoadingUi />
      ) : (
        <>
          <SwitchTheme />
          <TabPanel activeCar={char} items={data.results} char={ALPHABET} changeTab={setChar} />
          <ContactCard char={char} items={data.results} />
        </>
      )}
    </div>
  );
};
export default Container;
