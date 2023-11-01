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
<<<<<<< HEAD
=======
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [char, setChar] = useState("a");
>>>>>>> 9e0a57e93ecf6e3aa84b4764d1cc90882245479a

  const [char, setChar] = useState("");
  const { data, loading } = useDataFetching("https://randomuser.me/api/?results=100&seed=abc")


  return (
    <div className="container">
      {loading ? (
        <LoadingUi />
      ) : (
        <>
          <SwitchTheme />
<<<<<<< HEAD
          <TabPanel char={ALPHABET} changeTab={setChar} />
          <ContactCard char={char} items={data.results} />
=======
          <TabPanel char={ALPHABET} activeCar={char} changeTab={setChar} items={state}/>
          <ContactCard char={char} items={state} />
>>>>>>> 9e0a57e93ecf6e3aa84b4764d1cc90882245479a
        </>
      )}
    </div>
  );
};
export default Container;
