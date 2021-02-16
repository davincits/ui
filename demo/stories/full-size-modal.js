import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import {
  FullSizeModal, Button, Tabs, Tab, TabList, TabPanel,
} from "../../components";

const Lorem = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing
    elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis
     nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint
     occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.
  </p>
);

const TABS = [
  {
    label: "First",
    render: () => (
      <div>
        <h3>First tab content</h3>
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
      </div>
    ),
  },
  {
    label: "Second",
    render: () => (
      <div>
        <h3>Second tab content</h3>
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
      </div>
    ),
  },
  {
    label: "Second",
    render: () => (
      <div>
        <h3>Third tab content</h3>
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
      </div>
    ),
  },
];

storiesOf("FullSizeModal", module)
  .add("common", () => (
    <Container>
      {({ value = false, onChange }) => (
        <div>
          <Button onClick={() => onChange(!value)}>Open modal</Button>
          {value && (
            <FullSizeModal
              title="Full size modal title"
              footer={<div style={{ padding: "16px 32px", background: "#fff" }}>Footer</div>}
              onClose={() => onChange(false)}
            >
              <div style={{ padding: "0 32px" }}>
                <p>Press ESC to close this window</p>
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
              </div>
            </FullSizeModal>
          )}
        </div>
      )}
    </Container>
  ))
  .add("tabs", () => (
    <Container>
      {({ value = false, onChange }) => (
        <div>
          <Button onClick={() => onChange(!value)}>Open modal</Button>
          {value && (
            <Container>
              {({ value: activeTab, onChange: onChangeTab }) => (
                <FullSizeModal
                  title="Full size modal title"
                  subtitle={(
                    <Tabs active={activeTab} onChange={onChangeTab}>
                      <Tabs.TabList>
                        {TABS.map(({ label }, i) => (
                          <Tabs.Tab key={i}>{/* eslint-disable-line */}
                            {label}
                          </Tabs.Tab>
                        ))}
                      </Tabs.TabList>
                    </Tabs>
                  )}
                  footer={<div style={{ padding: "16px 32px", background: "#fff" }}>Footer</div>}
                  onClose={() => onChange(false)}
                >
                  <div style={{ padding: "32px" }}>
                    <Tabs active={activeTab}>
                      {TABS.map(({ render }, i) => (
                        <Tabs.TabPanel key={i}>{render()}</Tabs.TabPanel> // eslint-disable-line
                      ))}
                    </Tabs>
                  </div>
                </FullSizeModal>
              )}
            </Container>
          )}
        </div>
      )}
    </Container>
  ));
