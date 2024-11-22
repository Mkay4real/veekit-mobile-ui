/* eslint-disable prettier/prettier */

/*
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 7L7.5 17M7.5 7L17.5 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
*/

import Svg, {type SvgProps, Path} from "react-native-svg";

const X = (props: SvgProps) => (
  <Svg  
    viewBox="0 0 25 24" 
    width={props?.width || 25}
    height={props?.height || 24}
    fill={props?.fill || "none"}
    {...props}
  >
    <Path 
     d="M17.5 7L7.5 17M7.5 7L17.5 17" 
     fill={props?.fill || '#000'}
     stroke={props?.stroke || 'black'}
     strokeWidth={props?.strokeWidth || 2}
     strokeLinecap={props?.strokeLinecap || 'round'}
     strokeLinejoin={props?.strokeLinejoin || 'round'}
    />
  </Svg>
);

export default X;