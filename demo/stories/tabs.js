import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { Tabs } from "../../components";

storiesOf("Tabs")
  .add("common", () => (
    <Container>
      {() => (
        <Tabs>
          <Tabs.TabList>
            {null}
            <Tabs.Tab>First tab</Tabs.Tab>
            <Tabs.Tab>Second tab</Tabs.Tab>
            <Tabs.Tab>Third tab</Tabs.Tab>
            <Tabs.Tab>Fourth tab</Tabs.Tab>
            <Tabs.Tab disabled>Fifth tab</Tabs.Tab>
          </Tabs.TabList>
          {null}
          <Tabs.TabPanel>
            <h3>First tab content</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <h3>Second tab content</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <h3>Third tab content</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <h3>Fourth tab content</h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <h3>Fifth tab content</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Tabs.TabPanel>
        </Tabs>
      )}
    </Container>
  ))
  .add("selected", () => (
    <Container>
      {() => (
        <Tabs active={2}>
          <Tabs.TabList>
            <Tabs.Tab>First tab</Tabs.Tab>
            <Tabs.Tab>Second tab</Tabs.Tab>
            <Tabs.Tab>Third tab</Tabs.Tab>
            <Tabs.Tab>Fourth tab</Tabs.Tab>
            <Tabs.Tab>Fifth tab</Tabs.Tab>
          </Tabs.TabList>
          <Tabs.TabPanel>
            <h3>First tab content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <h3>Second tab content</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
               laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <h3>Third tab content</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit
               esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <h3>Fourth tab content</h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in
               culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <h3>Fifth tab content</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate
               velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Tabs.TabPanel>
        </Tabs>
      )}
    </Container>
  ));
