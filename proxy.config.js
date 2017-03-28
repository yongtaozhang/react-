// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  '/pjt/api/gettrack': function(req, res) {
    setTimeout(function() {
      res.json({
       "code":0,
        "msg":"",
        "data":{
            "track":[
              {
                "pjtname":"运维监控",
                "finished":5,
                "alltotal":20,
                "delay":2,
                "update":3,
              },{
                "pjtname":"上海IT",
                "finished":5,
                "alltotal":20,
                "delay":2,
                "update":3,
              },{
                "pjtname":"北京IT",
                "finished":5,
                "alltotal":20,
                "delay":2,
                "update":3,
              },{
                "pjtname":"游戏运维",
                "finished":5,
                "alltotal":20,
                "delay":2,
                "update":3,
              }

            ]
        }
      });
    }, 500);
  },
  '/pjt/api/getcard': function(req, res) {
    setTimeout(function() {
      res.json({
       "code":0,
        "msg":"",
       "data":{
            "indicators":[
            {
            "name":"游戏运维",
            "变更Case数":4,
            "变更按时达成率":"100%",
            "变更完成平均时间":22.5,
            "游戏项目可用性":"100%",
            },
            {
            "name":"运维监控",
            "变更Case数":4,
            "变更按时达成率":"100%",
            "变更完成平均时间":11,
            "游戏项目可用性":"100%",
            },
            {
            "name":"IT",
            "变更Case数":4,
            "变更按时达成率":"100%",
            "变更完成平均时间":00,
            "游戏项目可用性":"100%",
            }
            ]
            }
      });
    }, 500);
  },
  '/pjt/api/getprogress': function(req, res) {
    setTimeout(function() {
      res.json({
       "code":0,
      "msg":"",
       "data":{
              "yun":[
                      {
                      "pjname":"混合云",
                      "pjpres":60,
                      "name":"混合云",
                      "pres":40,
                      },
                      {
                      "pjname":"混合云",
                      "pjpres":60,
                      "name":"运维监控",
                      "pres":50,
                      },
                     {
                      "pjname":"混合云",
                      "pjpres":60,
                      "name":"运维监控",
                      "pres":50,
                      },

              ],
              "qim":[
                      {
                      "pjname":"QIM",
                      "pjpres":60,
                      "name":"QIM",
                      "pres":70
                      },
                      {
                      "pjname":"QIM",
                      "pjpres":60,
                      "name":"运维监控",
                      "pres":50,
                      }
              ],
              "it":[
                      {
                        "pjname":"it服务平台",
                        "pjpres":81,
                        "name":"it服务平台",
                        "pres":80
                      },
                       {
                      "pjname":"it服务平台",
                      "name":"运维监控",
                      "pres":50,
                      }
              ],
              "zhibo":[
                      {
                        "pjname":"直播链路监控",
                        "pjpres":70,
                        "name":"直播",
                        "pres":40
                      },
                       {
                        "pjname":"直播链路监控",
                        "pjpres":70,
                      "name":"运维监控",
                      "pres":50,
                      }
              ]
              }
      });
    }, 500);
  },
   '/pjt/api/getcharts': function(req, res) {
    setTimeout(function() {
      res.json({
       "code":0,
       "msg":"",
       "data":{
          "state":{
            "上海IT":[
                      {
                      "linename":"完成度",
                      "linedata":{
                          "1488168300": 0.403,
                          "1488168600": 0.772,
                          "1488168900": 0.3699999999999999
                      }                    
                      },
                        {
                      "linename":"完度",
                      "linedata":{
                          "1488168300": 0.503,
                          "1488168600": 0.872,
                          "1488168900": 0.4699999999999999
                          }                    
                        }
                      ],
              "南海IT":[
                    {
                      "linename":"水温",
                      "linedata":{
                          "1488168300": 16.366,
                          "1488168600": 20.234,
                          "1488168900": 15.981999999999998
                        }
                      },
                       {
                      "linename":"水深",
                      "linedata":{
                          "1488168300": 80.366,
                          "1488168600": 60.234,
                          "1488168900": 20.981999999999998
                        }
                      }
                      ],
              "东海IT":[
                    {
                    "linename":"湿度",
                    "linedata":{
                          "1488168300": 0.9524999999999879,
                          "1488168600": 1.1344999999999992,
                          "1488168900": 0.9059999999999993
                            }
                    }
                      ]
                }
              
            }
      });
    }, 500);
  },
};
