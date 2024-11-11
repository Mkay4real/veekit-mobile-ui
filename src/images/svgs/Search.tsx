/* eslint-disable prettier/prettier */

import Svg, { type SvgProps, Path } from "react-native-svg"

const Search = (props: SvgProps) => (
  <Svg
    width={props?.width || 20}
    height={props?.height || 20}
    fill={props?.fill || "#979797"}
    {...props}
  >
    <Path
      d="M8.6 17.306c4.748 0 8.598-3.874 8.598-8.653S13.348 0 8.6 0C3.85 0 0 3.874 0 8.653c0 4.78 3.85 8.653 8.6 8.653Z"
      fill={props.fill}
    />
    <Path
      opacity={0.4}
      d="M18.674 19.956a1.32 1.32 0 0 1-.889-.385l-2.036-2.38a1.087 1.087 0 0 1-.08-1.522.975.975 0 0 1 1.387 0l2.561 2.05c.37.377.483.938.29 1.43a1.335 1.335 0 0 1-1.18.851l-.053-.044Z"
      fill={props.fill}
    />
  </Svg>
)

export default Search;
