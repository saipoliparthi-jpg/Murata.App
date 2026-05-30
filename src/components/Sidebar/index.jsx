const Sidebar = ({ setActivePage }) => {
  return (
    <div className="sidebar">
      <button onClick={() => setActivePage("home")}>
        Home
      </button>

      <button onClick={() => setActivePage("employees")}>
        Employees
      </button>
    </div>
  );
};

export default Sidebar;