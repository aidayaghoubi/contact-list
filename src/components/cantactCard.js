import { useEffect, useState } from "react";
import "../sytle/cantactCard.scss";

const ContactCard = ({ items, char }) => {
  const [state, setState] = useState([]);
  const first = "first";

  useEffect(() => {
    setState(items.filter((el) => el.name.first[0].toLowerCase() === char));
  }, [char]);

  console.log(state);

  return (
    <div className="contact-card">
     
        {state.map((el, i) => (
          <div className="contact-List">
            <p>{el.name.first}</p>
            <span>{el.name.last}</span>
          </div>
        ))}
    </div>
  );
};
export default ContactCard;
