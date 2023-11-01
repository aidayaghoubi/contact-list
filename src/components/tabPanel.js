import "../sytle/tabPanel.scss"

const TabPanel = ({ activeCar, char, changeTab, items }) => {

  function OnChangeCharHandler(el) {
    changeTab(el);
  }

  
  return (
    <ul className="char-list">
      {char.map((el, i) => (
        <li key={i} onClick={() => OnChangeCharHandler(el)} className={activeCar === el ? "active" : "notActive"}>
          <p>
            {el}
          </p>
          <span>
            {items.filter(item => item.name.first[0].toLowerCase() === el).length}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TabPanel;
