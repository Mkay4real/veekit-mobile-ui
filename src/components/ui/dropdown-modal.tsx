/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */

import {
  forwardRef,
  useEffect,
  useState,
  type ForwardRefRenderFunction,
} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions
} from 'react-native';
import { GenericModal } from './generic-modal';
import { ModalCard } from './modal-card';
import tw from '../../lib/tailwind';
import type { SelectOption } from '../../types/SelectOption';
import { SearchInput } from './search-input';


type props = {
  title: string,
  modalTitle?: string,
  data: SelectOption[],
  onClose: () => void,
  onSelect?: (value: string, item?: SelectOption) => void,
  searchPlaceholder: string
};



export interface DropdownModalRef {
  toggleModal(): void,
  closeModal(): void
}



const ddm: ForwardRefRenderFunction<DropdownModalRef, props> = ({
  title = '',
  modalTitle = '',
  data = [],
  onClose,
  onSelect,
  searchPlaceholder
}, ref) => {

  const [searchValue, setSearchValue] = useState('')
  const [filteredList, setFilteredList] = useState<SelectOption[]>([])

  const handleSelect = (val: string, item: SelectOption) => {
    console.log('val currently: ', val);
    typeof onSelect === 'function' && onSelect(val, item)
    typeof onClose === 'function' && onClose()
  }

  const search = (val = '') => {
    console.log('searching for: ', val)
  }

  const renderOptions = () => {
    if (filteredList.length > 0) {
      return (
        <ScrollView>
          <>
            {filteredList.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  tw`w-full p-5 border-b border-gray-300 justify-content-center`
                ]}
                onPress={() => { handleSelect(item.value, item) }}
              >
                <Text style={[tw`text-md-title`]}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </>
        </ScrollView>
      )
    }
    return null
  }

  useEffect(() => {
    if (filteredList.length < 1) {
      setFilteredList([
        { label: "Select an option", value: 'none' },
        ...data
      ])
    }
  }, [data, filteredList])

  useEffect(() => {
    search(searchValue)
  }, [searchValue])

  const {  height: DEVICE_HEIGHT} = useWindowDimensions ()

  return (
    <GenericModal
      onClose={onClose}
      ref={ref}
    >
      <ModalCard title={modalTitle} bottom={0} hasCloseIcon={true} onClose={onClose}>
        <View style={[tw`justify-between `, {maxHeight: DEVICE_HEIGHT * 0.7}]}>
          <Text style={[tw`text-lg-bold `]}>{title}</Text>

          <View style={[tw`mb-5`]}>
            <SearchInput
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={setSearchValue}
            />

            <View style={[tw`mt-2 divide-y`]}>
              {renderOptions()}
            </View>

          </View>
        </View>
      </ModalCard>
    </GenericModal>
  );
};


export const DropdownModal = forwardRef<DropdownModalRef, props>(ddm);
