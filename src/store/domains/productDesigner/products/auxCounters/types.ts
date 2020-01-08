export interface ProductAuxCountersItem {
  product_id: number;
  aux_counter_1_description?: string;
  aux_counter_2_description?: string;
  aux_counter_3_description?: string;
  aux_counter_1_enabled?: string;
  aux_counter_2_enabled?: string;
  aux_counter_3_enabled?: string;
}

export interface ProductAuxCountersItemPrepared {
  id: number;
  auxCounter1Description: string;
  auxCounter2Description: string;
  auxCounter3Description: string;
  auxCounter1Enabled: boolean;
  auxCounter2Enabled: boolean;
  auxCounter3Enabled: boolean;
}

export interface ProductAuxCountersState { }
