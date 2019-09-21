import React, { Component } from "react";
import { List, Segment } from "semantic-ui-react";
import formatingDate from "../util/formatingDate.js";

class ProfileQuestions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment>
        <List relaxed>
          {this.props.questions.map(question => {
            return (
              <List.Item>
                <List.Content>
                  <List.Header as="a">{question.content}</List.Header>
                  <List.Description as="a">
                    {formatingDate(question.date_posted)}
                  </List.Description>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </Segment>
    );
  }
}

export default ProfileQuestions;
