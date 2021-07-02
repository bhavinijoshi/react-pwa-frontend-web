import React, { Component } from "react";
import glamorous from "glamorous";
import Tab from "./Tab";
import { debounce } from "utils";

const ListTabs = glamorous.ul({
  paddingLeft: 0,
  listStyle: "none",
  margin: 0,
});

const TabTitleItem = glamorous.li(
  {
    display: "inline-block",
    paddingRight: 5,
    paddingLeft: 5,
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    padding: "16px 30px",
    cursor: "pointer",
    opacity: "0.4",
    ":hover": {
      opacity: 1,
    },
  },
  (props) => {
    return ({
      ...(props.tabTitleStyle && {
        ...props.tabTitleStyle,
      }),
      ...(props.isActiveTab && {
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        cursor: "default",
        opacity: 1,
      })
    }
    );
  }
);

const TabTitleItemWrapper = glamorous.div(
  {
    display: "inline-block",
  }
)

const ActiveTabBorder = glamorous.div(
  {
    height: 4,
    backgroundColor: "#0088dd",
    position: "absolute",
    bottom: 0,
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    willChange: "left, width",
  },
  (props) => {
    return (
      props.activeTabElement && {
        width: props.activeTabElement.offsetWidth,
        left: props.activeTabElement.offsetLeft,
      }
    );
  }
);

const TabAnchorItem = glamorous.a({
  textTransform: "capitalize",
  color: "#000000",
  fontWeight: 600,
  fontSize: 24,
},
  (props) => {
    return (props.tabAnchorStyle && {
      ...props.tabAnchorStyle
    })
  }
);

const TabsContainer = glamorous.div({
  position: "relative",
  borderBottom: "1px solid #dfdfdf",
});

const ReactTabs = glamorous.div({
  position: "relative",
});
class Tabs extends Component {
  static Tab = Tab;

  state = {
    tabs: [],
    prevActiveTab: {},
    activeTab: this.props.activeTab,
    tabsElements: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeTab.id !== this.props.activeTab.id) {
      this.setState({
        activeTab: this.props.activeTab
      })
    }
  }

  addTab = (newTab) => {
    let isNewTabFound;

    for (let i in this.state.tabs) {
      let tab = this.state.tabs[i];

      if (tab.id === newTab.id) {
        isNewTabFound = true;
        break;
      }
    }

    if (!isNewTabFound) {
      this.setState((prevState, props) => {
        return {
          tabs: prevState.tabs.concat(newTab),
        };
      });
    }
  };

  removeTab = (tabId) => {
    this.setState((prevState, props) => {
      return {
        tabs: prevState.tabs.filter((tab) => tab.id !== tabId),
      };
    });
  };

  onClick = debounce((tab) => {
    this.setState((prevState, props) => {
      return {
        prevActiveTab: prevState.activeTab,
        activeTab: tab,
      };
    });
  }, 300);

  onTabClick = debounce((tab) => {
    this.props.onTabClick && this.props.onTabClick(tab.id)
  }, 300)

  render() {
    return (
      <ReactTabs>
        <TabsContainer>
          <ListTabs>
            {this.state.tabs.map((tab, index) => (
              <TabTitleItemWrapper
                key={index}
                onClick={() => this.onTabClick(tab)}
              >
                <TabTitleItem
                  key={index}
                  onClick={() => this.onClick(tab)}
                  id={tab.id}
                  innerRef={(tabElement) => {
                    if (!this.state.tabsElements[tab.id]) {
                      this.setState((prevState, props) => {
                        const tabsElements = prevState.tabsElements;
                        tabsElements[tab.id] = tabElement;

                        return {
                          tabsElements,
                        };
                      });
                    }
                  }}
                  isActiveTab={this.state.activeTab.id === tab.id}
                  {...this.props}
                >
                  <TabAnchorItem tabAnchorStyle={this.props.tabAnchorStyle}>{tab.title}</TabAnchorItem>
                </TabTitleItem>
              </TabTitleItemWrapper>
            ))}
          </ListTabs>

          <ActiveTabBorder
            activeTabElement={this.state.tabsElements[this.state.activeTab.id]}
          />
        </TabsContainer>
        {React.Children?.map(this.props.children, (child) => {
          if (!child) return false
          return React.cloneElement(child, {
            activeTab: this.state.activeTab,
            addTab: this.addTab,
          })
        }
        )}
      </ReactTabs>
    );
  }
}

export default Tabs;
