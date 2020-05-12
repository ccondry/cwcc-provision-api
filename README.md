# dCloud CWCC Provision API
This is HTTP REST API code for the dCloud Cisco Webex Contact Center v1/v2/v3 demo.
This API receives REST requests to provision a user's CUCM phones for the 
Webex Contact Center instant demos. It is intended to be run on the branding VM
inside the instant demo session on dCloud, and is called from the
cwcc-toolbox-api or webex-v3prod-toolbox-api when a user needs their phones
provisioned.

## Download
```sh
git clone https://gitlab.com/dcloud-collab/cwcc-provision-api.git
```

## Installation By Script
```sh
cd cwcc-provision-api
./install.sh
```

## Manually Run
```sh
npm start
```

## Manually Install as a Service on Linux
```sh
sudo cp systemd.service /lib/systemd/system/cwcc-provision-api.service
sudo systemctl enable cwcc-provision-api.service
```

## Manually Start Service on Linux
```sh
sudo systemctl start cwcc-provision-api.service
```
