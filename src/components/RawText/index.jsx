import { Component } from "react";
import "./index.css";
import { setText } from "../../store/markdownSlice";
import { connect } from "react-redux";
export class RawText extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => this.props.setText(e.target.value);
  render() {
    return (
      <div className={this.props.className}>
        <textarea
          name="rawText"
          id="editor"
          value={this.props.text}
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.markdown.text,
});

const mapDispatchToProps = {
  setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(RawText);
