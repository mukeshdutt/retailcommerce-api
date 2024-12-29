// Required dependencies
import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

// Import required modules
import { WebsiteService } from '../services/website.service';
import { GalleryImageViewModel } from '../viewmodels/gallery-image.viewmodel';
import { sendErrorResponse, sendSuccessResponse } from 'src/common/utils/response.util';
import { ErrorCodes } from 'src/common/constants/error-codes';

@Controller('website')
export class WebsiteController {
    constructor(private readonly websiteService: WebsiteService) {}

    // Get all gallery images
    @Get('gallery-images')
    async getGalleryImages(@Res() response: Response): Promise<void> {


        console.log(ErrorCodes[1001]);

        const images = await this.websiteService.getGalleryImages();
        if(images.length === 0) {
            return sendErrorResponse(response, HttpStatus.NOT_FOUND, ErrorCodes.NO_GALLERY_IMAGES);
        }
        sendSuccessResponse(response, images);
    }

    @Get('partners')
    async getPartners(): Promise<void> {
    }

    @Get('testimonials')
    async getTestimonials(): Promise<void> {
    }

    @Post('subscribe')
    async subscribe(): Promise<void> {
    }

    @Post('filters')
    async filters(): Promise<void> {
    }
}
