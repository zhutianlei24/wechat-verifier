import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WechatEchoerModule } from './wechat-echoer/wechat-echoer.module';

@Module({
  imports: [WechatEchoerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
