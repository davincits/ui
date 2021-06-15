import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { List } from "../../components";
import LIST from "./mocks/users_list.json";
import LIST_24 from "./mocks/users_list_img_24.json";
import LIST_40 from "./mocks/users_list_img_40.json";

storiesOf("List")
  .add("common", () => (
    <Container width="240px">
      {() => (
        <List items={LIST} onClick={console.log} />
      )}
    </Container>
  ))
  .add("with image", () => (
    <Container width="240px">
      {() => (
        <List items={LIST_24} onClick={console.log} />
      )}
    </Container>
  ))
  .add("with large image", () => (
    <Container width="240px">
      {() => (
        <List items={LIST_40} onClick={console.log} imageSize="large" />
      )}
    </Container>
  ));
