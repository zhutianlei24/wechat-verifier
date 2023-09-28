import { Controller, Get, Query } from '@nestjs/common';
import { WechatEchoerService } from './wechat-echoer.service';

@Controller('wechat-echoer')
export class WechatEchoerController {
  constructor(private readonly wechatEchoerService: WechatEchoerService) {}

  @Get()
  echo(@Query('signature') signature: string, @Query('timestamp') timestamp: string, @Query('nonce') nonce: string, @Query('echostr') echostr: string): string {
    console.log("echo function triggered");
    return(this.wechatEchoerService.wxSignatureCheck(signature, timestamp, nonce, echostr))
  }
}
