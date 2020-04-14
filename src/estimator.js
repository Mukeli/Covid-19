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
  currentlyInfected: function () {
    this.currentlyInfected = this.reportedCases * 10;

    return `
     Currently Infected is: ${this.currentlyInfected}
     `;
  },
  severeImpact: function (factor) {
    this.severeImpact = this.reportedCases * 50;
    this.infectionsByRequestedTime = this.severeImpact * factor;
    this.severeCasesByRequestedTime =
      (this.infectionsByRequestedTime * 15) / 100;
    this.hospitalBedsByRequestedTime = Math.floor(
      (this.totalHospitalBeds * 35) / 100 - this.severeCasesByRequestedTime
    );
    return `
     Severe Impact is:${this.severeImpact}
     Severe Impact infections by requested time is:${this.infectionsByRequestedTime}
     Severe cases by Requested Time:${this.severeCasesByRequestedTime}
     Hospital Beds by Requested Time:${this.hospitalBedsByRequestedTime}`;
  },
  impact: function (factor) {
    this.impact = this.reportedCases * 10;
    this.infectionsByRequestedTime = this.impact * factor;
    this.casesForICUByRequestedTime =
      (5 / 100) * this.infectionsByRequestedTime;
    this.casesForVentilatorsByRequestedTime = Math.floor(
      (2 / 100) * this.infectionsByRequestedTime
    );
    this.dollarsInFlight = Math.floor(
      (this.infectionsByRequestedTime * 0.65 * 1.5) / 30
    );
    return `
    Infections By requested time Impact is: ${this.infectionsByRequestedTime}  
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

console.log(input.currentlyInfected());
console.log(input.severeImpact(512));
console.log(input.impact(512));


