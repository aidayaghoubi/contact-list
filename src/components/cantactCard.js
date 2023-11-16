import { useEffect, useState } from "react";
import "../sytle/cantactCard.scss";


const ContactCard = ({ items, char }) => {

  const [state, setState] = useState([]);
  const [showInfo, setShowInfo] = useState("");
  const [close, setClose] = useState(false)

  function onShowMoreInfo(props) {
    setShowInfo(props)

  }

  useEffect(() => {
    setState(items.filter((el) => el.name.first[0].toLowerCase() === char));
    setShowInfo("")

  }, [char]);

  const onCloseInfoHandler = () => {
    setClose(true)

  }

  useEffect(() => {
    if (close) {
      setShowInfo("")
    }
    return () => {
      setClose(false)
    }
  }, [close])

  return (
    <div className="contact-card">
      {state.map((el, i) => (
        <div className="contact-List" onClick={() => onShowMoreInfo(el.email)}>
          <p className="userName">{el.name.first}</p>
          {
            showInfo === el.email &&
            <div className="more-information" >
              <div className="close-button" onClick={onCloseInfoHandler}></div>
              <div className="profile">
                <img src={el.picture.large} alt="profile" />
              </div>
              <div className="form">

                <p className="name">{el.name.first}   {el.name.last}</p>

                <div>
                  <p>e-mail : </p><span>{el.email}</span>
                </div>
                <div>
                  <p>phone :</p><span>{el.phone}</span>
                </div><div>
                  <p>street :</p><span>{el.location.street.name}</span>
                </div><div>
                  <p>city :</p><span>{el.location.city}</span>
                </div>
              </div>
            </div>
          }

        </div>
      ))}
      {
        state.length === 0 && <div className="empty">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="512" viewBox="0 0 24 24" width="512" data-name="Layer 1">
              <path d="m16 6a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zm7.707 17.707a1 1 0 0 1 -1.414 0l-2.407-2.407a4.457 4.457 0 0 1 -2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1 -.7 2.386l2.407 2.407a1 1 0 0 1 0 1.414zm-6.207-3.707a2.5 2.5 0 1 0 -2.5-2.5 2.5 2.5 0 0 0 2.5 2.5zm-4.5 2h-6a3 3 0 0 1 -3-3v-14a3 3 0 0 1 3-3h12a1 1 0 0 1 1 1v8a1 1 0 0 0 2 0v-8a3 3 0 0 0 -3-3h-12a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h6a1 1 0 0 0 0-2z" /></svg>
          </div>
          <p>
            no contact found
          </p>

        </div>
      }
    </div>
  );
};
export default ContactCard;
