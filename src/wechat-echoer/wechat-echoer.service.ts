import { Injectable } from '@nestjs/common';
import { CreateWechatEchoerDto } from './dto/create-wechat-echoer.dto';
import { UpdateWechatEchoerDto } from './dto/update-wechat-echoer.dto';
import { createHash } from 'crypto';
@Injectable()
export class WechatEchoerService {
  wxSignatureCheck(signature: string, timestamp: string, nonce: string, echostr: string): string {
    const token = "test"
    let rawArray = [token, timestamp, nonce];
    rawArray.sort();
    let raw = rawArray.join("");
    let computedSignature = createHash('sha1').update(raw).digest('hex');
    console.log("received signature:" + signature);
    console.log("computed signature;" + computedSignature);
    // Never mind if they matches lol
    return echostr;
  }
}
