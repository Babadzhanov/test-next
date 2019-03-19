import Confirmation from "./Confirmation";

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirm: false,
      showAnswer: false,
      disButton: false
    };
    this.handleclick = this.handleClick.bind(this);
    this.accept = this.accept.bind(this);
    this.decline = this.decline.bind(this);
  }

  handleClick() {
    console.log("clicked");
    this.setState({ showConfirm: !this.state.showConfirm });
  }

  accept() {
    console.log("accept");
    this.setState({ showAnswer: true, disButton: true });
  }

  decline() {
    console.log("decline");
    this.setState({ showConfirm: false });
  }

  render() {
    const { question, answer } = this.props;
    const { showConfirm, showAnswer } = this.state;
    console.log(this.props);
    console.log(question);
    return (
      <div class="container">
        {showConfirm ? (
          <Confirmation
            type="info"
            message="Reveal the answer"
            accept={this.accept}
            decline={this.decline}
          />
        ) : (
          ""
        )}
        <p class="question">{question}</p>
        <button
          class={`btn btn-primary show-answer ${
            this.state.disButton ? "disabled" : ""
          }`}
          onClick={() => this.handleClick()}
        >
          Show Answer
        </button>
        {showAnswer ? <p class="answer">{answer}</p> : ""}
      </div>
    );
  }
}

export default QuestionContainer;
