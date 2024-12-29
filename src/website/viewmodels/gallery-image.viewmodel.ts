export class GalleryImageViewModel {

    id: number;
    title: string;
    description: string;
    imageUrl: string;

    constructor(id: number, title: string, description: string, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}