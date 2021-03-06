/**
 * Created by ohadad on 1/29/2015.
 */
(function(){
    var tripDoxApp = angular.module('tripDox', []);
	var myApp = angular.module('hi', []);
	
	tripDoxApp.controller('sitesController',function () {
	
        this.countries = countries;
		this.currSite = 'Choose Site';
		this.currCity = 'Choose City';
		this.currCountry = 'Choose Country';		
    });
		
	var countries = [
	{
		countryId : 11,
		name : "USA",
		cities : [
			{
				cityId : 1100,
				cityName : "Chicago",
				timeZone : "UTC−06:00",
				sites : [
					{
						siteId : 11000,
						siteName : "Wood Dale",
						address : "100 Mittel Drive Wood Dale, IL 60191"
					}]
			},
			{
				cityId : 1101,
				cityName : "Seattle",
				timeZone : "UTC−08:00",
				sites : [
					{
						siteId : 11010,
						siteName : "Alfred Nobel",
						address : "2351 Boulevard Alfred Nobel Saint-Laurent, QC H4S 2A9"
					}]
			},
			{
				cityId : 1102,
				cityName : "New York",
				timeZone : "UTC−05:00",
				sites : [
					{
						siteId : 11020,
						siteName : "Alfred Nobel",
						address : "2351 Boulevard Alfred Nobel Saint-Laurent, QC H4S 2A9"
					}]
			},
			{
				cityId : 1103,
				cityName : "Dalas",
				timeZone : "UTC−06:00",
				sites : [
					{
						siteId : 11030,
						siteName : "Alfred Nobel",
						address : "2351 Boulevard Alfred Nobel Saint-Laurent, QC H4S 2A9"
					}]
			},
			{
				cityId : 1104,
				cityName : "Atlanta",
				timeZone : "UTC−05:00",
				sites : [
					{
						siteId : 11040,
						siteName : "Alfred Nobel",
						address : "2351 Boulevard Alfred Nobel Saint-Laurent, QC H4S 2A9"
					}]
			}
		] 
	},
	{
		countryId : 10,
		name : "Canada",
		cities : [
			{
				cityId : 1000,
				cityName : "Montreal",
				timeZone : "UTC−05:00",
				sites : [
					{
						siteId : 10000,
						siteName : "Alfred Nobel",
						address : "2351 Boulevard Alfred Nobel Saint-Laurent, QC H4S 2A9"
					}]
			},
			{
				cityId : 1001,
				cityName : "Toronto",
				timeZone : "UTC−06:00",
				sites : [
					{
						siteId : 10010,
						siteName : "Alfred Nobel",
						address : "2351 Boulevard Alfred Nobel Saint-Laurent, QC H4S 2A9"
					}]
			}
		] 
	}
]
})();