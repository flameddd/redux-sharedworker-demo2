import React from 'react';
import { useDispatch } from 'react-redux';
import  '@google/model-viewer';
import './App.css';

function App() {
  const [src, setSrc] = React.useState('');
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="header">
        <button
          onClick={() => setSrc("https://modelviewer.dev/shared-assets/models/Astronaut.glb")}
        >
          Astronaut
        </button>
        <button
          onClick={() => setSrc("https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Corset/glTF-Binary/Corset.glb")}
        >
          Corset
        </button>
        <button
          onClick={() => setSrc("https://cdn.rawgit.com/cx20/gltf-test/master/sampleModels/Duck/glTF-Binary/Duck.glb")}
        >
          Duck
        </button>
        <button
          onClick={() => setSrc("https://threejs.org/examples/models/gltf/Horse.glb")}
        >
          Horse
        </button>
        <button onClick={() => dispatch({ type:'model/ULeft' }) } style={{ marginLeft: "15px" }}>
          ⬁
        </button>
        <button onClick={() => dispatch({ type:'model/URight' }) }>
          ⬀
        </button>
        <button onClick={() => dispatch({ type:'model/BLeft' }) }>
          ⬃
        </button>
        <button onClick={() => dispatch({ type:'model/BRight' }) }>
          ⬂
        </button>
        <button onClick={() => window.open("/","_blank",'PopUp',`${Date.now()}`,'scrollbars=1,menubar=0,resizable=1,width=850,height=500')}>
          Open
        </button>
      </div>
      <model-viewer
        style={{ width: '100%', height: '500px' }}
        id="modelViewer"
        src={src}
      />
    </div>
  );
}

export default App;
