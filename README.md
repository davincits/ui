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

### Exaples

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

### Exaples

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

To be continued...