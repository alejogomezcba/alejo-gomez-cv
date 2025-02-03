import './style.scss';

const NavMenu = ({ data, setSelectedMenu, selectedMenu }) => {

  const handleMenuOption = (e) => {
    setSelectedMenu(e.target.outerText);
  };

  return (
    <div className="nav_menu" id='nav-menu'>
      {data.map((item) => (
        <p className={`menu_item ${selectedMenu === item ? "active" : ""}`} onClick={handleMenuOption} key={item}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default NavMenu;
