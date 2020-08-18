import React, { memo } from 'react'
import styled from 'styled-components'

import { ReactComponent as Pacman } from './pacman.svg'

interface ILoaderProps {
    visible: boolean
}

const Figure = styled.figure<ILoaderProps>`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    opacity: ${({ visible }) => Number(visible)};
`

const Loader = memo(({ visible = true }: ILoaderProps) => (
    <Figure visible={visible}>
        <Pacman />
    </Figure>
))

export default Loader
