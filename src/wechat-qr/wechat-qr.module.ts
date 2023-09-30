import { Module } from '@nestjs/common';
import { WechatQrService } from './wechat-qr.service';
import { WechatQrController } from './wechat-qr.controller';

@Module({
  controllers: [WechatQrController],
  providers: [WechatQrService],
})
export class WechatQrModule {}
