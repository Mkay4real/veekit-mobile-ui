/* eslint-disable prettier/prettier */

import Svg, {type SvgProps, Path} from "react-native-svg";

const SearchOutline = (props: SvgProps) => (
  <Svg  
    viewBox="0 0 21 20" 
    width={props?.width || 21}
    height={props?.height || 20}
    fill={props?.fill || "none"}
    {...props}
  >
    <Path 
     d="M18 17.5L14.375 13.875M16.3333 9.16667C16.3333 12.8486 13.3486 15.8333 9.66667 15.8333C5.98477 15.8333 3 12.8486 3 9.16667C3 5.48477 5.98477 2.5 9.66667 2.5C13.3486 2.5 16.3333 5.48477 16.3333 9.16667Z" 
     stroke={props?.stroke || '#667085'}
     stroke-width="1.67" 
     stroke-linecap="round" 
     stroke-linejoin="round"
    />
  </Svg>
);

export default SearchOutline;
