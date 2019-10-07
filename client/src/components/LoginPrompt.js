import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

const LoginPrompt = () => (
  <Modal trigger={<Button>Add a question </Button>} basic size="small">
    <Header icon="warning" content="Adding a question" />
    <Modal.Content>
      <p>Please Register/Login to add a question.</p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color="green" inverted as={Link} to="/login">
        <Icon name="sign in" /> Login
      </Button>
      <Button color="green" inverted as={Link} to="/register">
        <Icon name="signup" /> Register
      </Button>
    </Modal.Actions>
  </Modal>
);

export default LoginPrompt;
