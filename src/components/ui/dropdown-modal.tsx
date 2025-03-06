/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import {
  forwardRef,
  useEffect,
  useState,
  useCallback,
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
    typeof onSelect === 'function' && onSelect(val, item)
    typeof onClose === 'function' && onClose()
  }

  const search = useCallback((val = '') => {
    if (!val.trim()) {
      setFilteredList([
        { label: "Select an option", value: 'none' },
        ...data
      ])
      return
    }
    const filtered = data.filter(item => 
      item.label.toLowerCase().includes(val.toLowerCase()) ||
      item.value.toLowerCase().includes(val.toLowerCase())
    )
    
    setFilteredList([
      { label: "Select an option", value: 'none' },
      ...filtered
    ])
  }, [data]);

  useEffect(() => {
    // Initialize filtered list with data
    setFilteredList([
      { label: "Select an option", value: 'none' },
      ...data
    ])
  }, [data])
  useEffect(() => {
    // Handle search when searchValue changes
    search(searchValue)
  }, [searchValue, search])

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

  const { height: DEVICE_HEIGHT } = useWindowDimensions()
  return (
    <GenericModal
      onClose={onClose}
      ref={ref}
    >
      <ModalCard title={modalTitle} bottom={0} hasCloseIcon={true} onClose={onClose}>
        <View style={[tw`justify-between`, {maxHeight: DEVICE_HEIGHT * 0.7}]}>
          <Text style={[tw`text-lg-bold`]}>{title}</Text>
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