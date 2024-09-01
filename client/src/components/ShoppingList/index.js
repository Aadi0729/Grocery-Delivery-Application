import React from "react";
import { connect } from "react-redux";
import { getItems } from "../../store/actions/itemActions";
import PropTypes from "prop-types";
import { withAuth } from "../Session";

import Loading from "../Loading";
import Input from "../Input";
import ShoppingDay from "./ShoppingDay";

class ShoppingList extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { loading, item } = this.props;
    const { items } = item;

    if (loading) {
      return <Loading />;
    }

    return items.length > 0 ? (
      <>
        <Input />
        <div className="col s12 m6">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>Grocery Items</h4>
            </li>
            {items.map(({ _id, name }) => (
              <ShoppingDay key={_id} name={name} id={_id} />
            ))}
          </ul>
        </div>
      </>
    ) : (
      <>
        <Input />
        <div className="col s12 m6">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>Grocery Items</h4>
            </li>
            <li className="collection-item">
              You currently have no items! Please add some.
            </li>
          </ul>
        </div>
      </>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = ({ item, loading }) => ({
  item,
  loading
});

const mapDispatchToProps = {
  getItems
};

export default withAuth(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoppingList)
);
