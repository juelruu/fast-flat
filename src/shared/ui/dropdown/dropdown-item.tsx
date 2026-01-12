import type { ISelectItem } from './dropdown.types';

export const DropdownItem = ({
  item,
  onClick,
}: {
  item: ISelectItem;
  onClick: () => void;
}) => <li onClick={() => onClick()}>{item.viewValue}</li>;
