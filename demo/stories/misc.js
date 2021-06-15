import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import {
  LoadingDotted,
  LoadingSpinner,
  Dialog,
  Button,
  Datepicker,
} from "../../components";

storiesOf("Misc")
  .add("LoadingDotted", () => (
    <Container>
      {() => (<LoadingDotted />)}
    </Container>
  ))
  .add("LoadingSpinner", () => (
    <Container>
      {() => (<LoadingSpinner />)}
    </Container>
  ))
  .add("playground", () => (
    <Container>
      {({ value = {}, onChange }) => {
        const {
          modalOpened,
          dates: [dateStart, dateEnd] = [],
        } = value;
        return (
          <div>
            <Button onClick={() => onChange({ ...value, modalOpened: true })}>Open dialog</Button>
            {modalOpened && (
              <Dialog
                title="Dialog title"
                onClose={() => onChange({ ...value, modalOpened: false })}>
                <Datepicker
                  value={[dateStart, dateEnd]}
                  label={(<span>{`${dateStart || "Start"} - ${dateEnd || "End"}`}</span>)}
                  onChange={(d) => onChange({ ...value, dates: d })}
                  range />
              </Dialog>
            )}
          </div>
        );
      }}
    </Container>
  ));
