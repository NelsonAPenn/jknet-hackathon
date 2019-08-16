import { CommonUpsHeaderComponent } from './../common-ups-header/common-ups-header.component';
//import {Inbound, Outbound, Uld} from './packagehelper.model';
export interface Pkg {
    lastUpdated: Number;//name of package to be displayed
    _id: String;
    trackingNumber:String;
    expectedTime:number;
    expectedManualTime:number;
    manualProcessTime:number;
    remainingTime:number;
    sortTime:number;
    manuallyProcess:true;
    uld:String;
    inbound: Inbound;
    outbound: Outbound;
}

export interface Inbound
{
    flightNumber:String;
    gateway:String;
    estimatedOnblockTime:number;
    parkingWing:String;
    parkingRamp:String;
    parkingPosition:String;
    parkingLocationString:String;
    unloadTime:number;
}
export interface Outbound
{
    gateway:String;
    parkingWing:String;
    parkingRamp:String;
    parkingPosition:String;
    parkingLocationString:String;
    pullTime:number;
    loadTime:number;
}

export interface Flight
{
    flightNumber:String,
    gateway:String,
    parkingLocationString:String,
    ulds:Uld[]
}
export interface Uld
{
    uldNumber:String,
    packages:Pkg[]
}

