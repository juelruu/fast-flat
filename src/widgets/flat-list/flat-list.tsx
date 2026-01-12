import type { TFlat } from '@/entities/flat';
import { FlatList } from '@/features';
import { CreateRentingForm } from '@/features/create-renting/ui/create-renting-form';
import { isNotNuN } from '@/shared';
import {
  ModalContext,
  MyModal,
  MyModalBackdrop,
  MyModalContent,
  MyModalTitle,
  MyModalTitleCloseButton,
} from '@/shared/ui';
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';

export function FlatListWidget() {
  const [openCreaterentingModal, setOpenCreaterentingModal] =
    useState<TFlat | null>(null);
  const navigate = useNavigate();
  const modalRef = useContext(ModalContext)?.current;

  return (
    <>
      <FlatList
        onOpen={(flat) => navigate(`flat-info/${flat.id}`)}
        onUpdateFlat={(flat) => navigate(`update-flat/${flat.id}`)}
        onCreateRenting={(flat) => setOpenCreaterentingModal(flat)}
      />
      {isNotNuN(openCreaterentingModal) &&
        isNotNuN(modalRef) &&
        createPortal(
          <MyModalBackdrop>
            <MyModal>
              <MyModalTitle title="Забронировать квартиру">
                <MyModalTitleCloseButton
                  onClose={() => setOpenCreaterentingModal(null)}
                />
              </MyModalTitle>
              <MyModalContent>
                <CreateRentingForm
                  onSuccess={() => {}}
                  flat={openCreaterentingModal}
                />
              </MyModalContent>
            </MyModal>
          </MyModalBackdrop>,
          modalRef
        )}
    </>
  );
}
