import { createPortal } from 'react-dom';
import { HINT_OVERLAY_SELECTOR } from '../hint-overlay';
import { DropdownHost } from './dropdown-host';
import type { ISelectItem } from './dropdown.types';
import { DropdownList } from './dropdown-list';

export const MyDropdown = ({ list }: { list: ISelectItem[] }) => {
  const overlay = document.querySelector(HINT_OVERLAY_SELECTOR);
  return (
    <>
      <DropdownHost selected={list[0]} onClick={() => {}} />
      {overlay &&
        createPortal(<DropdownList list={list} onSelect={() => {}} />, overlay)}
    </>
  );
};
