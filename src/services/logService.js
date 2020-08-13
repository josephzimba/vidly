import * as Sentry from "@sentry/react";
function init() {
  Sentry.init({
    dsn:
      "https://3e5f179349d74534a989614b06df9b57@o401477.ingest.sentry.io/5261100",
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
