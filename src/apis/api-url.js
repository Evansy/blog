/**
 * API ur集合
 */

import { apiUrl } from 'settings';

export default {
    // 登录注册相关接口
    // login:                      `${apiUrl}/Merchant/login`,                                 // 登录接口
    // register:                   `${apiUrl}/Merchant/Register`,                              // 注册接口
    getToken:                   `${apiUrl}/api/vehicle/GetToken`,                           // 过车查询token

    // 总览-报警信息
    warnMessage:                `${apiUrl}/api/vehicle/integral`,                           // 首页车牌
    warnMessage5:               `${apiUrl}/api/vehicle/GetIntegralHistory`,                 // 首页车牌历史五条
    vehicleStatistics:          `${apiUrl}/api/VehicleStatistics/Total`,                    // 过车总计
    mapPoints:                  `${apiUrl}/api/point/list`,                                 // 地图点位
    mapPointsCount:             `${apiUrl}/api/point/count`,                                // 地图点位数量统计
    classStatistics:            `${apiUrl}/api/VehicleStatistics/VehicleKind`,              // 分类统计
    // 卡口过车流量
    deviceType:                 `${apiUrl}/api/VehicleStatistics/PointType`,                // 设备类型
    passingTop10:               `${apiUrl}/api/VehicleStatistics/PassingTop10`,             // 卡口前十

    // 小区过车流量
    estateTypeStatics:          `${apiUrl}/api/VehicleStatistics/VillageKind`,              // 小区类型统计
    estateWarning:              `${apiUrl}/api/VehicleStatistics/VillageWarnTop3`,          // 小区预警
    estateTop10:                `${apiUrl}/api/VehicleStatistics/VillageTop10`,             // 小区卡口
    carInfo:                    `${apiUrl}/api/Vehicle/GetVehicleinfo`,                     // 车辆信息
    carTags:                    `${apiUrl}/api/Vehicle/GetVehicleTags`,                     // 车辆标签
    sevenDaysActive:            `${apiUrl}/api/Vehicle/GetVehicleStatisticsByTime`,         // 7天活动信息
    passingCarPics:             `${apiUrl}/api/Vehicle/GetPassing`,                         // 过车缩略图

    // 车控报警
    carControlWarn:             `${apiUrl}/api/vehicle/alarm`,                              // 车控报警
    carControlWarn5:            `${apiUrl}/api/vehicle/GetAlarmHistory`,                    // 车控历史5条
    // 重点区域
    keyArea:                    `${apiUrl}/api/area/query`,                                 // 重点区域
    // 防控圈统计
    focueArea:                  `${apiUrl}/api/area/query`,                                 // 重点区域
    areaPortStatistic:          `${apiUrl}/api/pointgroup/query`,                           // 重点区域
    carFlowStatistic:           `${apiUrl}/api/VehicleStatistics/AreaTotal`,                // 车流量
    // 一人一档
    identitySearch:             `${apiUrl}/api/person/GetArchives`,                        // 一人一档
    identityList:               `${apiUrl}/api/person/get`,                                 // 一人一档
    // 查询小区Code
    estatePortCode:             `${apiUrl}/api/point/GetVillagePoints`,                    // 查询小区Code
    carPortCode:                `${apiUrl}/api/point/get`,                                 // 查询卡口Code
    searchResult:               `${apiUrl}/api/vehicle/getvehiclepassing`,                 // 查询接口

    // 点位坐标更新
    updatePoint:                `${apiUrl}/api/point/setposition`                           // 点位坐标更新
};
