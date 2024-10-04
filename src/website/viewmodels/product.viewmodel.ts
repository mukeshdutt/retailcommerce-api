export class ProductViewModel {
    id: number;
    name: string;
    description: string;
    specification: string;
    features: string;
    modelNumber: string;
    price: number;
    imageUrl: string;
    categoryId?: number;
    subCategoryId?: number;
  
    constructor(id: number, name: string, description: string, specification: string, features: string, modelNumber: string, price: number, imageUrl: string, categoryId: number, subcategoryId: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.specification = specification;
        this.features = features;
        this.modelNumber = modelNumber;
        this.price = price;
        this.imageUrl = imageUrl;
        this.categoryId = categoryId;
        this.subCategoryId = subcategoryId;
    }
  }
