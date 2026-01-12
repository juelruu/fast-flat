import type { ISelectItem } from './dropdown.types';

export const DropdownHost = ({
  selected,
  onClick,
}: {
  selected: ISelectItem;
  onClick: () => void;
}) => {
  return (
    <div onClick={() => onClick()}>
      <p>{selected.viewValue}</p>
    </div>
  );
};
