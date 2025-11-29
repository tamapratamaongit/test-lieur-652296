{
  "_id": ObjectId(),
  "name": "Central Warehouse",
  "location": {
    "address": "1234 Example Blvd, Cityname, ST, 90210",
    "coordinates": {
      "lat": 34.0522,
      "lon": -118.2437
    }
  },
  "capacity": 1000000,
  "inventoryItems": [
    {
      "itemId": ObjectId(),
      "quantity": 1000,
      "lastUpdated": ISODate("2023-12-01")
    }
  ],
  "manager": {
    "managerId": ObjectId(),
    "name": "Jane Doe"
  }
}
