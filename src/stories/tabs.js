import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Tabs, Tab, TabList, TabPanel } from '../ui';

storiesOf('Tabs', module)
  .add('common', () => (
    <Container>
      {() => (
        <Tabs>
          <TabList>
            <Tab>First tab</Tab>
            <Tab>Second tab</Tab>
            <Tab>Third tab</Tab>
            <Tab>Fourth tab</Tab>
            <Tab>Fifth tab</Tab>
          </TabList>
          <TabPanel>
            <h3>First tab content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </TabPanel>
          <TabPanel>
            <h3>Second tab content</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </TabPanel>
          <TabPanel>
            <h3>Third tab content</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </TabPanel>
          <TabPanel>
            <h3>Fourth tab content</h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </TabPanel>
          <TabPanel>
            <h3>Fifth tab content</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </TabPanel>
        </Tabs>
      )}
    </Container>
  ))
  .add('selected', () => (
    <Container>
      {() => (
        <Tabs active={2}>
          <TabList>
            <Tab>First tab</Tab>
            <Tab>Second tab</Tab>
            <Tab>Third tab</Tab>
            <Tab>Fourth tab</Tab>
            <Tab>Fifth tab</Tab>
          </TabList>
          <TabPanel>
            <h3>First tab content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </TabPanel>
          <TabPanel>
            <h3>Second tab content</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </TabPanel>
          <TabPanel>
            <h3>Third tab content</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </TabPanel>
          <TabPanel>
            <h3>Fourth tab content</h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </TabPanel>
          <TabPanel>
            <h3>Fifth tab content</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </TabPanel>
        </Tabs>
      )}
    </Container>
  ))