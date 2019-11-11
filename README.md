# Davinci UI

[Storybook](https://davincits.github.io/ui/storybook)

### Current version

```
v0.4.0
```

### Usage

Add to dependencies (package.json)

```
"ui": "git+https://github.com/davinci/ui.git#v0.4.0"
```

Import in main `app.js` file

```
import 'ui/index.css';
import 'ui/icon.css'; // in case you want to use icons
```

## Grid

### Import

```jsx
import { Row, Col } from 'ui';
```

### Props

#### Row

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `gutter` | `bool | string` | none | Inner padding in `Col` |

#### Col

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `number | string` | none | Column width in percents of `Row` width |
| `auto` | `bool` | none | Column auto width  |

### Example

```jsx
function Example() {
  return (
    <Row gutter>
      <Col>Column 1/3</Col>
      <Col>Column 1/3</Col>
      <Col>Column 1/3</Col>
    </Row>
  );
}

function Example() {
  return (
    <Row gutter="small">
      <Col width={25}>Column 1/4</Col>
      <Col width={50}>Column 1/2</Col>
      <Col width={25}>Column 1/4</Col>
    </Row>
  );
}
```

---

## Button

### Import

```jsx
import { Button } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `primary` | `bool` | false | Primary style |
| `danger` | `bool` | false | Danger style |
| `warning` | `bool` | false | Warning style |
| `success` | `bool` | false | Success style |
| `stroke` | `bool` | false | Unfilled style |
| `uppercase` | `bool` | false | Uppercased text |
| `block` | `bool` | false | Full width |
| `unbordered` | `bool` | false | Withoud border |
| `large` | `bool` | false | Large button |
| `small` | `bool` | false | Small button |
| `active` | `bool` | false | Emulate active (click) state |
| `hover` | `bool` | false | Emulate hpver state |
| `focus` | `bool` | false | Emulate focus state |
| `loading` | `bool` | false | Loading state |

### Example

```jsx
function Example({ loading, onClick }) {
  return (
    <div>
      <Button
        onClick={onClick}
        primary
        stroke
        uppercase
      >
        Button text
      </Button>
      <Button
        onClick={onClick}
        loading={loading}
        danger
        stroke
        unbordered
      >
        Button text
      </Button>
    </div>
  );
}
```

---

## Text field

### Import

```jsx
import { TextField } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `text | Element` | none | Field label |
| `inline` | `bool` | false | Put label right of the field |
| `error` | `bool` | false | Error state |
| `search` | `bool` | false | Additional control for search type of field |
| `onChange` | `func` | none | Field on change handler |
| `onBlur` | `func` | none | Field on blur handler |
| `type` | `text` | none | Field type (password, mail, phone, etc) |
| `autoheight` | `bool` | true | Auto resize multiline field |
| `multiline` | `bool` | false | Multiline field (textarea) |

### Example

```jsx
function Example({ value, error, onChange }) {
  return (
    <TextField label="Your name" value={value} onChange={onChange} error={error} />
  );
}
```

---

## File field

### Import

```jsx
import { FileField } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `error` | `bool` | false | Error state |
| `multiple` | `bool` | false | File multiselect |
| `fileTypes` | `string` | none | Coma separated file types the field should accept |
| `maxSize` | `number` | none | Max file size in bites |
| `onChange` | `func` | none | On file change handler |
| `onError` | `func` | none | On file error handler |

### Example

```jsx
import {
  FileField,
  FILES_COUNT_ERROR,
  FILE_TYPE_ERROR,
  FILE_SIZE_ERROR,
} from 'ui';

class Example extends Component {
  state = { error: false }

  onChange = (files) => {}

  onError = (error) => {
    switch (error) {
      case FILES_COUNT_ERROR: ...
        break;
      case FILE_TYPE_ERROR: ...
        break;
      case FILE_SIZE_ERROR: ...
        break;
      default: ...
    }
    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;
    return (
      <FileField
        label="Choose a file"
        onChange={this.onChange}
        onError={this.onError}
        fileTypes=".txt,.md"
        maxSize={1024 * 1024}
        error={error}
      />
    );
  }
}
```

---

## Checkbox

### Import

```jsx
import { Checkbox } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string | element` | none | Label |
| `value` | `bool` | none | Checked state |
| `onChange` | `func` | none | On change handler |

### Example

```jsx
function Example({ value, onChange }) {
  return (
    <Checkbox
      label="I am agree with terms"
      value={value}
      onChange={onChange}
    />
  );
}
```

---

## Radio

### Import

```jsx
import { RadioGroup, Radio } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function Example({ value, onChange }) {
  return (
    <RadioGroup
      onChange={onChange}
      value={value}
    >
      <Radio value={1}>Input label #1</Radio>
      <Radio value={2}>Input label #2</Radio>
      <Radio value={3}>Input label #3</Radio>
    </RadioGroup>
  );
}
```

---

## Table

### Import

```jsx
import { Table, TR, TH, TD } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function Example() {
  return (
    <Table cellsWidth={[13, 49, 11, 13, 14]}>
      <TR>
        <TH>ROOM</TH>
        <TH>Interval</TH>
        <TH>Count</TH>
        <TH>Price, €</TH>
        <TH>Total, €</TH>
      </TR>
      <TR>
        <TD>Double</TD>
        <TD>12/12/20 - 13/12/20</TD>
        <TD>5</TD>
        <TD align="right">25.00</TD>
        <TD align="right">125.00</TD>
      </TR>
      <TR>
        <TD width="86" align="right">Total</TD>
        <TD width="14" align="right">€125</TD>
      </TR>
    </Table>
  );
}
```

---

## Slider

### Import

```jsx
import { Slider } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function Example({ value = 20, onChange }) {
  return (
    <Slider
      min={10}
      max={100}
      value={value}
      onChange={onChange}
    />
  );
}
```

---

## Range

### Import

```jsx
import { Range } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function Example({ value = [20, 80], onChange }) {
  return (
    <Range
      min={10}
      max={100}
      value={value}
      onChange={onChange}
    />
  );
}
```

---

## Tooltip

### Import

```jsx
import { Tooltip } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function Example() {
  return (
    <Tooltip tooltip="Tooltip content...">Simple tooltip</Tooltip>
  );
}
```

---

## Tabs

### Import

```jsx
import { Tabs, Tab, TabList, TabPanel } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function Example() {
  return (
    <Tabs>
      <TabList>
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
      <TabPanel>First tab content</TabPanel>
      <TabPanel>Second tab content</TabPanel>
      <TabPanel>Third tab content</TabPanel>
    </Tabs>
  );
}
```

---

## DropDown

### Import

```jsx
import { DropDown } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function Example() {
  return (
    <DropDown label="Example" buttonContent="Click me">
      Lorem ipsum dolor sit amet...
    </DropDown>
  );
}
```

---

## Select

### Import

```jsx
import { Select } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
const OPTIONS = [
  { value: 'first', label: 'First option' },
  { value: 'second', label: 'Second option' },
  { value: 'third', label: 'Third option' },
];

function Example({ value, onChange }) {
  return (
    <Select
      label="Example"
      value={value}
      options={OPTIONS}
      onChange={onChange}
    />
  );
}
```

---

## MultiSelect

### Import

```jsx
import { MultiSelect } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
const OPTIONS = [
  { value: 'first', label: 'First option' },
  { value: 'second', label: 'Second option' },
  { value: 'third', label: 'Third option' },
];

function Example({ value, onChange }) {
  return (
    <MultiSelect
      label="Example"
      value={value}
      options={OPTIONS}
      onChange={onChange}
    />
  );
}
```

---

## DropArea

### Import

```jsx
import { DropArea } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function Example({ onChange }) {
  return (
    <DropArea onChange={onChange}>Drag file to this area</DropArea>
  );
}
```

---

## Gallery

### Import

```jsx
import { Gallery } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
const IMAGES = [
  'https://dummyimage.com/600x400/ccc/fff',
  'https://dummyimage.com/600x400/aaa/eee',
  'https://dummyimage.com/600x400/777/ddd',
];

function Example() {
  return (<Gallery images={IMAGES} />);
}
```

---

## Dialog

### Import

```jsx
import { Dialog } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function Example({ isOpen, onClose }) {
  return (
    <Dialog
      title="Dialog title"
      actions={[
        <Button>First</Button>,
        <Button>Second</Button>,
      ]}
      onClose={onClose}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,...
    </Dialog>
  );
}
```

---

## Common Dialogs

### Import

```jsx
import { DialogsContainer, AlertDialog, ConfirmDialog } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function App() {
  return (
    <SomeProvider>
      <Router />
      <DialogsContainer />
    </SomeProvider>
  );
}

class Example extends Component {
  ...

  async someMethod() {
    const result = await ConfirmDialog({ title: 'Title', message: 'Some message' });
    if (result) {
      // Confirmed
    } else {
      // Canceled
    }
  }

  async someAnotherMethod() {
    await AlertDialog({ title: 'Title', message: 'Some message' });
    // execute after close AlertDialog
  }

  ...
}
```

---

## Full size modal

### Import

```jsx
import { FullSizeModal } from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function Example({ isOpen, onClose  }) {
  <FullSizeModal
    title="Modal title"
    footer={<div>Footer</div>}
    onClose={onClose}
  >
    <p>Press ESC to close this window</p>
  </FullSizeModal>
}
```

---

## Toasts

### Import

```jsx
import {
  ToastrContainer,
  Toast,
  ToastInfo,
  ToastSuccess,
  ToastWarning,
  ToastDanger,
} from 'ui';
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | | | |

### Example

```jsx
function App() {
  return (
    <SomeProvider>
      <Router />
      <ToastrContainer />
    </SomeProvider>
  );
}

class Example extends Component {
  ...

  async someMethod() {
    Toast({ title: 'Title', message: 'Common message' });
    ToastInfo({ title: 'Title', message: 'Info message' });
    ToastSuccess({ title: 'Title', message: 'Success message' });
    ToastWarning({ title: 'Title', message: 'Warning message' });
    ToastDanger({ title: 'Title', message: 'Danger message' });
    Toast({ title: 'Title', message: 'With custom delay', delay: 10000 });
    Toast({ title: 'Title', message: 'Without delay', delay: 0 });
  }

  ...
}
```

---

To be continued...
