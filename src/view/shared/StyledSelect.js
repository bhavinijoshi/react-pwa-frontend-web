import React from "react";
import "./StyledSelect.css";

export default class StyledSelect extends React.Component {
  constructor(props) {
    super(props);

    // @defaultSelectText => Show default text in select
    // @showOptionList => Show / Hide List options
    // @optionsList => List of options
    this.state = {
      defaultSelectText: this.props.defaultText,
      showOptionList: false,
      optionsList: this.props.optionsList,
      source: this.props.source,
    };
  }

  componentDidMount() {
    // Add Event Listner to handle the click that happens outside
    // the Custom Select Container
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    // Remove the event listner on component unmounting
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  componentWillReceiveProps(nextProps) {
    //allow for subsequent data to be set and update our control
    this.setState({
      defaultSelectText: nextProps.defaultText,
      showOptionList: false,
      optionsList: nextProps.optionsList,
    });
  }

  // This method handles the click that happens outside the
  // select text and list area
  handleClickOutside = (e) => {
    if (
      !e.target.classList.contains("styled-select-select-options") &&
      !e.target.classList.contains("styled-select-selected-text")
    ) {
      //always hide after a good click or outside click
      this.setState({
        showOptionList: false,
      });

      //if it was on our list component, then generate click
      this.handleOptionClick(e);
    }
  };

  // This method handles the display of option list
  handleListDisplay = () => {
    this.setState((prevState) => {
      return {
        showOptionList: !prevState.showOptionList,
      };
    });
  };

  // This method handles the setting of name in select text area
  // and list display on selection
  handleOptionClick = (e) => {
    const index = e.target.getAttribute("data-index");
    const text = e.target.getAttribute("data-text");

    if (text == null) return;

    //store for a page refresh
    this.setState({
      defaultSelectText: text,
      showOptionList: false,
    });

    //fire event to parent to handle change
    this.props.onChange({
      source: this.state.source,
      index: index,
      text: text,
    });
  };

  render() {
    return (
      <div className="styled-select-container">
        <div
          className={
            this.state.showOptionList
              ? "styled-select-selected-text active"
              : "styled-select-selected-text"
          }
          onClick={this.handleListDisplay}
        >
          {this.state.defaultSelectText}
        </div>
        {this.state.showOptionList && (
          <ul className="styled-select-select-options">
            {this.state.optionsList.map((option, i) => {
              return (
                <li
                  className="styled-select-li"
                  data-text={option.text}
                  data-index={option.index}
                  key={"styled-select-" + i}
                  onClick={this.handleOptionClick}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
