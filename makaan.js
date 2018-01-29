var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs=require('fs');
var request = require('request');
// const ejsLint= require('ejs-lint');
var app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

const url = 'http://www.makaan.com/petra/app/v4/listing?selector={"fields":["localityId","displayDate","listing","property","project","builder","displayName","locality","suburb","city","state","currentListingPrice","companySeller","company","user","id","name","label","listingId","propertyId","projectId","propertyTitle","unitTypeId","resaleURL","description","postedDate","verificationDate","size","measure","bedrooms","bathrooms","listingLatitude","listingLongitude","studyRoom","servantRoom","pricePerUnitArea","price","localityAvgPrice","negotiable","rk","buyUrl","rentUrl","overviewUrl","minConstructionCompletionDate","maxConstructionCompletionDate","halls","facingId","noOfOpenSides","bookingAmount","securityDeposit","ownershipTypeId","furnished","constructionStatusId","tenantTypes","bedrooms","balcony","floor","totalFloors","listingCategory","possessionDate","activeStatus","type","logo","profilePictureURL","score","assist","contactNumbers","contactNumber","isOffered","mainImageURL","mainImage","absolutePath","altText","title","imageCount","geoDistance","defaultImageId","updatedAt","qualityScore","projectStatus","throughCampaign","addedByPromoter","listingDebugInfo","videos","imageUrl","rk","penthouse","studio","paidLeadCount","listingSellerTransactionStatuses","allocation","allocationHistory","masterAllocationStatus","status","sellerCompanyFeedbackCount","companyStateReraRegistrationId"],"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"listingCategory":["Primary","Resale"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';
// let bedroom = 
let json = '';
// request(url,function(err,response,body) {
// 	json = JSON.parse(body);
// 	//console.log(JSON.stringify(body));
// 	console.log(json);


app.get('/', function (req, res) {
	request(url,function(err,response,body) {
	json = JSON.parse(body);
	res.render('index.ejs',{json:json.data[0].facetedResponse});

});
});
const renturl = 'http://www.makaan.com/petra/app/v4/listing?selector={"fields":["localityId","displayDate","listing","property","project","builder","displayName","locality","suburb","city","state","currentListingPrice","companySeller","company","user","id","name","label","listingId","propertyId","projectId","propertyTitle","unitTypeId","resaleURL","description","postedDate","verificationDate","size","measure","bedrooms","bathrooms","listingLatitude","listingLongitude","studyRoom","servantRoom","pricePerUnitArea","price","localityAvgPrice","negotiable","rk","buyUrl","rentUrl","overviewUrl","minConstructionCompletionDate","maxConstructionCompletionDate","halls","facingId","noOfOpenSides","bookingAmount","securityDeposit","ownershipTypeId","furnished","constructionStatusId","tenantTypes","bedrooms","balcony","floor","totalFloors","listingCategory","possessionDate","activeStatus","type","logo","profilePictureURL","score","assist","contactNumbers","contactNumber","isOffered","mainImageURL","mainImage","absolutePath","altText","title","imageCount","geoDistance","defaultImageId","updatedAt","qualityScore","projectStatus","throughCampaign","addedByPromoter","listingDebugInfo","videos","imageUrl","rk","penthouse","studio","paidLeadCount","listingSellerTransactionStatuses","allocation","allocationHistory","masterAllocationStatus","status","sellerCompanyFeedbackCount","companyStateReraRegistrationId"],"filters":{"and":[{"equal":{"cityId":11}},{"equal":{"listingCategory":["Rental"]}}]},"paging":{"start":0,"rows":20}}&includeNearbyResults=false&includeSponsoredResults=false&sourceDomain=Makaan';
// let json = '';

app.get('/rent',function(req,res) {
	request(renturl,function(err,response,body) {
	json = JSON.parse(body);
	res.render('index.ejs',{json:json.data[0].facetedResponse});

});
});


app.listen(3000,function(){
	console.log("Server listening at port 3000...");
})
