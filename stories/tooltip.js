import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Tooltip } from '../components';

storiesOf('Tooltip', module)
  .add('common', () => (
    <Container>
      {() => (
        <div>
          <div style={{ padding: '32px', textAlign: 'center', display: 'flex' }}>
            <div style={{ margin: '32px' }}>
              <Tooltip tooltip="Lorem ipsum dolor sit amet...">
                <div style={{ border: '1px solid #f0f0f0', borderRadius: '2px', padding: '4px' }}>Simple tooltip</div>
              </Tooltip>
            </div>

            <div style={{ margin: '32px' }}>
              <Tooltip place="right" tooltip="Lorem ipsum dolor sit amet...">
                <div style={{ border: '1px solid #f0f0f0', borderRadius: '2px', padding: '4px' }}>Tooltip place right</div>
              </Tooltip>
            </div>

            <div style={{ margin: '32px' }}>
              <Tooltip place="left" tooltip="Lorem ipsum dolor sit amet...">
                <div style={{ border: '1px solid #f0f0f0', borderRadius: '2px', padding: '4px' }}>Tooltip place left</div>
              </Tooltip>
            </div>

            <div style={{ margin: '32px' }}>
              <Tooltip place="bottom" tooltip="Lorem ipsum dolor sit amet...">
                <div style={{ border: '1px solid #f0f0f0', borderRadius: '2px', padding: '4px' }}>Tooltip place bottom</div>
              </Tooltip>
            </div>
          </div>

          <div style={{ padding: '32px', textAlign: 'center', display: 'flex' }}>
            <div style={{ margin: '32px' }}>
              <Tooltip tooltip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.">
                <div style={{ border: '1px solid #f0f0f0', borderRadius: '2px', padding: '4px' }}>Multiline tooltip</div>
              </Tooltip>
            </div>

            <div style={{ margin: '32px' }}>
              <Tooltip place="right" tooltip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.">
                <div style={{ border: '1px solid #f0f0f0', borderRadius: '2px', padding: '4px' }}>Multiline tooltip</div>
              </Tooltip>
            </div>

            <div style={{ margin: '32px' }}>
              <Tooltip place="left" tooltip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.">
                <div style={{ border: '1px solid #f0f0f0', borderRadius: '2px', padding: '4px' }}>Multiline tooltip</div>
              </Tooltip>
            </div>

            <div style={{ margin: '32px' }}>
              <Tooltip place="bottom" tooltip="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.">
                <div style={{ border: '1px solid #f0f0f0', borderRadius: '2px', padding: '4px' }}>Multiline tooltip</div>
              </Tooltip>
            </div>
          </div>
        </div>
      )}
    </Container>
  ))