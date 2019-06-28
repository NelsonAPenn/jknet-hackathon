//import {Inbound, Outbound, Uld} from './packagehelper.model';
export interface Pkg {
    lastUpdated: Number;//name of package to be displayed
    _id: String;
    trackingNumber:String;
    expectedTime:Number;
    expectedManualTime:Number;
    manualProcessTime:Number;
    sortTime:Number;
    manuallyProcess:true;
    uld:String;
    inbound: Inbound;
    outboud: Outbound;
}

export interface Inbound
{
    flightNumber:String;
    gateway:String;
    estimatedOnblockTime:Number;
    parkingWing:String;
    parkingRamp:String;
    parkingPosition:String;
    parkingLocationString:String;
    unloadTime:Number;
}
export interface Outbound
{
    gateway:String;
    parkingWing:String;
    parkingRamp:String;
    parkingPosition:String;
    parkingLocationString:String;
    pullTime:Number;
    loadTime:Number;
}