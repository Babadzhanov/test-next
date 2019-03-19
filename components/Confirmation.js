import Notification from "./Notification";

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.accept = this.accept.bind(this);
    this.decline = this.decline.bind(this);
  }
  accept() {
    let { accept } = this.props;
    accept();
    this.setState({ open: false });
  }
  decline() {
    let { decline } = this.props;
    decline();
    this.setState({ open: false });
  }
  render() {
    if (this.state.open) {
      return (
        <Notification {...this.props}>
          <button className="btn btn-primary" onClick={this.accept}>
            Sure
          </button>
          <button className="btn btn-danger" onClick={this.decline}>
            Nah
          </button>
        </Notification>
      );
    }
    return null;
  }
}

export default Confirmation;
