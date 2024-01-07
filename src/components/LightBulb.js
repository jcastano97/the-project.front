
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"

function rb() { // random binary
    return Math.round(Math.random());
}

export const LightBulb = () => {
    const selectedTheme = useSelector((state) => state.theme.selectedTheme)

    const [matrix, setMatrix] = useState([
        ['-','-','-','-','-',rb(),rb(),rb(),'-','-','-','-','-'],
        ['-','-','-',rb(),rb(),rb(),rb(),rb(),rb(),rb(),'-','-','-'],
        ['-','-',rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),'-','-'],
        ['-','-',rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),'-','-'],
        ['-',rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),'-'],
        ['-',rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),'-'],
        [rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb()],
        ['-',rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),'-'],
        ['-',rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),'-'],
        ['-','-',rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),'-','-'],
        ['-','-',rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),rb(),'-','-'],
        ['-','-','-',rb(),rb(),rb(),rb(),rb(),rb(),rb(),'-','-','-'],
        ['-','-','-',rb(),rb(),rb(),rb(),rb(),rb(),rb(),'-','-','-'],
        ['-','-','-','-',rb(),rb(),rb(),rb(),rb(),'-','-','-','-'],
        ['-','-','-','-',rb(),rb(),rb(),rb(),rb(),'-','-','-','-'],
        ['-','-','-','-',rb(),rb(),rb(),rb(),rb(),'-','-','-','-'],
        ['-','-','-','-',rb(),rb(),rb(),rb(),rb(),'-','-','-','-'],
        ['-','-','-','-','-',rb(),rb(),rb(),'-','-','-','-','-'],
        ['-','-','-','-','-',rb(),rb(),rb(),'-','-','-','-','-'],
        ['-','-','-','-','-','-',rb(),'-','-','-','-','-','-'],
    ]);

    useEffect(() => {
        let matrixX = 0, matrixY = 0
        const nextLeftToRightMatrix = () => {
            if (matrixX < matrix[matrixY].length - 1) {
                matrixX++
            } else {
                matrixX = 0
                if (matrixY < matrix.length - 1) {
                    matrixY++
                } else {
                    matrixY = 0
                }
            }
        }
        const nextValidLeftToRightMatrix = () => {
            nextLeftToRightMatrix()
            let validNext = false
            while(!validNext) {
                if (matrix[matrixY][matrixX] !== '-') {
                    validNext = true
                } else {
                    nextLeftToRightMatrix()
                }
            }
        }
        const linearChangeAnimation = () => {
            const nextMatrix = [...matrix]
            nextValidLeftToRightMatrix()
            nextMatrix[matrixY][matrixX] = rb()
            nextValidLeftToRightMatrix()
            nextMatrix[matrixY][matrixX] = rb()
            setMatrix(nextMatrix)
        }
    
        const intervalId = setInterval(linearChangeAnimation, 20);
        return () => clearInterval(intervalId);
    }, [])

    return (<>
        <div className={`text-sm text-${selectedTheme}-primary bg-${selectedTheme}-bg`}>
            { matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                    {row.map((cell, colIndex) => (
                        <div key={colIndex} className={`mx-2 ${cell === '-' ? 'invisible' : ''}`}>
                            {cell}
                        </div>))}
                </div>))}
        </div>
    </>)
}