const url = {
  hotlist: '/index/hotlist',
};

const host = 'http://rap2api.taobao.org/app/mock/3756/GET/';

for (const key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key];
  }
}

export default url;
