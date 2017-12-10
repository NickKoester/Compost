import serial
import requests
import json

lora_port = serial.Serial('COM3', 57600, timeout=0)
print(lora_port)

while 1:
    try:
        data = lora_port.read_line()
        parsed_data = data.split()
        url = 'http://localhost:8000/api/{}/'.format(parsed_data[0])

        r = requests.post(url, data=json.dumps({'value': parsed_data[1]}))
        print(r.text)

    except lora_port.SerialTimeoutException:
        print('data could not be read')

