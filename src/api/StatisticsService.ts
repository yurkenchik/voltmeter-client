import axios, { AxiosResponse } from "axios";
import {
    DailyVoltageStatisticsDto,
    DailyVoltageStatisticsResponseDto,
    HourlyVoltageStatisticsResponseDto,
    VoltageStatusCountResponseDto,
    VoltageSummaryStatisticsResponseDto
} from "../interfaces/voltage";
import { BaseUrl } from "../utils/base-url";

export class StatisticsService {
    private readonly prefix: string = 'statistics';

    async getDailyStatistics(): Promise<DailyVoltageStatisticsResponseDto> {
        const response = await axios.get<AxiosResponse<DailyVoltageStatisticsDto>, any>(
            `${BaseUrl}/${this.prefix}/daily`
        );
        return response.data;
    }

    async getSummaryStatistics(): Promise<VoltageSummaryStatisticsResponseDto> {
        const response = await axios.get<AxiosResponse<VoltageSummaryStatisticsResponseDto>, any>(
            `${BaseUrl}/${this.prefix}/summary`
        );
        return response.data;
    }

    async getStatusCount(): Promise<VoltageStatusCountResponseDto> {
        const response = await axios.get<AxiosResponse<VoltageSummaryStatisticsResponseDto>, any>(
            `${BaseUrl}/${this.prefix}/status-count`
        );
        return response.data;
    }

    async getHourlyStatistics(date: string): Promise<HourlyVoltageStatisticsResponseDto> {
        const response = await axios.get<AxiosResponse<HourlyVoltageStatisticsResponseDto>, any>(
            `${BaseUrl}/${this.prefix}/hourly/${date}`
        );
        return response.data;
    }
}