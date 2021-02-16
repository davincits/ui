import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import {
  DialogsContainer, showAlertDialog, showConfirmDialog, Button,
} from "../../components";

const openAlertDialog = async () => {
  await showAlertDialog({ title: "Alert dialog title", message: "Alert dialog message" });
  console.log("closed");
};

const openConfirmDialog = async () => {
  if (await showConfirmDialog({ title: "Confirm dialog title", message: "Are you sure about that?" })) {
    console.log("I\"m pretty sure");
  } else {
    console.log("I\"m not sure");
  }
};

storiesOf("CommonDialogs", module)
  .addDecorator((story) => (
    <Container>
      {() => (
        <div>
          {story()}
          <DialogsContainer />
        </div>
      )}
    </Container>
  ))
  .add("alert", () => (
    <Container>
      {() => (<Button onClick={openAlertDialog}>Open alert dialog</Button>)}
    </Container>
  ))
  .add("confirm", () => (
    <Container>
      {() => (<Button onClick={openConfirmDialog}>Open confirm dialog</Button>)}
    </Container>
  ));
