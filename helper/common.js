module.exports.constants = Object.freeze({
  PORT: '443',
  TEST_WIDTHS: [375, 480, 720, 1280, 1440, 1920],
  BASE_URL: '${{ secrets.BASE_URL }}',
  PERCY_BASE_URL_NAME: '${{ secrets.PERCY_BASE_URL_NAME }}',
  PERCY_BRANCH: '${{ secrets.PERCY_BRANCH }}',
  PERCY_TARGET_BRANCH: '${{ secrets.PERCY_TARGET_BRANCH }}',
});
