import { decode } from "he";

class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    const { bpi } = this.props;
    let { currency } = this.state;
    let selected = bpi.USD;

    if (currency === "USD") {
      selected = bpi.USD;
    } else if (currency === "GBP") {
      selected = bpi.GBP;
    } else if (currency === "EUR") {
      selected = bpi.EUR;
    }

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {selected.description} :{" "}
            <span className="badge badge-primary">{selected.code}</span>{" "}
            <strong>
              <span>{decode(selected.symbol)}</span>
              {selected.rate}
            </strong>
          </li>
        </ul>
        <br />
        <select
          onChange={e => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
