import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WechatQrService {
  access_token = "";
  async createQr() {
    const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${process.env.APPID}&secret=${process.env.APPSECRET}`;
    await axios.get(url)
      .then(res => {
        this.access_token = res.data.access_token
      })
    console.log("access token is: ", this.access_token);
    const ticket =  await this.generateTicket(this.access_token);
    console.log("ticket is: ", ticket);
    const qrUrl = `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${ticket}`
    return qrUrl;
  }

  async generateTicket(access_token: string) {
    let ticket = "";
    const url = `https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=${access_token}`
    const payload = {
      "action_name": "QR_LIMIT_SCENE", 
      "action_info": {"scene": {"scene_id": 123}}
    }
    const headers = {
      "Content-Type": "application/json"
    }

    await axios.post(url, payload, {
      headers: headers
    }).then(res => {
      ticket = res.data.ticket;
    })
    return ticket;
  }

  async getUserInfo(openid: string) {
    console.log(openid)
    let user = {}
    const url = `https://api.weixin.qq.com/cgi-bin/user/info?access_token=${this.access_token}&openid=${openid}`
    await axios.get(url)
      .then(res => {
        user = res.data
      })
    return user;
  }
}
