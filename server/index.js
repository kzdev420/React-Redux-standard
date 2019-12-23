const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');
const app = express();

app.use(bodyParser.json());

app.get('/hey', (req, res) => res.send('ho!'))

app.get('/api/users/me/', (req, res) => res.send(data.user));

app.get('/api/subscriptions/', (req, res) => res.send(data.allSprintSubs));
app.get('/api/subscriptions/:id/', (req, res) => {
  const { id } = req.params;
  const sub = data.sprintSubsById[id];
  res.send(sub);
})
app.get('/api/att/subscriptions/', (req, res) => res.send(data.allAttSubs));
app.get('/api/att/subscriptions/:id/', (req, res) => {
  const { id } = req.params;
  const sub = data.attSubsById[id];
  res.send(sub);
})

app.get('/api/devices/', (req, res) => res.send(data.allDevices));
app.get('/api/devices/:sku', (req, res) => {
  const { sku } = req.params;
  const dev = data.devicesBySku[sku];
  res.send(dev);
});

app.get('/api/insurance/contracts/', (req, res) => {
  const sub = req.query.subscription;
  if (sub === '359') {
    res.send(data.allContracts);
  }
  else {
    res.send(data.emptyRes);
  }
});

app.post('/api/insurance/contracts/', (req, res) => {
  const { subscription, att_subscription } = req.body;
  if (!subscription && !att_subscription) {
    res.status(400).send({ "message": "att_subscription or subscription is required" });
  }
  else {
    res.send({
      ...data.defaultContract,
      "id": 52,
      "status": "pending",
      "subscription": subscription || null,
      "att_subscription": att_subscription || null,
    });
  }
});

app.post('/api/insurance/contracts/:id/activate', (req, res) => {
  res.send( 'success' );
});

app.get('/api/insurance/plans/', (req, res) => {
  if (!req.query.value) {
    res.send({});
  }
  res.send(data.allPlans);
});

app.get('/api/insurance/plans/:id/', (req, res) => {
  const { id } = req.params;
  res.send(data.plansById[id]);
});

app.post('/api/insurance/devices/', (req, res) => {
  const { contract, device_specs, plan_type } = req.body;
  if (!contract || !device_specs || !plan_type) {
    res.status(400).send({ message: 'One or more fields are missing' });
  }
  else {
    res.send({
      ...data.defaultDevice,
      id: 91,
      contract,
      device_specs,
      plan_type
    });
  }
});

app.get('/api/insurance/devices/', (req, res) => {
  const contract = req.query.contract;
  if (contract === '51') {
    res.send(data.allDevices);
  }
  else {
    res.send(data.emptyRes);
  }
});

app.listen(8080)
