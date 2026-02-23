let interviewList = [];
let rejectedList = [];
let allCardList = [];

const totalJOb = document.getElementById("total");
const interviewJOb = document.getElementById("interview");
const rejectedJOb = document.getElementById("rejected");

// filter job available btn
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// job length required & interview section card
const allCardSection = document.getElementById("all-card");
const interviewFilterSection = document.getElementById("interview-card");
const rejectedFilterSection = document.getElementById("rejected-card");

// main access and delegation
const mainContainer = document.getElementById("main");

// all card 
const allCard = document.querySelectorAll("#all-card .card");

// available job
const availableJobCount = document.getElementById("available-job-total");
let availableInterViewCount = document.getElementById("interview-available");
let availableRejectedCount = document.getElementById("rejected-available");

function calculateJobCount() {
    
    totalJOb.innerText = allCardList.length;
    interviewJOb.innerText = interviewList.length;
    rejectedJOb.innerText = rejectedList.length;

    availableJobCount.innerText = allCardList.length;
    availableInterViewCount.innerText = interviewList.length;
    availableRejectedCount.innerText = rejectedList.length;
};