# Davinci UI

[Storybook](https://davincits.github.io/ui/storybook)

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
| `value` | `text` | none | Field value |
| `type` | `text` | none | Field type (password, mail, phone, etc) |
| `autoheight` | `bool` | true | Auto resize multiline field |
| `multiline` | `bool` | false | Multiline field (textarea) |
| `resize` | `bool` | true | Use with multiline. Able to resize |
| `prefix` | `text | Element` | none |  |
| `postfix` | `text | Element` | none |  |

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

To be continued...