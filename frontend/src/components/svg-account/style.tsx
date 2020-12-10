import styled from 'styled-components';
import { media } from "../../utils/media";

export const SvgTopStyle = styled.div`
    position: absolute;
    left: -1.5rem;
    top: calc(37rem - 100vw);
    width: 100vw;
    z-index: -1;
    ${media.laptop}{
        top: calc(37rem - 100vw);
    }
`

export const SvgDownStyle = styled.div`
    position: absolute;
    left: -1.5rem;
    top: calc(26rem - 100vw);
    width: 100vw;
    z-index: -2;
    ${media.laptop}{
        top: calc(26rem - 100vw);
    }
`