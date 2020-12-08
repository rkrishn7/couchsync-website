class Images {
  private get base() {
    return '';
  }

  get logo() {
    return this.base + '/couchsync-128.png';
  }

  get appScreenshot() {
    return this.base + '/app-screenshot.png';
  }

  get favicon() {
    return this.base + '/favicon.ico';
  }
};

export default new Images();
