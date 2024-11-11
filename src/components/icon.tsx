/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import { StyleSheet, View} from 'react-native'
import { type FC} from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { getSvgIcon } from '../common/utils'

type props = {
iconType: 'svg' | 'IonIcons' | 'MaterialCommunityIcons',
icon: string,
color: string
size?: number

}

export const Icon: FC<props> = ({
icon,
iconType,
color,
size
}) => {

    const renderIcon = () => {
    
        if(icon && iconType === 'IonIcons') {
          return <IonIcons
            name={icon} 
            style={styles.icon} 
            color={color}
            size={size ? size : 20}
          />
        }
        if(icon && iconType === 'MaterialCommunityIcons') {
            return <MaterialCommunityIcons
            name={icon} 
            style={styles.icon} 
            color={color}
            size={size ? size : 20}
          />
        }
       
        else if(iconType === 'svg'){
          const ret = getSvgIcon(icon)
            if(typeof ret === 'undefined'){
              return <></>
            }
            else{
              const SvgIcon = ret.value
              return <View style={{marginRight: 10}}>
             <SvgIcon fill={color}/>
             </View>
            }
           
          
       
        }
        else {
            return <></>
        }
      }

    return (
        <View style={styles.container}>
           {renderIcon()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    icon: {

    }
})