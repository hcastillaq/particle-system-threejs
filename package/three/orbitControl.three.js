import{OrbitControls}from"three/examples/jsm/controls/OrbitControls";const defaultConfig={enableDamping:!0,dampingFactor:.25,enableZoom:!0,autoRotate:!0,autoRotateSpeed:.5};export const getOrbitControl=(t,o,e)=>{e=Object.assign(Object.assign({},defaultConfig),e);const a=new OrbitControls(t,o);return a.enableDamping=e.enableDamping,a.dampingFactor=e.dampingFactor,a.enableZoom=e.enableZoom,a.autoRotate=e.autoRotate,a.autoRotateSpeed=e.autoRotateSpeed||.3,a};