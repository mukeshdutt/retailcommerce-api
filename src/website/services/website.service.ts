import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { GalleryImage } from "src/shared/entities/gallery-image.entity";
import { GalleryImageViewModel } from "../viewmodels/gallery-image.viewmodel";

@Injectable()
export class WebsiteService {

    // Injecting all the repositories
    constructor(
        @InjectRepository(GalleryImage)
        private readonly websiteRepository: Repository<GalleryImage>,
    ) {}

    // Get all gallery images
    async getGalleryImages(): Promise<GalleryImageViewModel[]> {
        const images = await this.websiteRepository.find({where: {isActive: true}});
        return images.map((image) => new GalleryImageViewModel(image.imageId, image.title, image.description, image.imageUrl));
    }
}