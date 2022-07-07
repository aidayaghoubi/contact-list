import "../sytle/tabPanel.scss"

const TabPanel = ({ char, changeTab }) => {
  function OnChangeCharHandler(el) {
    changeTab(el);
  }

  return (
    <ul className="char-list">
      {char.map((el, i) => (
        <li key={i} onClick={() => OnChangeCharHandler(el)}>
          {el}
        </li>
      ))}
    </ul>
  );
};

export default TabPanel;
