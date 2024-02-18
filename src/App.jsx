import { Canvas } from '@react-three/fiber'
import './App.css'

const Cube = ({pos, sid, col}) => {
  return (
      <mesh position={pos}>
          <boxGeometry args={sid}/>
          <meshStandardMaterial color={col}/>
    </mesh>
  )
}

function App() {

  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={1.5}/>
      <ambientLight intensity={0.4}/>
      <group position={[0, -1, 0]}>
        <Cube pos={[1, 0, 0]} sid={[1.25, 1.25, 1.25]} col={"#b81037"}/>
        <Cube pos={[-1, 0, 0]} sid={[1.25, 1.25, 1.25]} col={"pink"}/>

        <Cube pos={[-1, 2, 0]} sid={[1.25, 1.25, 1.25]} col={"rgba(206, 66, 245, 0)"}/>
        <Cube pos={[1, 2, 0]} sid={[1.25, 1.25, 1.25]} col={"orange"}/>
      </group>
    </Canvas>
  )
}

export default App
