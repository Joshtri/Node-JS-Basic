import process from "process";

//Report is a features.f

process.report.reportOnFatalError = true; 
process.report.reportOnSignal = true; 
process.report.reportOnUncaughtException = true; 
process.report.filename = "report.json"; 


function SampleError(){
    throw new Error("Whoopsie!");
}

SampleError();