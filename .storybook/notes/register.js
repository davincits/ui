import * as React from 'react';
import addons from '@storybook/addons';
import { ADDON_ID, PANEL_ID } from './shared';
import Panel from './Panel';

function register(type) {
  addons.register(ADDON_ID, api => {
    addons.add(PANEL_ID, {
      type,
      title: 'Notes',
      route: ({ storyId }) => `/info/${storyId}`,
      match: ({ viewMode }) => viewMode === 'info',
      render: ({ active }) => <Panel key='notes' api={api} active={active} />,
    });
  });
}

register('panel');