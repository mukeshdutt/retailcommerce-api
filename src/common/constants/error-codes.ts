export enum ErrorCodes {
  NO_HOT_PRODUCTS = '1000',
  NO_PRODUCTS_FOR_CATEGORY = '1001',
  NO_GALLERY_IMAGES = '1002',
  NO_CATEGORY = '1003',
}

export const ErrorMessages = {
  [ErrorCodes.NO_HOT_PRODUCTS]: 'No hot products found',
  [ErrorCodes.NO_PRODUCTS_FOR_CATEGORY]: 'No products found for this category',
  [ErrorCodes.NO_GALLERY_IMAGES]: 'No gallery images found',
  [ErrorCodes.NO_CATEGORY]: 'No categories found',
};