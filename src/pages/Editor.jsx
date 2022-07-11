import React from 'react';

import { HtmlEditor, Image, Inject, Link,
QuickToolbar, RichTextEditorComponent, Toolbar } from "@syncfusion/ej2-react-richtexteditor";

import { Header } from "../components/Index.jsx"

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />

      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, Link, Image, QuickToolbar]} />
      </RichTextEditorComponent>

    </div>
  )
}

export default Editor