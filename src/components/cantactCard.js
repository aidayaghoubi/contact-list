import { useEffect, useState } from "react";
import "../sytle/cantactCard.scss";

const FORM = {
  name: "name",
  lastName: "Last Name",
  email: "e-mail",
  city: "city",
  street: "street",
  state: "state",
  phone :"phone",
  postcode:"postcode"
}

const ContactCard = ({ items, char }) => {
  const [state, setState] = useState([]);
  const first = "first";

  useEffect(() => {
    setState(items.filter((el) => el.name.first[0].toLowerCase() === char));
  }, [char]);

  return (
    <div className="contact-card">

      {state.map((el, i) => (
        <div className="contact-List">
          <p>{el.name.first}</p>
        </div>
      ))}
    </div>
  );
};
export default ContactCard;
