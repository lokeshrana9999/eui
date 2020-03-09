import React, { useState, useCallback, useMemo, useContext } from 'react';
import { LiveContext } from 'react-live';
// import { EuiFlexGroup, EuiFlexItem } from '../flex';
// import { EuiSpacer } from '../spacer';
import { EuiCodeEditor } from '../code_editor';
// import { CommonProps } from '../common';

import 'brace/theme/github';
import 'brace/mode/jsx';
import 'react-brace/snippets/javascript';
import 'brace/ext/language_tools';

const CodeEditor = ({
  code,
  disabled,
  language,
  onChange,
  style,
  theme,
}: any) => {
  const getCode = useMemo(() => code, [code]);
  const [editorCode, setEditorCode] = useState(getCode);
  const updateContent = useCallback(
    code => {
      setEditorCode(code);
      onChange(code);
    },
    [editorCode]
  );

  return (
    <EuiCodeEditor
      width={'100%'}
      value={editorCode}
      onChange={updateContent}
      style={style}
      name="blah"
      theme="github"
      height="300px"
      mode="jsx"
      showGutter={true}
      setOptions={{
        fontSize: '14px',
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
      }}
    />
  );
};

export const LiveEditor = ({ ...props }: any) => {
  const { code, language, theme, disabled, onChange } = useContext(LiveContext);
  return (
    <CodeEditor
      {...props}
      theme={theme}
      code={code}
      language={language}
      disabled={disabled}
      onChange={onChange}
    />
  );
};
