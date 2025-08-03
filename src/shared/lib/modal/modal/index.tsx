import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";

import Portal, { createContainer } from "../portal";
import { Icon } from '@/shared/ui/icon';
import { IconsArray } from '@/shared/enums/icons';

const MODAL_CONTAINER_ID = "modal-container-id";

type Props = {
  onClose?: () => void;
  children: React.ReactNode | React.ReactNode[];
};

const Modal = (props: Props) => {
  const { onClose, children } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  const handleClose: MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  > = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className='w-full h-full bg-black-100-70 fixed top-0 left-0 z-100' ref={rootRef} data-testid="wrap">
        <div className='absolute w-full h-full t:max-w-150 t:max-h-175 t:rounded-md bg-white-100 top-1/2 left-1/2 -translate-1/2 p-15'>
          <button
            type="button"
            className='absolute right-5 top-5'
            onClick={handleClose}
            data-testid="modal-close-button"
          >
            <Icon 
              icon={IconsArray.close}
              className='fill-black-200 w-7 h-7'
            />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
