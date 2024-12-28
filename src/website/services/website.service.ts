import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { GalleryImage } from "src/shared/entities/gallery-image.entity";

@Injectable()
export class WebsiteService {
    constructor(
        @InjectRepository(GalleryImage)
        private readonly websiteRepository: Repository<GalleryImage>,
    ) {}
}