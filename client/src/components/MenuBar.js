import React, { Component } from "react";
import { Menu, Responsive, Icon, Image } from "semantic-ui-react";
import { getUserById } from "../api/questions";
import "../styles/MenuBar.css";
import { MenuItems } from "./MenuItems";
import { SideBar } from "./SideBar";
import logo from "../assets/logo.png";

export default class MenuBar extends Component {
  state = {
    visible: false,
    activeItem:
      window.location.pathname === "/"
        ? "home"
        : window.location.pathname.substr(1),
    profilePicUrl: null
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = e => {
    // Make sure we don't refresh
    e.preventDefault();
    // Clear the local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  updateProfilePic = () => {
    // Use the stored userID
    getUserById(localStorage.userId).then(response =>
      this.setState({ profilePicUrl: response.profile_pic })
    );
  };

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      getUserById(nextProps.userId).then(response => {
        this.setState({ profilePicUrl: response.profile_pic });
      });
    }
  }
  handleSidebarHide = () => {
    this.setState({ visible: false });
  };

  handleShowClick = () => {
    this.setState({ visible: true });
  };

  componentDidMount = () => {
    this.updateProfilePic();
  };

  render() {
    const { activeItem, visible, profilePicUrl } = this.state;
    return (
      <Menu
        inverted
        size="huge"
        className="menu"
        fluid
        style={{ height: "60px" }}
      >
        <Responsive maxWidth={999}>
          <Menu.Item position="left">
            <Icon name="bars" onClick={this.handleShowClick} />
          </Menu.Item>
        </Responsive>
        <Menu.Item>
          <Image
            src={logo}
            as="a"
            size="small"
            href="/"
            style={{ width: "75px" }}
          />
        </Menu.Item>
        <Responsive as={Menu} inverted minWidth={1000}>
          <MenuItems
            activeItem={activeItem}
            handleItemClick={this.handleItemClick}
            handleLogout={this.handleLogout}
            userId={this.props.userId}
            profilePicUrl={profilePicUrl}
          />
        </Responsive>
        {this.props.userId && (
          <Menu.Menu position="right">
            <Menu.Item position="right">
              <Image
                src={profilePicUrl}
                size="mini"
                style={{ height: "45px" }}
              />
            </Menu.Item>
          </Menu.Menu>
        )}

        <SideBar
          userId={this.props.userId}
          visible={visible}
          handleSidebarHide={this.handleSidebarHide}
          activeItem={activeItem}
          handleItemClick={this.handleItemClick}
          handleLogout={this.handleLogout}
        />
      </Menu>
    );
  }
}
