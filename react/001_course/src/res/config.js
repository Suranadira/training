const dev = {
  uri: {
    // ENDPOINT: "http://localhost:9000"
    ENDPOINT: "http://192.168.2.100:9000"
  }
};

const staging = {
  uri: {
    ENDPOINT: "https://dev2.suranadira.com"
  }
};

const prod = {
  uri: {
    ENDPOINT: "https://chat.suranadira.com"
  }
};

const hostname = window && window.location && window.location.hostname;

let config;
switch (hostname) {
  case "localhost":
    config = dev;
    break;
  case "dev2.suranadira.com":
    config = staging;
    break;
  case "chat.suranadira.com":
    config = prod;
    break;
  default:
    config = dev;
    break;
}

export default {
  ...config
};
