import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../../store/actions/itemActions";
import PropTypes from "prop-types";

const Input = ({ addItem }) => {
  const [toggle, setToggle] = useState(false);
  const [item, setItem] = useState("");

  const onToggle = () => {
    setToggle(!toggle);
    setItem("");
  };

  const onItemChange = event => {
    const { value } = event.target;
    setItem(value);
  };

  const onSubmitItem = event => {
    event.preventDefault();

    // Item to be added to item state
    const newItem = { name: item };

    // Send new item to store
    addItem(newItem);

    // Close dialog box
    setToggle(!toggle);

    // Clear text field
    setItem("");
  };

  const canSubmit = item ? true : false;

  return (
    <div style={{ marginBottom: "2rem" }}>
      <button
        style={{ marginTop: "2rem", marginBottom: "2rem", display: "flex" }}
        onClick={onToggle}
        className="green accent-4 btn waves-effect waves-light"
      >
        {!toggle ? (
          <i style={{ marginRight: "0.5rem" }} className="material-icons">
            add_circle_outline
          </i>
        ) : (
          <i style={{ marginRight: "0.5rem" }} className="material-icons">
            backspace
          </i>
        )}
        {!toggle ? "Add item" : "Nevermind"}
      </button>

      {toggle && (
        <form
          style={{ border: "1px solid #e0e0e0", padding: "2rem" }}
          onSubmit={onSubmitItem}
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                onChange={onItemChange}
                value={item}
                placeholder="Bagels and cream cheese..."
              />
            </div>
          </div>
          <button
            type="submit"
            className={
              canSubmit
                ? "btn waves-effect waves-light green accent-4"
                : "btn disabled"
            }
          >
            Add
            <i className="material-icons right ">send</i>
          </button>
        </form>
      )}
    </div>
  );
};

Input.propTypes = {
  addItem: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addItem
};

export default connect(
  null,
  mapDispatchToProps
)(Input);
