/* eslint-disable prettier/prettier */

import Svg, {type SvgProps, Path} from "react-native-svg";

const ChevronDown = (props: SvgProps) => (
  <Svg  
    viewBox="0 0 24 24" 
    width={props?.width || 24}
    height={props?.height || 24}
    fill={props?.fill || "none"}
    {...props}
  >
    <Path 
     d="M6 9L12 15L18 9" 
     stroke={props?.stroke || 'black'}
     stroke-width="2" 
     stroke-linecap="round" 
     stroke-linejoin="round"
    />
  </Svg>
);

export default ChevronDown;
