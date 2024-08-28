export class ProductViewModel {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    categoryId?: number;
    subCategoryId?: number;
  
    constructor(id: number, name: string, description: string, price: number, imageUrl: string, categoryId: number, subcategoryId: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.categoryId = categoryId;
        this.subCategoryId = subcategoryId;
    }
  }
