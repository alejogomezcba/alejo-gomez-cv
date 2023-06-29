import './style.scss';

export const NavMenu = ({ data, setSelectedMenu }) => {

  const handleMenuOption = (e) => {
    setSelectedMenu(e.target.outerText);
  };

  return (
    <div className="nav_menu">
      {data.map((item) => (
        <p className="menu_item" onClick={handleMenuOption} key={item}>
          {item}
        </p>
      ))}
    </div>
  );
};
