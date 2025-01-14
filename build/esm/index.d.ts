/// <reference types="react" />
import { Config } from 'chessground/config';
interface Props {
    width?: number;
    height?: number;
    contained?: boolean;
    config?: Partial<Config>;
}
declare function Chessground({ width, height, config, contained, }: Props): JSX.Element;
export default Chessground;
