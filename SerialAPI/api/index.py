import SerialAPI
import flask

from SerialAPI import data


@SerialAPI.app.route('/api/')
def api_index():
    url = flask.url_for('api_index')

    temp = {'heading': 'Temperature',
            'url': flask.url_for('api_temp'),
            'unit': 'C',
            'key': 1}
    humidity = {'heading': 'Relative Humidity',
                'url': flask.url_for('api_humidity'),
                'unit': '%',
                'key': 2}
    carbon = {'heading': 'Carbon Monoxide',
              'url': flask.url_for('api_carbon'),
              'unit': 'ppm',
              'key': 3}
    ammonia = {'heading': 'Ammonia',
               'url': flask.url_for('api_ammonia'),
               'unit': 'ppm',
               'key': 4}

    feeds = [temp, humidity, carbon, ammonia]

    context = {'feeds': feeds,
               'url': url}

    return flask.jsonify(**context)


@SerialAPI.app.route('/api/temp/')
def api_temp():
    url = flask.url_for('api_temp')
    temp = data.get_temp_data()
    unit = 'Temperature ( C )'

    context = {'url': url,
               'unit': unit,
               'value': temp}

    return flask.jsonify(**context)


@SerialAPI.app.route("/api/humidity/")
def api_humidity():
    url = flask.url_for('api_humidity')
    humidity = data.get_humidity_data()
    unit = 'Relative Humidity ( % )'

    context = {'url': url,
               'unit': unit,
               'value': humidity}

    return flask.jsonify(**context)


@SerialAPI.app.route("/api/carbon/")
def api_carbon():
    url = flask.url_for('api_carbon')
    carbon = data.get_carbon_data()
    unit = 'Carbon Monoxide Concentration ( ppm )'

    context = {'url': url,
               'unit': unit,
               'value': carbon}

    return flask.jsonify(**context)


@SerialAPI.app.route("/api/ammonia/")
def api_ammonia():
    url = flask.url_for('api_ammonia')
    ammonia = data.get_ammonia_data()
    unit = 'Ammonia Concentration ( ppm )'

    context = {'url': url,
               'unit': unit,
               'value': ammonia}

    return flask.jsonify(**context)


@SerialAPI.app.route('/api/temp/', methods=['POST'])
def post_temp():
    value = flask.request.get_json(force=True)['value']
    data.store_temp_data(value)
    return "ok", 201


@SerialAPI.app.route('/api/humidity/', methods=['POST'])
def post_humidity():
    value = flask.request.get_json(force=True)['value']
    data.store_humidity_data(value)
    return "ok", 201


@SerialAPI.app.route('/api/carbon/', methods=['POST'])
def post_carbon():
    value = flask.request.get_json(force=True)['value']
    data.store_carbon_data(value)
    return "ok", 201


@SerialAPI.app.route('/api/ammonia/', methods=['POST'])
def post_ammonia():
    value = flask.request.get_json(force=True)['value']
    data.store_ammonia_data(value)
    return "ok", 201
