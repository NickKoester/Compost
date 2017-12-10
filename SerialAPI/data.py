
temp_data = 0
humidity_data = 0
carbon_data = 0
ammonia_data = 0


def get_temp_data():
    global temp_data
    return temp_data


def get_humidity_data():
    global humidity_data
    return humidity_data


def get_carbon_data():
    global carbon_data
    return carbon_data


def get_ammonia_data():
    global ammonia_data
    return ammonia_data


def store_temp_data(value):
    global temp_data
    temp_data = value


def store_humidity_data(value):
    global humidity_data
    humidity_data = value


def store_carbon_data(value):
    global carbon_data
    carbon_data = value


def store_ammonia_data(value):
    global ammonia_data
    ammonia_data = value
