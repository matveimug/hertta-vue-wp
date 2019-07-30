import utils from "../utils";
import axios from 'axios'
import OAuth from 'oauth-1.0a'
import CryptoJS from 'crypto-js'
import jQuery from 'jquery'
import SETTINGS from "../settings";
import secrets from "../secrets"

const ck = secrets.ck;
const cs = secrets.cs;
const url = utils.wp_obj.homeUrl + '/wp-json/wc/v2/products';

const oauth = OAuth({
  consumer: {
    key: ck,
    secret: cs
  },
  signature_method: 'HMAC-SHA1',
  hash_function: function (base_string, key) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
  }
});

const requestData = {
  url: url,
  method: 'GET'
};

export default {
  getProducts(cb) {
    axios
        .get(
            requestData.url + '?' + jQuery.param(oauth.authorize(requestData))
        )
        .then(response => {
          cb(response.data);
        })
        .catch(e => {
          cb(e);
        });
  }
}