import { JsonController, Get, Param, Post, Body, HttpCode } from 'routing-controllers';
import Advertisment from './entity';

@JsonController()
export default class AdvertismentController {

    @Get('/advertisments/:id')
    getAd(
        @Param('id') id: number
    ) {
        return Advertisment.findOne(id);
    }
    
    @Get('/advertisments')
    async allAds() {
      const advertisments = await Advertisment.find()
      return { advertisments }
    }

    @Post('/advertisments')
    @HttpCode(201)
    postAd(
        @Body() ad: Advertisment
    ) {
    return ad.save()
    }

}