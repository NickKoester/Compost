import flask

app = flask.Flask(__name__)

app.config.from_object('SerialAPI.config')

import SerialAPI.api  # noqa: E402  pylint: disable=wrong-import-position
import SerialAPI.views  # noqa: E402  pylint: disable=wrong-import-position
