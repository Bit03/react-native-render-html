import React from 'react';
import { SelectableText } from "@astrocoders/react-native-selectable-text";

const HTMLText = (props) => {
  return (
      <SelectableText {...props} value={props.children} />
  );
}

export default HTMLText;