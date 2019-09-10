import React, { ReactElement, Fragment, ReactNode } from 'react';
import { types } from '@storybook/addons';
import { Consumer } from '@storybook/api';
import { Link as RouterLink } from '@storybook/router';
import { styled } from '@storybook/theming';
import {
  SyntaxHighlighter as SyntaxHighlighterBase,
  Placeholder,
  DocumentFormatting,
  Link,
} from '@storybook/components';
import Markdown from 'markdown-to-jsx';
import { formatter } from './formatter';
import { PARAM_KEY } from './shared';

const Panel = styled.div(({ theme }) => ({
  padding: '16px',
  boxSizing: 'border-box',
  width: '100%',
  ...(theme.addonNotesTheme || {}),
}));

function read(param) {
  if (!param) {
    return undefined;
  }
  if (typeof param === 'string') {
    return param;
  }
  if ('disabled' in param) {
    return undefined;
  }
  if ('text' in param) {
    return param.text;
  }
  if ('markdown' in param) {
    return param.markdown;
  }
  return undefined;
}

export const SyntaxHighlighter = ({ className, children, ...props }) => {
  if (typeof className !== 'string') {
    return <code>{children}</code>;
  }
  const language = className.split('-');
  return (
    <SyntaxHighlighterBase
      language={language[1] || 'plaintext'}
      bordered
      format={false}
      copyable
      {...props}
    >
      {children}
    </SyntaxHighlighterBase>
  );
};

export const NotesLink = ({ href, children, ...props }) => {
  const isAbsoluteUrl = /^[a-z][a-z0-9+.-]*:/.test(href);
  if (isAbsoluteUrl) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} {...props}>
      {children}
    </RouterLink>
  );
};

const defaultOptions = {
  overrides: {
    code: SyntaxHighlighter,
    a: NotesLink,
  },
};

const mapper = ({ state, api }) => {
  const extraElements = Object.entries(api.getElements(types.NOTES_ELEMENT)).reduce(
    (acc, [k, v]) => ({ ...acc, [k]: v.render }),
    {}
  );
  const options = {
    ...defaultOptions,
    overrides: { ...defaultOptions.overrides, ...extraElements },
  };
  const story = state.storiesHash[state.storyId];
  const value = read(story ? api.getParameters(story.id, PARAM_KEY) : undefined);
  return { options, value };
};

const NotesPanel = ({ active }) => {
  if (!active) return null;
  return (
    <Consumer filter={mapper}>
      {({ options, value }) => {
        return value ? (
          <Panel className="addon-notes-container">
            <DocumentFormatting>
              <Markdown options={options}>{formatter(value)}</Markdown>
            </DocumentFormatting>
          </Panel>
        ) : null;
      }}
    </Consumer>
  );
};

export default NotesPanel;