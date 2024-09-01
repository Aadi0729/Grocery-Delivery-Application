import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../../store/actions/itemActions";
import PropTypes from "prop-types";

const ShoppingDay = ({ name, deleteItem, id }) => (
  <>
    <li className="collection-item">
      <h5>{name}</h5>
      <button
        onClick={() => deleteItem(id)}
        className="btn-small red-text text-darken-1 waves-light red lighten-5"
      >
        Remove
      </button>
    </li>
  </>
);

ShoppingDay.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const mapDispatchToProps = {
  deleteItem
};

export default connect(
  null,
  mapDispatchToProps
)(ShoppingDay);
