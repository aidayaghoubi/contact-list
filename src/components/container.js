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
  const [showText, setShowText] = useState(false)
  const [char, setChar] = useState("a");
  const { data, loading } = useDataFetching("https://randomuser.me/api/?results=100&seed=abc")


  return (
    <div className="container">
      {/* {loading ? (
        <LoadingUi />
      ) : ( */}
      <>
        {/* <SwitchTheme /> */}
        {!showText ?
          <div className="ButtonWrapper">
            <button onClick={() => setShowText(true)}>click here if you want to see</button>
          </div>
          :
          <div className="text">
            <p>سلام عزیزم</p>
            <p>دوست داشتم یکم متفاوت تر حرفای دلم رو برات بزنم</p>
            <p>یکمم اداییش کنم :)</p>
            <p>راستشو بخوای خیلی روزا هست ک احساس میکنم خیلی زیاد دوست دارم و بعضی روزها هست  که احساس میکنم کمتر دوست دارم
              اما نکته مهم اینه ک همیشه دوست دارم فقط مقدارش هست ک کم و زیاد میشه
              تو این سه سال خیلی اتفاق های خوب و بد افتاد خیلی چیزا تغییر کرد
              اما هرچقدر ک گذشت فهمیدم من بیشتر از قبل تو زندگیم بهت نیاز دارم و دلم میخواد ک باشی
              و منو ببینی و منم کنارت باشم و رشد کردنت و ببینم
              تنها انگیزه ای ک باعث میشه هر روز کار کنم و</p>
            <p>
              به این زندگی ادامه بدم  اینه ک یه روزی برسه ک من و تو کنار هم خوشحال باشیم و از همه سختی ها عبور کرده باشیم
            </p>
            <p>میدونم خیلی وقتا اذیتت میکنم :(</p>
            <p>ولی خب همینه ک هست تو باید همیشه دوستم داشته باشی :)</p>
            <p>میخوام بگم منم بهت ایمان دارم و میدونم که یروز اونقدر موفق میشی ک همه غم و غصه های این روزامون از یادمون میره</p>
            <p>خیلی خوشحالم ک امسال هم کنار هم بودیم و تولدت و جشن گرفتیم</p>
            <p>تولدت مبارک امید زندگی من</p>
            <p>خیلی دوست دارم </p>
            <p>خلاصه من و برای هرکار اشتباهی ک انجام دادم ببخش</p>
            <p>من از کل این دنیا روزی رو میخوام که موفق شده باشیم و به روزایی ک گذشت لبخند بزنیم</p>
            <p>از طرف نینی کوچولو</p>
          </div>
        }
        {/* <TabPanel activeCar={char} items={data.results} char={ALPHABET} changeTab={setChar} />
          <ContactCard char={char} items={data.results} /> */}
      </>
      {/*  */}
    </div>
  );
};
export default Container;
