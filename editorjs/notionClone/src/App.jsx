import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link"
import RawTool from "@editorjs/raw"
import { SimpleImage } from "@editorjs/simple-image";

import { useEffect, useRef } from "react";

function App() {
  const editorRef = useRef(null);
  const sanitizeConfig = {
    'tag-name': true,
    'another-tag': {
      'attribute-name': true
    }
  }
  useEffect(() => {
    editorRef.current = new EditorJS({
      placeholder: "Lets write some awsome story",
      inlineToolbar: ['link', 'marker', 'bold', 'italic'],
      holder: editorRef.current,
      sanitize: sanitizeConfig,
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['marker', 'link'],
          config: {
            placeholder: "Enter a Header",
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        linkTool: {
          class: LinkTool,
          config:{
            endpoint: 'https://gazi-ehsanul-haque.netlify.app'
          }
        },
        raw: RawTool,
    
      },
      data: {},
      onReady: () => {
        console.log("Editor is ready to work");
      },
      onChange: (api, event) =>{
        console.log("Input fields are chnaging")
      },
      autofocus: false,
      logLevel: "VERBOSE",
      // readOnly: true,
    });
    // editor.save().then(result => console.log("Article Data",result)).catch(error=> console.log("Error Data",error.message))
    try {
      editorRef.current.isReady.then(result=>{
        console.log("Editor is ready to work :3")
      }).catch(error=>{
        console.log(`Editor.log initializing fail because of ${error.message}`)
      })
    } catch (error) {
      console.error("Error: ", error.message)
    }
    

    return () =>{
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    }
  }, []);

  const saveEditorContent = async () =>{
    if (editorRef.current) {
      const saveData = editorRef.current.save();
      console.log(saveData)
    }
  }

  return (
    <>
      <h1>Notion Clone</h1>
      <div  id="editorId" ref={editorRef} placeholder="Write a status"></div>
      <button onClick={saveEditorContent} className="btn btn-primary">Save Editor content</button>
    </>
  );
}

export default App;
