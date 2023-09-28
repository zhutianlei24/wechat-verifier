import { Module } from '@nestjs/common';
import { WechatEchoerService } from './wechat-echoer.service';
import { WechatEchoerController } from './wechat-echoer.controller';

@Module({
  controllers: [WechatEchoerController],
  providers: [WechatEchoerService],
})
export class WechatEchoerModule {}
