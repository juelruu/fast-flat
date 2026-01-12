export enum EFlatPromotionType {
  unknown,
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

export type TGetFlatListResponse = {
  items: TFlat[];
  page: number;
  pages: number;
  size: number;
  total: number;
};
export type TGetPrivateFlatListResponse = TFlat[];
export type TGetFlatResponse = TFlat;
export type TGetRentingListResponse = TFlat[];

export type TPostFlatRequestData = Omit<
  TFlat,
  'id' | 'user' | 'type_promotion'
>;
export type TUpdateFlatRequestData = Omit<
  TFlat,
  'id' | 'user' | 'type_promotion'
>;

export type TCreateRentingFlatRequestData = {
  lease_range: {
    start: string;
    end: string;
  };
  count_guest: number;
  flat_id: string;
};

export type TCreateRentingFlatFormData = {
  lease_range: {
    start: Date;
    end: Date;
  };
  count_guest: number;
  flat_id: string;
};
