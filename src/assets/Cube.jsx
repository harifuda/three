const Cube = ({pos, sid, col}) => {
    return (
        <mesh position={pos}>
            <boxGeometry args={sid}/>
            <meshStandardMaterial color={col}/>
      </mesh>
    )
}