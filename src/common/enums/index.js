/**
 * 该文件主要方式枚举相关文件
 */

import Enums from './enums';
export {
    POINT_TYPE,                  // 发送短信验证码类型枚举
    VEHICLE_TYPE,
    COLOR_TYPE,
    PLATE_WARN_TYPE
};

// 预警类型
const PLATE_WARN_TYPE = new Enums({
    fake: {
        text: '假牌',
        value: 3
    },
    repeat: {
        text: '套牌',
        value: 4
    }
});

// 点位类型
// const POINT_TYPE = new Enums({
//     carDevice: {
//         text: '卡口点位',
//         value: 1
//     },
//     videoDevice: {
//         text: '视频点位',
//         value: 2
//     }
// });

// 车辆类型
const VEHICLE_TYPE = new Enums({
    largeCar: {
        text: '大型汽车',
        value: '01'
    },
    miniCar: {
        text: '小型汽车',
        value: '02'
    },
    embassyCar: {
        text: '使馆汽车',
        value: '03'
    },
    consulateCar: {
        text: '领馆汽车',
        value: '04'
    },
    HKMCCar: {
        text: '港澳出入境车',
        value: '05'
    },
    foreignCar: {
        text: '外籍汽车',
        value: '06'
    },
    motorcycle: {
        text: '两、三轮摩托车',
        value: '07'
    },
    spriteMoto: {
        text: '轻便摩托车',
        value: '08'
    },
    embassyMoto: {
        text: '使馆摩托车',
        value: '09'
    },
    consulateMoto: {
        text: '领馆摩托车',
        value: '10'
    },
    outsideMoto: {
        text: '境外摩托车',
        value: '11'
    },
    foreignMoto: {
        text: '外籍摩托车',
        value: '12'
    },
    agriculturalCar: {
        text: '农用运输车',
        value: '13'
    },
    tractors: {
        text: '拖拉机',
        value: '14'
    },
    trailer: {
        text: '挂车',
        value: '15'
    },
    coachCar: {
        text: '教练汽车',
        value: '16'
    },
    coachMoto: {
        text: '教练摩托车',
        value: '17'
    },
    testCar: {
        text: '试验汽车',
        value: '18'
    },
    testMoto: {
        text: '试验摩托车',
        value: '19'
    },
    temporaryCar: {
        text: '临时入境汽车',
        value: '20'
    },
    temporaryMoto: {
        text: '临时入境摩托车',
        value: '21'
    },
    temporaryDriveCar: {
        text: '临时行驶车',
        value: '22'
    },
    patrolWagon: {
        text: '警用汽车',
        value: '23'
    },
    patrolMoto: {
        text: '警用摩托',
        value: '23'
    },
    others: {
        text: '其他',
        value: '23'
    }
});

// 颜色枚举
const COLOR_TYPE = new Enums({
    A: {
        text: '白',
        // alias: 'A',
        value: 1
    },
    B: {
        text: '灰',
        // alias: 'B',
        value: 2
    },
    C: {
        text: '黄',
        // alias: 'C',
        value: 3
    },
    D: {
        text: '粉',
        // alias: 'D',
        value: 4
    },
    E: {
        text: '红',
        // alias: 'E',
        value: 5
    },
    F: {
        text: '紫',
        // alias: 'F',
        value: 6
    },
    G: {
        text: '绿',
        // alias: 'G',
        value: 7
    },
    H: {
        text: '蓝',
        // alias: 'H',
        value: 8
    },
    I: {
        text: '棕',
        // alias: 'I',
        value: 9
    },
    J: {
        text: '黑',
        // alias: 'J',
        value: 10
    },
    Z: {
        text: '其他颜色',
        // alias: 'Z',
        value: 99
    }
});

// 点位枚举
const POINT_TYPE = new Enums({
    monitor: {
        alias: 'monitor',
        text: '车控设备',
        value: 1
    },
    vidicon: {
        alias: 'vidicon',
        text: '视频设备',
        value: 2
    }
});
