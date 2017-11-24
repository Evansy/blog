/**
 * 改文件主要用来导出接口相关方法
 */
// import Vue from 'vue';
import API from './api-url';
import ajax from 'utils/ajax';

let send = (options, url, method) => {
    // 如果未传入url以及参数抛出异常
    // if (!url || !options) {
    if (!url) {
        throw new Error('url is null.');
        // throw new Error('url or options is null.');
    }

    // 如果没有设置请求方式默认请求方式为POST
    method = method || 'post';

    // 返回promise实例由用户处理
    return ajax.Axios[method](url, options);
};

/* 登录注册相关接口 */
// export const login                      = options => send(options, API.login);                              // 登录接口
// export const register                   = options => send(options, API.register);                           // 注册接口
export const getToken                   = options => send(options, API.getToken, 'get');                             // 过车查询token

/* 总览 */
export const warnMessage                = options => send(options, API.warnMessage, 'get');                     // 车牌信息
export const warnMessage5               = options => send(options, API.warnMessage5, 'get');                     // 首页车牌历史五条
export const vehicleStatistics          = options => send(options, API.vehicleStatistics, 'get');               // 当天总计
export const classStatistics            = options => send(options, API.classStatistics + (options && options.PointCode ? `/${options.PointCode}` : ''), 'get');             // 分类统计

/* 视频点位 */
export const mapPoints                  = options => send(options, API.mapPoints, 'post');                      // 视频点位
export const mapPointsCount             = options => send(options, API.mapPointsCount, 'post');                 // 左侧菜单点位数量

/* 卡口过车流量 */
export const deviceType                 = options => send(options, API.deviceType, 'get');                      // 视频点位
export const passingTop10               = options => send(options, API.passingTop10, 'get');                    // 卡口流量top10
/* 小区过车流量 */
export const estateTypeStatics          = options => send(options, API.estateTypeStatics, 'get');               // 小区类型统计
export const estateWarning              = options => send(options, API.estateWarning, 'get');                   // 小区预警
export const estateTop10                = options => send(options, API.estateTop10, 'get');                     // 小区卡扣top10
export const carInfo                    = options => send(options, API.carInfo, 'post');                        // 车辆信息
export const carTags                    = options => send(options, API.carTags, 'post');                        // 车辆标签
export const sevenDaysActive            = options => send(options, API.sevenDaysActive, 'post');                // 7天活动信息
export const passingCarPics             = options => send(options, API.passingCarPics, 'post');                 // 过车缩略图

/* 车控报警 */
export const carControlWarn             = options => send(options, API.carControlWarn, 'get');                  // 车控报警
export const carControlWarn5            = options => send(options, API.carControlWarn5, 'get');                  // 车控历史5条
/* 重点区域 */
export const keyArea                    = options => send(options, API.keyArea, 'post');                        // 重点区域
/* 防控圈统计 */
export const areaPortStatistic          = options => send(options, API.areaPortStatistic, 'post');              // 防控圈统计

export const focueArea                  = options => send(options, API.focueArea, 'post');                      // 重点区域
export const carFlowStatistic           = options => send(options, API.carFlowStatistic, 'post');               // 车流量
export const identitySearch             = options => send(options, API.identitySearch + (options && options.identyID ? `/${options.identyID}` : ''), 'get');               // 一人一档
export const identityList               = options => send(options, API.identityList + (options && options.keyWord ? `/${options.keyWord}` : ''), 'get');               // 一人一档（模糊查询列表）
export const estatePortCode             = options => send(options, API.estatePortCode, 'get');                  // 一人一档
export const carPortCode                = options => send(options, API.carPortCode, 'get');                     // 一人一档
export const searchResult               = options => send(options, API.searchResult, 'post');                   // 查询接口

// 点位坐标更新
export const updatePoint                = options => send(options, API.updatePoint, 'post');                    // 点位坐标更新
