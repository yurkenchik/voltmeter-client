import { VoltageStatus } from "../enums/VoltageStatusEnum";

export interface Voltage {
    volts: number;
    status: VoltageStatus;
    timestamp: string;
}

export interface AnomalousVoltageRecordDto {
    _id: string;
    volts: number;
    status: VoltageStatus;
    timestamp: string;
}

export interface AnomaliesResponseDto {
    records: Array<AnomalousVoltageRecordDto>;
}

export interface DailyVoltageStatisticsDto {
    _id: string;
    min: number;
    max: number;
    average: number;
    count: number;
}

export interface DailyVoltageStatisticsResponseDto {
    statistics: Array<DailyVoltageStatisticsDto>;
}

export interface HourlyVoltageStatDto {
    hour: number;
    min: number;
    max: number;
    average: number;
    count: number;
}

export interface HourlyVoltageStatisticsResponseDto {
    date: string;
    statistics: Array<HourlyVoltageStatDto>;
}

export interface VoltageStatusCountDto {
    status: VoltageStatus;
    count: number;
}

export interface VoltageStatusCountResponseDto {
    statuses: Array<VoltageStatusCountDto>;
}

export interface VoltageSummaryStatisticsResponseDto {
    minVoltage: number;
    maxVoltage: number;
    averageVoltage: number;
    totalRecords: number;
    firstVoltageReading: Voltage;
    latestVoltageReading: Voltage;
}


export interface GetVoltageReadingsFilterOptionsDto {
    status?: VoltageStatus;
    page?: number;
    limit?: number;
}