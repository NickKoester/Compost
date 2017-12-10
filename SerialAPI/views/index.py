import flask
import SerialAPI


@SerialAPI.app.route('/', methods=['GET'])
def show_index():
    return flask.render_template('index.html')
