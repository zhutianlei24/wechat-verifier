import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WechatEchoerModule } from './wechat-echoer/wechat-echoer.module';
import { WechatQrModule } from './wechat-qr/wechat-qr.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [WechatEchoerModule, WechatQrModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
