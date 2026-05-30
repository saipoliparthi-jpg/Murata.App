const Header = ({ userName }) => {
  return (
    <div className="header">
      <h2>Murata App</h2>

      <div>
        <span>{userName}</span>
        <span className="profile-icon">👤</span>
      </div>
    </div>
  );
};

export default Header;