export class CategoryViewModel {
  id: number;
  name: string;
  description?: string; // Optional property
  subcategories?: SubcategoryViewModel[]; // Optional property for subcategories

  constructor(id: number, name: string, description?: string, subcategories?: SubcategoryViewModel[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.subcategories = subcategories;
  }
}

export class SubcategoryViewModel {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}