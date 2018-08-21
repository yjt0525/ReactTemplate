var cfg = {
    dev: 'api-dev', //测试服--代理
    pro: '',
    dev_download: 'http://192.168.1.240:8083',
    pro_download: '',
    dev_baseurlVerifyImg: 'http://192.168.1.240:8083',
    pro_baseurlVerifyImg: '/',
};

var base_url = '';
var base_url_download = '';
var baseurlVerifyImg = '';
switch (process.env.NODE_ENV) {
    case "development":
        base_url = cfg.dev;
        base_url_download = cfg.dev_download;
        baseurlVerifyImg = cfg.dev_baseurlVerifyImg
        break;
    case "testing":
        base_url = cfg.dev;
        base_url_download = cfg.dev_download;
        baseurlVerifyImg = cfg.dev_baseurlVerifyImg
        break;
    case "production":
        base_url = cfg.pro;
        base_url_download = cfg.pro_download;
        baseurlVerifyImg = cfg.pro_baseurlVerifyImg
        break;
}

export const baseURL = base_url
export const baseURLDownload = base_url_download
export const baseURLVerifyImg = baseurlVerifyImg