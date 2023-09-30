import { Controller, Get, Param } from '@nestjs/common';
import { WechatQrService } from './wechat-qr.service';

@Controller('wechat-qr')
export class WechatQrController {
  constructor(private readonly wechatQrService: WechatQrService) {}

  @Get()
  async createQr() {
    return await this.wechatQrService.createQr();
  }

  
  @Get("/user-info/:openid") 
  async getUserInfo(@Param() openid) {
    return await this.wechatQrService.getUserInfo(openid.openid);
  }

}
