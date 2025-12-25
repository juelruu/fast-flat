export enum EFlatPromotionType {
  unknown
}

export type TFlat = {
  id: string;
  cost: number;
  user: {
    email: 'user@example.com';
    telegram_contact: 'string';
  };
  quadrature: number;
  floor: number;
  address: string;
  is_active: boolean;
  type_promotion: EFlatPromotionType;
};

export type TGetFlatListResponse = TFlat[]