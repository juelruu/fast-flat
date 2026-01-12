import { MyOverlay } from '../overlay';

export const HINT_OVERLAY_NAME = 'hints';

export const HINT_OVERLAY_SELECTOR = `#${HINT_OVERLAY_NAME}`;

export const HintOverlay = () => (
  <>
    <MyOverlay name="hints" />
  </>
);
