import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header>
      <h1>
        Task Tracker
        <Button
          color={showAdd ? "Blue" : "Green"}
          text={showAdd ? "Close" : "Add"}
          textColor="White"
          onClick={onAdd}
        />
      </h1>
    </header>
  );
};

export default Header;
