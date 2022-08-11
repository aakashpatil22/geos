# caffeinate-me

Caffeinate Me is a Vue frontend that shows all the US-based Starbucks locations within a 1km range. This uses a static list of locations stored in a DynamoDB
table, queried using the DynamoDB-Geo library. 

There is a [tutorial accompanying this code](https://medium.com/swlh/caffeinate-me-build-a-serverless-app-to-find-the-nearest-starbucks-54512124e639) and a [video walkthrough on YouTube](https://www.youtube.com/watch?v=y-mQtpB-a6g&feature=youtu.be&hd=1):

To learn more about the backend mechanism to support fast geo-spatial searches on DynamoDB, see my article on A Cloud Guru: [Location-based search results with DynamoDB and Geohash](https://read.acloud.guru/location-based-search-results-with-dynamodb-and-geohash-267727e5d54f)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
# Questions

Please contact James Beswick @jbesw on Twitter. Feel free to use this code however you choose, though no warranty is implied.
