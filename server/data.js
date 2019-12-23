module.exports.user = {
    "id": 182,
    "email": "johnsmith@example.com",
    "first_name": "Carl",
    "last_name": "Rogers",
    "phone_number": "3476677443",
    "acl_group_name": "USER",
    "is_active": true,
    "has_password": true,
    "created_at": "2018-06-21T19:25:10.863080Z",
    "profile_image": "",
    "promo_code": "wingjohn947",
    "autopay_enabled": false,
    "created_by": null,
    "address": [{
        "id": 132,
        "user_profile": 182,
        "address_type": "BILLING",
        "full_name": "John Smith",
        "address1": "123 8th Ave",
        "address2": "Suite 3",
        "city": "New York",
        "state": "NY",
        "zip_code": "10011",
        "country": "United States",
        "phone": "5555555555"
    }]
}

const sprintSubs = [
  {
        "id": 359,
        "user_profile": 182,
        "first_name": "Carl",
        "last_name": "Rogers",
        "mdn": "2019211759",
        "device_id": "359307067778296",
        "icc_id": "89011201002313932224",
        "platform": "ios",
        "model": "APPLE BYOFD IPH 6 GRAY 16 SGL",
        "sprint_status": "active",
        "effective_date": "2018-11-01T16:37:32Z",
        "expiry_date": null,
        "expiry_type": null,
        "is_primary": false,
        "device_specs": "GN5XB32N",
        "plan": {
            "id": 8,
            "name": "5GB",
            "status": "hidden",
            "plan_type": "PerGB",
            "price": "65.00",
            "minutes_available": null,
            "data_available": 22528,
            "voice_sms": true,
            "carrier": "sprint"
        },
        "over_data_limit": false,
        "over_minute_limit": false,
        "autopay_enabled": false,
        "insurance_enabled": false,
        "sms_notifications": true,
        "agent_id": null,
        "agent_name": "",
        "device_status": "wing",
        "msl_code": "00000",
        "msid": "000002019265242",
        "csa": "NYCNEW201",
        "mdn_status": "new",
        "old_carrier": null,
        "new_carrier": null,
        "deleted": false,
        "plan_sprint_code": "WNGPLAN17",
        "service_codes": ["WNGPMVM", "9962GSM3", "WNGCLIP", "WNGVM", "WNGINTCL", "A233DC", "WNGPAM", "WNGWELIGI"],
        "profile_image": "",
        "plan_locked": false,
        "created_by": null,
        "preactivation": null
    }, {
        "id": 360,
        "user_profile": 182,
        "first_name": "Fred",
        "last_name": "Rogers",
        "mdn": "2122561374",
        "device_id": "356965062484518",
        "icc_id": "89011201002313906558",
        "platform": "ios",
        "model": "APPLE BYOFD IPH 5S GOLD 32 SGL",
        "sprint_status": "suspended",
        "effective_date": "2018-11-01T16:56:02Z",
        "expiry_date": null,
        "expiry_type": null,
        "is_primary": false,
        "device_specs": "GN5XB32N",
        "plan": {
            "id": 33,
            "name": "3GB",
            "status": "active",
            "plan_type": "PerGB",
            "price": "2.00",
            "minutes_available": null,
            "data_available": 1024,
            "voice_sms": false,
            "carrier": "sprint"
        },
        "over_data_limit": false,
        "over_minute_limit": false,
        "autopay_enabled": false,
        "insurance_enabled": false,
        "sms_notifications": false,
        "agent_id": null,
        "agent_name": "",
        "device_status": "wing",
        "msl_code": "00000",
        "msid": "000009173096090",
        "csa": "NYCNYC917",
        "mdn_status": "new",
        "old_carrier": null,
        "new_carrier": null,
        "deleted": false,
        "plan_sprint_code": "WNGPLAN12",
        "service_codes": ["WNGPAM", "WNGWELIGI", "WNGVBLK", "A133DC", "A299DC", "WNGSMSBLK", "WNGDISNAI"],
        "profile_image": "",
        "plan_locked": false,
        "created_by": null,
        "preactivation": null
    }, {
        "id": 419,
        "user_profile": 182,
        "first_name": "Steve",
        "last_name": "Rogers",
        "mdn": "9174747654",
        "device_id": "35550107191084",
        "icc_id": "89011201002549371130",
        "platform": null,
        "model": "SAMSUNG G930 32GB GD XCVR SGL",
        "sprint_status": "active",
        "effective_date": "2019-06-17T18:12:43Z",
        "expiry_date": null,
        "expiry_type": null,
        "is_primary": false,
        "device_specs": "GP3XLB128",
        "plan": {
            "id": 8,
            "name": "Unlimited",
            "status": "hidden",
            "plan_type": "Unlimited",
            "price": "65.00",
            "minutes_available": null,
            "data_available": 22528,
            "voice_sms": true,
            "carrier": "sprint"
        },
        "over_data_limit": false,
        "over_minute_limit": false,
        "autopay_enabled": false,
        "insurance_enabled": false,
        "sms_notifications": true,
        "agent_id": null,
        "agent_name": "",
        "device_status": "foreign",
        "msl_code": "242169",
        "msid": "000003472287766",
        "csa": "NYCBRO917",
        "mdn_status": "new",
        "old_carrier": null,
        "new_carrier": null,
        "deleted": false,
        "plan_sprint_code": "WNGPLAN17",
        "service_codes": ["WNGPMVM", "9962GSM3", "WNGCLIP", "WNGVM", "WNGINTCL", "A233DC", "WNGPAM"],
        "profile_image": "",
        "plan_locked": false,
        "created_by": 62,
        "preactivation": null
    }
]

module.exports.allSprintSubs = {
    "count": 3,
    "next": null,
    "previous": null,
    "results": sprintSubs
}

module.exports.sprintSubsById = sprintSubs.reduce((subs, sub) => {
  subs[sub.id] = sub;
  return subs;
}, {});

const attSubs = [
    {
        "id": 123,
        "user_profile": 182,
        "first_name": "Roger",
        "last_name": "Rabbit",
        "mdn": "7184734862",
        "device_id": "352326080337812",
        "device_id_type": "P9",
        "icc_id": "89014104271703409646",
        "network_type": "LTE",
        "platform": null,
        "model": "SM-G930A",
        "att_status": "active",
        "effective_date": "2019-06-17T18:14:36Z",
        "expiry_date": null,
        "expiry_type": null,
        "device_specs": "GP2B64",
        "plan": {
            "id": 14,
            "name": "1GB",
            "plan_type": "PerGB",
            "price": "1.00",
            "data_available": 1024,
            "description": "1GB",
            "purchase_description": "Monthly Plan - Wing Basics",
            "carrier": "att"
        },
        "over_data_limit": false,
        "autopay_enabled": false,
        "sms_notifications": true,
        "agent_id": 62,
        "agent_name": "Rob Anthony",
        "device_status": "foreign",
        "msid": "",
        "csa": "",
        "mdn_status": "new",
        "deleted": false,
        "plan_att_code": "ATT_WNG_1GB",
        "profile_image": "",
        "plan_locked": false,
        "created_by": 62,
        "preactivation": null,
        "synced_with_att": true
    }
]

module.exports.allAttSubs = {
    "count": 1,
    "next": null,
    "previous": null,
    "results": attSubs
}

module.exports.attSubsById = attSubs.reduce((subs, sub) => {
  subs[sub.id] = sub;
  return subs;
}, {});


const devices = [
    {
        "sku": "GN5XB32N",
        "brand": "Google",
        "name": "Nexus 5X",
        "color": "Black",
        "capacity": "32GB",
        "value": "150.00"
    },
    {
        "sku": "GP2B64",
        "brand": "Google",
        "name": "Pixel 2",
        "color": "Black",
        "capacity": "64GB",
        "value": "650.00"
    },
    {
        "sku": "GP3XLB128",
        "brand": "Google",
        "name": "Pixel 3",
        "color": "Just Black",
        "capacity": "128GB",
        "value": "999.00"
    }
]

module.exports.allDevices = {
    "count": 3,
    "next": null,
    "previous": null,
    "results": devices
}

module.exports.devicesBySku = devices.reduce((devs, dev) => {
  devs[dev.sku] = dev;
  return devs
}, {});

const defaultContract = {
    "id": 51,
    "subscription": null,
    "att_subscription": null,
    "user_profile": 182,
    "status": "pending",
    "expiry_type": null,
    "expiry_date": null,
    "created_at": "2019-10-08T23:59:37.296631Z",
    "updated_at": "2019-10-09T00:00:10.763113Z",
    "preactivation": null
}
module.exports.defaultContract = defaultContract;

module.exports.allContracts = {
  "count": 1,
  "results": [{...defaultContract, "subscription": 359}]
}

module.exports.emptyRes = {
  "count": 0,
  "results": []
}

const plans = [
    {
        "id": 10,
        "sku": "WEW",
        "name": "Wing Extended Warranty",
        "price": "1.96",
        "tier": 2,
        "min_value": "1.00",
        "max_value": "1000.00",
        "repair_deductible": "74.50",
        "replacement_deductible": "149.00",
        "conversion_fee": "74.50",
        "tax_transaction_code": null,
        "tax_regulatory_code": "05"
    },
    {
        "id": 6,
        "sku": "WDP3P",
        "name": "Wing Device Protection",
        "price": "6.99",
        "tier": 2,
        "min_value": "1.00",
        "max_value": "1000.00",
        "repair_deductible": "74.50",
        "replacement_deductible": "149.00",
        "conversion_fee": "74.50",
        "tax_transaction_code": null,
        "tax_regulatory_code": "05"
    },
    {
        "id": 2,
        "sku": "WDPP5P",
        "name": "Wing Device Protection Plus",
        "price": "8.95",
        "tier": 2,
        "min_value": "1.00",
        "max_value": "1000.00",
        "repair_deductible": "74.50",
        "replacement_deductible": "149.00",
        "conversion_fee": "74.50",
        "tax_transaction_code": null,
        "tax_regulatory_code": "05"
    },
]

module.exports.allPlans = {
    "count": 3,
    "next": null,
    "previous": null,
    "results": plans
}

module.exports.plansById = plans.reduce((plans, plan) => {
  plans[plan.id] = plan;
  return plans;
}, {});

const defaultDevice = {
    "id": 91,
    "contract": 51,
    "device_specs": "GN5XB32N",
    "plan": 6,
    "condition": "byod",
    "purchase_date": "2019-10-08",
    "is_replacement": false,
    "status": "active",
    "created_at": "2019-10-08T23:59:37.364502Z",
    "activated_at": "2019-10-08T23:59:37.509460Z",
    "updated_at": "2019-10-08T23:59:37.509635Z",
    "expiry_date": null
}
module.exports.defaultDevice = defaultDevice;

module.exports.allDevices = {
  "count": 1,
  "results": [defaultDevice]
}

