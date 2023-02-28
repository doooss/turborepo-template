import { css, useTheme } from '@emotion/react';
import { Button } from 'ui';

export default function Docs() {
  const theme = useTheme();
  return (
    <div>
      <h1
        css={css`
          color: ${theme.colors.blue[300]};
        `}
      >
        Docs
      </h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <button>Button</button>
      <Button color="netural">12312351325 isGood</Button>
      <Button color="blue">blue</Button>
      <Button color="green">green</Button>
      <Button color="magenta">magenta</Button>
      <Button color="orange">orange</Button>
      <Button color="purple">purple</Button>
      <Button color="red">red</Button>
      <Button color="teal">teal</Button>
      <Button color="yellow">yellow</Button>
      <Button color="dark-neutral">dark-neutral</Button>
      <select name="sample" id="sample">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <br />
      <Button color="orange">Button</Button>
    </div>
  );
}
