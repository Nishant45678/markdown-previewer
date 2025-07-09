import { Component } from "react";
import "./index.css";
import { connect } from "react-redux";

export class MarkedPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`MarkedPreviewer__container ${this.props.className}`} >
        <div className="content">
          <div className="result" id="preview" dangerouslySetInnerHTML={{__html:this.props.markdown}}></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  markdown: state.markdown.markdown,
});

export default connect(mapStateToProps,{})(MarkedPreview)