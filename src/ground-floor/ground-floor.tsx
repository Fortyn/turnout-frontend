import React from "react";
import {Scale} from "../common/scale";

interface GroundFloorProps {

}

export const GroundFloor: React.FunctionComponent<GroundFloorProps>
    = (props) => {
    const lengthX = Scale.groundFloor.x;
    const lengthZ = Scale.groundFloor.z;
    const lengthY = Scale.groundFloor.y;
    const height = Scale.groundFloor.floorHeight;
    const centerX = lengthX / 2;
    const centerZ = lengthZ / 2;
    return (
        <mesh>
            {/*<mesh position={[centerX, height / 2, centerZ]}>*/}
            {/*    <boxBufferGeometry attach="geometry" args={[lengthX, height, lengthZ]}/>*/}
            {/*    <meshStandardMaterial attach="material" color={0x00ffff} opacity={0.9} transparent/>*/}
            {/*</mesh>*/}
            <mesh position={[0, lengthY / 2, 0]}>
                {props.children}
            </mesh>
        </mesh>
    );
}