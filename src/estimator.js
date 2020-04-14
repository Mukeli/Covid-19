const input = {
  region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71,
  },
  periodType: "days",
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614,
  /*timeElapsed: function () {
    let days = 1000 * 60 * 60 * 24;
    return Math.floor((Date.now() - new Date("March 30,2020")) / days);
  },*/
  covid19ImpactEstimator: function () {
    this.currentlyInfected = this.reportedCases * 10;
    this.severeImpact = this.reportedCases * 50;
    return `
     Currently Infected is: ${this.currentlyInfected}
     Severe Impact is:${this.severeImpact}`;
  },
  infectionsByRequestedTime: function (factor) {
    this.impact = this.currentlyInfected * factor;
    this.severeImpact = this.severeImpact * factor;
    this.severeCasesByRequestedTime = (this.severeImpact * 15) / 100;
    this.hospitalBedsByRequestedTime =
      //this.severeCasesByRequestedTime - (this.totalHospitalBeds * 35) / 100;
      Math.floor(
        (this.totalHospitalBeds * 35) / 100 - this.severeCasesByRequestedTime
      );
    this.casesForICUByRequestedTime = (5 / 100) * this.impact;
    this.casesForVentilatorsByRequestedTime = Math.floor(
      (2 / 100) * this.impact
    );
    this.dollarsInFlight = Math.floor((this.impact * 0.65 * 1.5) / 30);
    return `
    Infections By requested time Impact is: ${this.impact} 
    Infections By requested time severe Impact is:${this.severeImpact} 
    Severe Cases By Requested Time is:${this.severeCasesByRequestedTime} 
    Hospital Beds by Requested time is:${this.hospitalBedsByRequestedTime}  
    Cases For ICU By Requested Time is:${this.casesForICUByRequestedTime} 
    Cases for Ventilators By requested Time is:${this.casesForVentilatorsByRequestedTime} 
    Dollars Lost is:$${this.dollarsInFlight}`;
  },
};

const output = {
  data: {}, // the input data you got
  impact: {}, // your best case estimation
  severeImpact: {}, // your severe case estimation
};

console.log(input.covid19ImpactEstimator());
console.log(input.infectionsByRequestedTime(512));

