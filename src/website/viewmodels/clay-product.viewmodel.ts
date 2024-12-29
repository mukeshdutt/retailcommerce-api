export class ClayProductViewModel {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    brand: string;
    countryOfOrigin: string;
    categoryId?: number;
  
    constructor(id: number, name: string, description: string, imageUrl: string, brand: string, countryOfOrigin: string, categoryId: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.brand = brand;
        this.countryOfOrigin = countryOfOrigin;
        this.categoryId = categoryId
    }
}