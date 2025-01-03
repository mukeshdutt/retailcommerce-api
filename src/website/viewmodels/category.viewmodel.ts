export class CategoryViewModel {
  id: number;
  name: string;
  description?: string;
  parentId: number;
  imageUrl?: string;

  constructor(id: number, name: string, description?: string, parentId?: number, imageUrl?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.parentId = parentId;
    this.imageUrl = imageUrl;
  }
}