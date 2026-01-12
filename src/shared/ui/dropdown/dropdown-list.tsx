import { DropdownItem } from './dropdown-item';
import type { ISelectItem } from './dropdown.types';

export const DropdownList = ({
  list,
  onSelect,
}: {
  list: ISelectItem[];
  onSelect: (item: ISelectItem) => void;
}) => (
  <ul>
    {list.map((item, index) => (
      <DropdownItem key={index} item={item} onClick={() => onSelect(item)} />
    ))}
  </ul>
);
