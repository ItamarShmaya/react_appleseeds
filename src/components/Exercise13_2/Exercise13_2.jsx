import React from "react";
import axios from "axios";
import Avatar from "./Avatar";
import Input from "./Input";
import Button from "./Button";
import "./style.css";

export default class Exercise13_2 extends React.Component {
  state = { avatars: [], searchInput: "", avatarsToDisplay: [] };

  getAvatars = async () => {
    const avatars = [];
    for (let i = 0; i < 10; i++) {
      const avatar = await axios.get("https://randomuser.me/api/");
      const relevantAvatarData = {
        name: `${avatar.data.results[0].name.first} ${avatar.data.results[0].name.last}`,
        picture: avatar.data.results[0].picture.large,
      };
      avatars.push(relevantAvatarData);
    }
    this.setState({ avatars: avatars, avatarsToDisplay: avatars });
  };

  componentDidMount = () => {
    this.getAvatars();
  };

  renderAvatars = (avatars) => {
    return avatars.map((avatar) => {
      return (
        <Avatar key={avatar.name} name={avatar.name} src={avatar.picture} />
      );
    });
  };

  onSearchInputChange = ({ target }) => {
    this.setState({ searchInput: target.value });
  };

  onFilterButtonClick = () => {
    const newAvatars = this.state.avatars.filter((avatar) => {
      return avatar.name.toLowerCase().includes(this.state.searchInput);
    });
    this.setState({ avatarsToDisplay: newAvatars });
  };

  render() {
    return (
      <>
        <Input
          id="searchBar-input"
          label="Filter by name"
          value={this.state.searchInput}
          onChange={this.onSearchInputChange}
        />
        <Button name="Filter" onClick={this.onFilterButtonClick} />
        <div className="avatars-container">
          {this.renderAvatars(this.state.avatarsToDisplay)}
        </div>
      </>
    );
  }
}
