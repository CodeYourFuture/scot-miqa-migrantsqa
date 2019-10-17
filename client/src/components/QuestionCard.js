import React from "react";
import {
  Button,
  Card,
  Form,
  TextArea,
  Accordion,
  Grid,
  Label
} from "semantic-ui-react";
import AnswersList from "./AnswersList";
import QuestionUpvote from "./QuestionUpvote";
import OptionButtonAtQuestionCard from "./OptionButtonAtQuestionCard";

const QuestionCard = props => {
  const { question, index, visibleAnswers } = props;
  return (
    <Card
      data-testid="question"
      fluid
      key={question.id}
      style={{ padding: "1em" }}
    >
      <Card.Content>
        <Card.Header>
          <Accordion>
            <Accordion.Title
              active={props.activeIndex === question.id}
              index={question.id}
              onClick={props.toggleAnswers}
              id={`card-${index}`}
            >
              <Grid columns={4} stackable>
                <Grid.Row columns={4}>
                  <Grid.Column width={3}>
                    <QuestionUpvote
                      userId={props.userId}
                      questionUserId={question.user_id}
                      questionScore={question.score}
                      questionId={question.id}
                      handleOnClickUpvoteBtn={() =>
                        props.handleOnClickUpvoteBtn(question, props.userId)
                      }
                    />
                  </Grid.Column>
                  <Grid.Column extAlign="left" width={8}>
                    {props.editQuestion &&
                    props.editQuestion.id === question.id ? (
                      <Form fluid>
                        <TextArea
                          value={props.editContentQuestion}
                          style={{ minHeight: 100 }}
                          onChange={e => props.onChange(e)}
                        />
                        <div
                          className="ui two buttons"
                          style={{ width: "40%" }}
                        >
                          <Button
                            onClick={props.handleSaveClick}
                            basic
                            color="black"
                          >
                            Save
                          </Button>
                          <Button
                            data-testid="cancel-button"
                            onClick={props.handleCancelClick}
                            basic
                            color="black"
                          >
                            Cancel
                          </Button>
                        </div>
                      </Form>
                    ) : (
                      <Card.Content>{question.content}</Card.Content>
                    )}
                    <Card.Meta
                      textAlign="left"
                      style={{
                        fontStyle: "italic",
                        marginTop: "0.5em"
                      }}
                    >
                      {question.tags &&
                        question.tags.map(
                          (tag, index) =>
                            //This line will add a #followed by the tag and
                            //keep adding spaces till we reach the end of the array.
                            `#${tag}${
                              index === question.tags.length - 1 ? "" : ` `
                            }`
                        )}
                    </Card.Meta>
                    <br />
                  </Grid.Column>
                  <Grid.Column textAlign="right" width={4}>
                    <Card.Meta textAlign="right">
                      <Label as="a" image>
                        <img src={question.profile_pic} />
                        {"  "}
                        {question.username}
                      </Label>
                    </Card.Meta>
                  </Grid.Column>
                  <Grid.Column textAlign="right" width={1}>
                    <OptionButtonAtQuestionCard
                      link={`/question/${question.id}`}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row></Grid.Row>
                <Card.Meta style={{ fontSize: "0.9em" }}>
                  {
                    props.answers.filter(
                      answer => answer.question_id === question.id
                    ).length
                  }{" "}
                  answers
                </Card.Meta>
                <Grid.Column textAlign="left" width={9}>
                  {props.userId === question.user_id && !props.editQuestion ? (
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button
                          basic
                          color="black"
                          onClick={event =>
                            props.handleEditClick(question, event)
                          }
                        >
                          Edit
                        </Button>
                        <Button
                          basic
                          color="black"
                          onClick={event =>
                            props.handleDeleteClick(question, event)
                          }
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Content>
                  ) : null}
                </Grid.Column>
              </Grid>
            </Accordion.Title>
            {visibleAnswers ? (
              <Accordion.Content active>
                <AnswersList
                  answers={props.answers}
                  question={question}
                  userId={props.userId}
                  activeIndex={props.activeIndex}
                  handleOnSubmitAnswer={props.handleOnSubmitAnswer}
                  handleChange={props.handleChange}
                  content={props.content}
                  handleAcceptAnswerOnClick={props.handleAcceptAnswerOnClick}
                />
              </Accordion.Content>
            ) : (
              <AnswersList
                answers={props.answers}
                question={question}
                activeIndex={props.activeIndex}
                userId={props.userId}
                handleOnSubmitAnswer={props.handleOnSubmitAnswer}
                handleChange={props.handleChange}
                content={props.content}
                handleAcceptAnswerOnClick={props.handleAcceptAnswerOnClick}
              />
            )}
          </Accordion>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

export default QuestionCard;
