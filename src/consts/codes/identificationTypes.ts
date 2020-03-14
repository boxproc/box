export enum identificationTypesConst {
  NO_IDENTIFICATION = 'N',
  PASSPORT = 'P',
  DRIVING_LICENSE = 'D',
  ID_CARD = 'I',
}

export const identificationTypesOptions = [
  { value: identificationTypesConst.NO_IDENTIFICATION, label: 'No Identification' },
  { value: identificationTypesConst.PASSPORT, label: 'Passport' },
  { value: identificationTypesConst.DRIVING_LICENSE, label: 'Driving license' },
  { value: identificationTypesConst.ID_CARD, label: 'ID card' },
];
