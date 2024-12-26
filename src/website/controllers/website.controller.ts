import { Controller, Get, Post } from '@nestjs/common';

@Controller('website')
export class WebsiteController {

    @Get('gallery/images')
    async getGalleryImages(): Promise<void> {
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
