import * as BABYLON from 'babylonjs';

init();

var scene; 

function init() {
    console.log('initialize environment')

    var scene = buildScene(); 

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(() => {scene.render()});
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", () => {engine.resize()});
}