import React from "react";
import {
  Button,
  Card,
  Form,
  Segment,
  TextArea,
  Accordion
} from "semantic-ui-react";

import { formatingDate } from "../util/formatDate";
import AnswerCard from "./AnswerCard";

const QuestionCard = props => {
  const { question, index } = props;
  return (
    <Card data-testid="question" fluid key={question.id}>
      <Card.Content>
        <Card.Header>
          <Accordion>
            <Accordion.Title
              active={props.activeIndex === question.id}
              index={question.id}
              onClick={props.toggleAnswers}
              id={`card-${index}`}
            >
              {props.editQuestion && props.editQuestion.id === question.id ? (
                <Form>
                  <TextArea
                    value={props.editContentQuestion}
                    style={{ minHeight: 100 }}
                    onChange={e => props.onChange(e)}
                  />
                  <div className="ui two buttons">
                    <Button
                      data-testid="cancel-button"
                      onClick={props.handleSaveClick}
                      basic
                      color="green"
                    >
                      Save
                    </Button>
                    <Button
                      onClick={props.handleCancelClick}
                      basic
                      color="gray"
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              ) : (
                question.content
              )}
              {props.userId === question.user_id && !props.editQuestion ? (
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button
                      basic
                      color="green"
                      onClick={event => props.handleEditClick(question, event)}
                    >
                      Edit
                    </Button>
                    <Button basic color="red">
                      Delete
                    </Button>
                  </div>
                </Card.Content>
              ) : null}
            </Accordion.Title>

            <Accordion.Content active={props.activeIndex === question.id}>
              {props.answers.map(answer => {
                return <AnswerCard question={question} answer={answer} />;
              })}
              <Form onSubmit={props.handleOnSubmitAnswer}>
                <Form.TextArea
                  placeholder="Please write you answer here..."
                  required
                  minLength={2}
                  name="content"
                  onChange={props.handleChange}
                  value={props.content}
                  type="text"
                />
                <Form.Button>Submit</Form.Button>
              </Form>
            </Accordion.Content>
          </Accordion>
        </Card.Header>
        <Card.Meta
          textAlign="right"
          style={{
            fontSize: "12px",
            fontStyle: "italic"
          }}
        >
          {" "}
          #{question.tags > 1 ? question.tags.join(" #") : question.tags}
        </Card.Meta>
        <Card.Meta textAlign="right">
          {formatingDate(question.date_posted)}
        </Card.Meta>
        <Card.Meta textAlign="right"> by {question.username}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default QuestionCard;
