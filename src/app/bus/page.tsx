import Bus from "./bus"
import { get_access_token } from "~/server/api/routers/bus"
import { api } from "~/trpc/server"
import { BusList } from "~/type/bus"

export default async function Page() {

    // const access_token = (await get_access_token())["access_token"]
    // const initBusList = await fetch("https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Taichung?&$select=SubRoutes,RouteName", {
    //     headers: {
    //         "Authorization": `Bearer ${access_token}`
    //     },
    //     next: {revalidate: 43200}
    // }).then(res => {
    //     console.log("fetch")
    //     return res.json()
    // }) satisfies BusList[]

    const initBusList = data as BusList[]

    return (
        <>
            <Bus initBusList={initBusList} />
        </>
    )
}

const data = [
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1",
                "SubRouteID": "1",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "1",
                    "En": "1"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 中臺科技大學校區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1",
                "SubRouteID": "1",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "1",
                    "En": "1"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 中臺科技大學校區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "1",
            "En": "1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1000",
                "SubRouteID": "1000",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "100",
                    "En": "100"
                },
                "Headsign": "高鐵臺中站 - 臺中車站(臺灣大道) - 高鐵臺中站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1000",
                "SubRouteID": "1000",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "100",
                    "En": "100"
                },
                "Headsign": "高鐵臺中站 - 臺中車站(臺灣大道) - 高鐵臺中站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "100",
            "En": "100"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG101",
                "SubRouteID": "101",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "101",
                    "En": "101"
                },
                "Headsign": "彰化車站 - 敦化后庄七街口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG101",
                "SubRouteID": "101",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "101",
                    "En": "101"
                },
                "Headsign": "彰化車站 - 敦化后庄七街口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "101",
            "En": "101"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG105",
                "SubRouteID": "105",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "105",
                    "En": "105"
                },
                "Headsign": "四張犁 - 臺中車站 - 龍井",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG105",
                "SubRouteID": "105",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "105",
                    "En": "105"
                },
                "Headsign": "四張犁 - 臺中車站 - 龍井",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "105",
            "En": "105"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1051",
                "SubRouteID": "1051",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "105副",
                    "En": "105V"
                },
                "Headsign": "大道國中校門口 - 四張犁",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "105副",
            "En": "105V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1052",
                "SubRouteID": "1052",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "105延",
                    "En": "105E"
                },
                "Headsign": "四張犁 - 臺中車站 - 龍津高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1052",
                "SubRouteID": "1052",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "105延",
                    "En": "105E"
                },
                "Headsign": "四張犁 - 臺中車站 - 龍津高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "105延",
            "En": "105E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG107",
                "SubRouteID": "107",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "107",
                    "En": "107"
                },
                "Headsign": "警察電台  - 舊正(烏溪橋頭)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG107",
                "SubRouteID": "107",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "107",
                    "En": "107"
                },
                "Headsign": "警察電台  - 舊正(烏溪橋頭)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "107",
            "En": "107"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1071",
                "SubRouteID": "1071",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "107延",
                    "En": "107E"
                },
                "Headsign": "警察電台 - 舊正社區停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1071",
                "SubRouteID": "1071",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "107延",
                    "En": "107E"
                },
                "Headsign": "警察電台 - 舊正社區停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "107延",
            "En": "107E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG108",
                "SubRouteID": "108",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "108",
                    "En": "108"
                },
                "Headsign": "港尾 - 南開科技大學校區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG108",
                "SubRouteID": "108",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "108",
                    "En": "108"
                },
                "Headsign": "港尾 - 南開科技大學校區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "108",
            "En": "108"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG11",
                "SubRouteID": "11",
                "OperatorIDs": [
                    "1",
                    "5",
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "11",
                    "En": "11"
                },
                "Headsign": "臺中車站 - 科博館 - 臺中車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG11",
                "SubRouteID": "11",
                "OperatorIDs": [
                    "1",
                    "5",
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "11",
                    "En": "11"
                },
                "Headsign": "臺中車站 - 科博館 - 臺中車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "11",
            "En": "11"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG111",
                "SubRouteID": "111",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "111",
                    "En": "111"
                },
                "Headsign": "清水車站 - 鰲峰山公園 - 臺中港旅客服務中心",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG111",
                "SubRouteID": "111",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "111",
                    "En": "111"
                },
                "Headsign": "清水車站 - 鰲峰山公園 - 臺中港旅客服務中心",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "111",
            "En": "111"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1151",
                "SubRouteID": "1151",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "151A",
                    "En": "151A"
                },
                "Headsign": "朝陽科技大學 - 臺中市議會",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "151A",
            "En": "151A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG12",
                "SubRouteID": "12",
                "OperatorIDs": [
                    "1",
                    "5",
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "12",
                    "En": "12"
                },
                "Headsign": "明德高中 - 豐原高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG12",
                "SubRouteID": "12",
                "OperatorIDs": [
                    "1",
                    "5",
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "12",
                    "En": "12"
                },
                "Headsign": "明德高中 - 豐原高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "12",
            "En": "12"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG121",
                "SubRouteID": "121",
                "OperatorIDs": [
                    "1",
                    "5",
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "12延",
                    "En": "12E"
                },
                "Headsign": "明德高中 - 豐原鎮清宮",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG121",
                "SubRouteID": "121",
                "OperatorIDs": [
                    "1",
                    "5",
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "12延",
                    "En": "12E"
                },
                "Headsign": "明德高中 - 豐原鎮清宮",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "12延",
            "En": "12E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG123",
                "SubRouteID": "123",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "123",
                    "En": "123"
                },
                "Headsign": "臺中慈濟醫院-梧棲觀光漁港",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG123",
                "SubRouteID": "123",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "123",
                    "En": "123"
                },
                "Headsign": "臺中慈濟醫院-梧棲觀光漁港",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "123",
            "En": "123"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG127",
                "SubRouteID": "127",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "127",
                    "En": "127"
                },
                "Headsign": "豐樂雕塑公園 - 臺中洲際棒球場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG127",
                "SubRouteID": "127",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "127",
                    "En": "127"
                },
                "Headsign": "豐樂雕塑公園 - 臺中洲際棒球場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "127",
            "En": "127"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1271",
                "SubRouteID": "1271",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "127延",
                    "En": "127E"
                },
                "Headsign": "捷運大慶站(建國北路) - 臺中洲際棒球場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1271",
                "SubRouteID": "1271",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "127延",
                    "En": "127E"
                },
                "Headsign": "捷運大慶站(建國北路) - 臺中洲際棒球場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "127延",
            "En": "127E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG128",
                "SubRouteID": "128",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "128",
                    "En": "128"
                },
                "Headsign": "大雅 - 清水",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG128",
                "SubRouteID": "128",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "128",
                    "En": "128"
                },
                "Headsign": "大雅 - 清水",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "128",
            "En": "128"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG129",
                "SubRouteID": "129",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "128區",
                    "En": "128S"
                },
                "Headsign": "大雅 - 梧棲",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "128區",
            "En": "128S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG131",
                "SubRouteID": "131",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "131",
                    "En": "131"
                },
                "Headsign": "北屯區行政大樓  - 朝陽科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG131",
                "SubRouteID": "131",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "131",
                    "En": "131"
                },
                "Headsign": "北屯區行政大樓  - 朝陽科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "131",
            "En": "131"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG132",
                "SubRouteID": "132",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "132",
                    "En": "132"
                },
                "Headsign": "北屯區行政大樓-朝陽科技大學 ",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG132",
                "SubRouteID": "132",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "132",
                    "En": "132"
                },
                "Headsign": "北屯區行政大樓-朝陽科技大學 ",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "132",
            "En": "132"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG133",
                "SubRouteID": "133",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "133",
                    "En": "133"
                },
                "Headsign": "新烏日車站 - 朝陽科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG133",
                "SubRouteID": "133",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "133",
                    "En": "133"
                },
                "Headsign": "新烏日車站 - 朝陽科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "133",
            "En": "133"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG14",
                "SubRouteID": "14",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "14",
                    "En": "14"
                },
                "Headsign": "干城站 - 舊庄",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG14",
                "SubRouteID": "14",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "14",
                    "En": "14"
                },
                "Headsign": "干城站 - 舊庄",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "14",
            "En": "14"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG141",
                "SubRouteID": "141",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "14副",
                    "En": "14V"
                },
                "Headsign": "干城站 - 神岡區公所",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG141",
                "SubRouteID": "141",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "14副",
                    "En": "14V"
                },
                "Headsign": "干城站 - 神岡區公所",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "14副",
            "En": "14V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1411",
                "SubRouteID": "1411",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "14副2",
                    "En": "14V2"
                },
                "Headsign": "干城站 - 大圳厚生路口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1411",
                "SubRouteID": "1411",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "14副2",
                    "En": "14V2"
                },
                "Headsign": "干城站 - 大圳厚生路口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "14副2",
            "En": "14V2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG142",
                "SubRouteID": "142",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "142",
                    "En": "142"
                },
                "Headsign": "干城站-豐年社區五站-干城站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG142",
                "SubRouteID": "142",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "142",
                    "En": "142"
                },
                "Headsign": "干城站-豐年社區五站-干城站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "142",
            "En": "142"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG144",
                "SubRouteID": "144",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "14延",
                    "En": "14E"
                },
                "Headsign": "干城站 - 南清宮",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG144",
                "SubRouteID": "144",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "14延",
                    "En": "14E"
                },
                "Headsign": "干城站 - 南清宮",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "14延",
            "En": "14E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG15",
                "SubRouteID": "15",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "15",
                    "En": "15"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 國軍臺中總醫院",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG15",
                "SubRouteID": "15",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "15",
                    "En": "15"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 國軍臺中總醫院",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "15",
            "En": "15"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG151",
                "SubRouteID": "151",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "151",
                    "En": "151"
                },
                "Headsign": "臺中市議會 - 朝陽科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG151",
                "SubRouteID": "151",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "151",
                    "En": "151"
                },
                "Headsign": "臺中市議會 - 朝陽科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "151",
            "En": "151"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG152",
                "SubRouteID": "152",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "152",
                    "En": "152"
                },
                "Headsign": "臺中市議會 - 翁子國小",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG152",
                "SubRouteID": "152",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "152",
                    "En": "152"
                },
                "Headsign": "臺中市議會 - 翁子國小",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "152",
            "En": "152"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1522",
                "SubRouteID": "1522",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "152區2",
                    "En": "152S2"
                },
                "Headsign": "臺中市議會 - 社皮鐵路巷 - 臺中市議會",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1522",
                "SubRouteID": "1522",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "152區2",
                    "En": "152S2"
                },
                "Headsign": "臺中市議會 - 社皮鐵路巷 - 臺中市議會",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "152區2",
            "En": "152S2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG153",
                "SubRouteID": "153",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "153",
                    "En": "153"
                },
                "Headsign": "高鐵臺中站 - 谷關",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG153",
                "SubRouteID": "153",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "153",
                    "En": "153"
                },
                "Headsign": "高鐵臺中站 - 谷關",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "153",
            "En": "153"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1533",
                "SubRouteID": "1533",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "153延",
                    "En": "153E"
                },
                "Headsign": "高鐵臺中站 - 八仙山森林遊樂區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1533",
                "SubRouteID": "1533",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "153延",
                    "En": "153E"
                },
                "Headsign": "高鐵臺中站 - 八仙山森林遊樂區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "153延",
            "En": "153E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG154",
                "SubRouteID": "154",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "154",
                    "En": "154"
                },
                "Headsign": "臺中女中 - 大甲區公所",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG154",
                "SubRouteID": "154",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "154",
                    "En": "154"
                },
                "Headsign": "臺中女中 - 大甲區公所",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "154",
            "En": "154"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1541",
                "SubRouteID": "1541",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "154延",
                    "En": "154E"
                },
                "Headsign": "臺中女中 - 頂店",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1541",
                "SubRouteID": "1541",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "154延",
                    "En": "154E"
                },
                "Headsign": "臺中女中 - 頂店",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "154延",
            "En": "154E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG155",
                "SubRouteID": "155",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "155",
                    "En": "155"
                },
                "Headsign": "高鐵臺中站 - 麗寶樂園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG155",
                "SubRouteID": "155",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "155",
                    "En": "155"
                },
                "Headsign": "高鐵臺中站 - 麗寶樂園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "155",
            "En": "155"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1551",
                "SubRouteID": "1551",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "155副",
                    "En": "155V"
                },
                "Headsign": "高鐵臺中站 - 麗寶樂園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1551",
                "SubRouteID": "1551",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "155副",
                    "En": "155V"
                },
                "Headsign": "高鐵臺中站 - 麗寶樂園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "155副",
            "En": "155V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG156",
                "SubRouteID": "156",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "156",
                    "En": "156"
                },
                "Headsign": "臺中國際機場 - 高鐵臺中站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG156",
                "SubRouteID": "156",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "156",
                    "En": "156"
                },
                "Headsign": "臺中國際機場 - 高鐵臺中站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "156",
            "En": "156"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG157",
                "SubRouteID": "157",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "157",
                    "En": "157"
                },
                "Headsign": "捷運文心森林公園站 - 大甲區公所",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG157",
                "SubRouteID": "157",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "157",
                    "En": "157"
                },
                "Headsign": "捷運文心森林公園站 - 大甲區公所",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "157",
            "En": "157"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1571",
                "SubRouteID": "1571",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "157延",
                    "En": "157E"
                },
                "Headsign": "向上惠文路口 - 頂店",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1571",
                "SubRouteID": "1571",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "157延",
                    "En": "157E"
                },
                "Headsign": "向上惠文路口 - 頂店",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "157延",
            "En": "157E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1572",
                "SubRouteID": "1572",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "157繞",
                    "En": "157A"
                },
                "Headsign": "捷運文心森林公園站 - 大甲區公所",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1572",
                "SubRouteID": "1572",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "157繞",
                    "En": "157A"
                },
                "Headsign": "捷運文心森林公園站 - 大甲區公所",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "157繞",
            "En": "157A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG158",
                "SubRouteID": "158",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "158",
                    "En": "158"
                },
                "Headsign": "高鐵臺中站 - 朝陽科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG158",
                "SubRouteID": "158",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "158",
                    "En": "158"
                },
                "Headsign": "高鐵臺中站 - 朝陽科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "158",
            "En": "158"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG159",
                "SubRouteID": "159",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "159",
                    "En": "159"
                },
                "Headsign": "高鐵臺中站 - 臺中公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG159",
                "SubRouteID": "159",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "159",
                    "En": "159"
                },
                "Headsign": "高鐵臺中站 - 臺中公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "159",
            "En": "159"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG160",
                "SubRouteID": "160",
                "OperatorIDs": [
                    "8"
                ],
                "SubRouteName": {
                    "Zh_tw": "160",
                    "En": "160"
                },
                "Headsign": "高鐵臺中站 - 文修停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG160",
                "SubRouteID": "160",
                "OperatorIDs": [
                    "8"
                ],
                "SubRouteName": {
                    "Zh_tw": "160",
                    "En": "160"
                },
                "Headsign": "高鐵臺中站 - 文修停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "160",
            "En": "160"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1601",
                "SubRouteID": "1601",
                "OperatorIDs": [
                    "8"
                ],
                "SubRouteName": {
                    "Zh_tw": "160副",
                    "En": "160V"
                },
                "Headsign": "高鐵臺中站 - 文修停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1601",
                "SubRouteID": "1601",
                "OperatorIDs": [
                    "8"
                ],
                "SubRouteName": {
                    "Zh_tw": "160副",
                    "En": "160V"
                },
                "Headsign": "高鐵臺中站 - 文修停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "160副",
            "En": "160V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG161",
                "SubRouteID": "161",
                "OperatorIDs": [
                    "8"
                ],
                "SubRouteName": {
                    "Zh_tw": "161",
                    "En": "161"
                },
                "Headsign": "高鐵臺中站 - 中科管理局",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG161",
                "SubRouteID": "161",
                "OperatorIDs": [
                    "8"
                ],
                "SubRouteName": {
                    "Zh_tw": "161",
                    "En": "161"
                },
                "Headsign": "高鐵臺中站 - 中科管理局",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "161",
            "En": "161"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1611",
                "SubRouteID": "1611",
                "OperatorIDs": [
                    "8"
                ],
                "SubRouteName": {
                    "Zh_tw": "161副",
                    "En": "161V"
                },
                "Headsign": "高鐵臺中站-玉門路-中科管理局",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1611",
                "SubRouteID": "1611",
                "OperatorIDs": [
                    "8"
                ],
                "SubRouteName": {
                    "Zh_tw": "161副",
                    "En": "161V"
                },
                "Headsign": "高鐵臺中站-玉門路-中科管理局",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "161副",
            "En": "161V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG162",
                "SubRouteID": "162",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "162",
                    "En": "162"
                },
                "Headsign": "靜宜大學-嘉陽高中-靜宜大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG162",
                "SubRouteID": "162",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "162",
                    "En": "162"
                },
                "Headsign": "靜宜大學-嘉陽高中-靜宜大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "162",
            "En": "162"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG163",
                "SubRouteID": "163",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "163",
                    "En": "163"
                },
                "Headsign": "國軍英雄館 - 華盛頓中學 - 國軍英雄館",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG163",
                "SubRouteID": "163",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "163",
                    "En": "163"
                },
                "Headsign": "國軍英雄館 - 華盛頓中學 - 國軍英雄館",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "163",
            "En": "163"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG164",
                "SubRouteID": "164",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "164",
                    "En": "164"
                },
                "Headsign": "清水國中 - 南清宮",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG164",
                "SubRouteID": "164",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "164",
                    "En": "164"
                },
                "Headsign": "清水國中 - 南清宮",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "164",
            "En": "164"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG165",
                "SubRouteID": "165",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "165",
                    "En": "165"
                },
                "Headsign": "清水國中 - 舊庄",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG165",
                "SubRouteID": "165",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "165",
                    "En": "165"
                },
                "Headsign": "清水國中 - 舊庄",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "165",
            "En": "165"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG17",
                "SubRouteID": "17",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "17",
                    "En": "17"
                },
                "Headsign": "草湖 - 復興八街口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG17",
                "SubRouteID": "17",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "17",
                    "En": "17"
                },
                "Headsign": "草湖 - 復興八街口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "17",
            "En": "17"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG170",
                "SubRouteID": "170",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "170",
                    "En": "170"
                },
                "Headsign": "臺中港旅客服務中心 - 大甲",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG170",
                "SubRouteID": "170",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "170",
                    "En": "170"
                },
                "Headsign": "臺中港旅客服務中心 - 大甲",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "170",
            "En": "170"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG178",
                "SubRouteID": "178",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "178",
                    "En": "178"
                },
                "Headsign": "清水車站 - 高美 - 高美濕地",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG178",
                "SubRouteID": "178",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "178",
                    "En": "178"
                },
                "Headsign": "清水車站 - 高美 - 高美濕地",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "178",
            "En": "178"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG179",
                "SubRouteID": "179",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "179",
                    "En": "179"
                },
                "Headsign": "清水車站 - 三美 - 高美濕地",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG179",
                "SubRouteID": "179",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "179",
                    "En": "179"
                },
                "Headsign": "清水車站 - 三美 - 高美濕地",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "179",
            "En": "179"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG180",
                "SubRouteID": "180",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "180",
                    "En": "180"
                },
                "Headsign": "沙鹿 - 彰化",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG180",
                "SubRouteID": "180",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "180",
                    "En": "180"
                },
                "Headsign": "沙鹿 - 彰化",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "180",
            "En": "180"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG181",
                "SubRouteID": "181",
                "OperatorIDs": [
                    "12"
                ],
                "SubRouteName": {
                    "Zh_tw": "181",
                    "En": "181"
                },
                "Headsign": "苑裡站 - 大甲區公所",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG181",
                "SubRouteID": "181",
                "OperatorIDs": [
                    "12"
                ],
                "SubRouteName": {
                    "Zh_tw": "181",
                    "En": "181"
                },
                "Headsign": "苑裡站 - 大甲區公所",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "181",
            "En": "181"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1811",
                "SubRouteID": "1811",
                "OperatorIDs": [
                    "12"
                ],
                "SubRouteName": {
                    "Zh_tw": "181區1",
                    "En": "181S1"
                },
                "Headsign": "苑裡站 - 日南國中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1811",
                "SubRouteID": "1811",
                "OperatorIDs": [
                    "12"
                ],
                "SubRouteName": {
                    "Zh_tw": "181區1",
                    "En": "181S1"
                },
                "Headsign": "苑裡站 - 日南國中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "181區1",
            "En": "181S1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG1812",
                "SubRouteID": "1812",
                "OperatorIDs": [
                    "12"
                ],
                "SubRouteName": {
                    "Zh_tw": "181區2",
                    "En": "181S2"
                },
                "Headsign": "苑裡站 - 日南國中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG1812",
                "SubRouteID": "1812",
                "OperatorIDs": [
                    "12"
                ],
                "SubRouteName": {
                    "Zh_tw": "181區2",
                    "En": "181S2"
                },
                "Headsign": "苑裡站 - 日南國中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "181區2",
            "En": "181S2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG182",
                "SubRouteID": "182",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "182",
                    "En": "182"
                },
                "Headsign": "豐原轉運中心 - 新庄 - 清水",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG182",
                "SubRouteID": "182",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "182",
                    "En": "182"
                },
                "Headsign": "豐原轉運中心 - 新庄 - 清水",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "182",
            "En": "182"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG183",
                "SubRouteID": "183",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "183",
                    "En": "183"
                },
                "Headsign": "豐原轉運中心 - 新庄 - 臺中港郵局",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG183",
                "SubRouteID": "183",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "183",
                    "En": "183"
                },
                "Headsign": "豐原轉運中心 - 新庄 - 臺中港郵局",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "183",
            "En": "183"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG185",
                "SubRouteID": "185",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "185",
                    "En": "185"
                },
                "Headsign": "豐原轉運中心 - 東山 - 清水",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG185",
                "SubRouteID": "185",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "185",
                    "En": "185"
                },
                "Headsign": "豐原轉運中心 - 東山 - 清水",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "185",
            "En": "185"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG186",
                "SubRouteID": "186",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "186",
                    "En": "186"
                },
                "Headsign": "豐原轉運中心 - 東山 - 臺中港郵局",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG186",
                "SubRouteID": "186",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "186",
                    "En": "186"
                },
                "Headsign": "豐原轉運中心 - 東山 - 臺中港郵局",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "186",
            "En": "186"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG19",
                "SubRouteID": "19",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "19",
                    "En": "19"
                },
                "Headsign": "慈濟醫院 - 美術館(五權西路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG19",
                "SubRouteID": "19",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "19",
                    "En": "19"
                },
                "Headsign": "慈濟醫院 - 美術館(五權西路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "19",
            "En": "19"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG20",
                "SubRouteID": "20",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "20",
                    "En": "20"
                },
                "Headsign": "干城站 - 潭子車站(東站)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG20",
                "SubRouteID": "20",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "20",
                    "En": "20"
                },
                "Headsign": "干城站 - 潭子車站(東站)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "20",
            "En": "20"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2000",
                "SubRouteID": "2000",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "200",
                    "En": "200"
                },
                "Headsign": "亞大醫院 - 新民高中(健行路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2000",
                "SubRouteID": "2000",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "200",
                    "En": "200"
                },
                "Headsign": "亞大醫院 - 新民高中(健行路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "200",
            "En": "200"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2001",
                "SubRouteID": "2001",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "200跳蛙公車",
                    "En": "200J"
                },
                "Headsign": "亞大醫院 - 臺中女中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2001",
                "SubRouteID": "2001",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "200跳蛙公車",
                    "En": "200J"
                },
                "Headsign": "亞大醫院 - 臺中女中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "200跳蛙公車",
            "En": "200J"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG202",
                "SubRouteID": "202",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "202",
                    "En": "202"
                },
                "Headsign": "豐富公園 - 樹德路 - 豐原",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG202",
                "SubRouteID": "202",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "202",
                    "En": "202"
                },
                "Headsign": "豐富公園 - 樹德路 - 豐原",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "202",
            "En": "202"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG203",
                "SubRouteID": "203",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "203",
                    "En": "203"
                },
                "Headsign": "豐富公園 - 新田 - 豐原",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG203",
                "SubRouteID": "203",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "203",
                    "En": "203"
                },
                "Headsign": "豐富公園 - 新田 - 豐原",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "203",
            "En": "203"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG206",
                "SubRouteID": "206",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "206",
                    "En": "206"
                },
                "Headsign": "豐原 - 東勢高工",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG206",
                "SubRouteID": "206",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "206",
                    "En": "206"
                },
                "Headsign": "豐原 - 東勢高工",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "206",
            "En": "206"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG207",
                "SubRouteID": "207",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "207",
                    "En": "207"
                },
                "Headsign": "豐原 - 谷關",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG207",
                "SubRouteID": "207",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "207",
                    "En": "207"
                },
                "Headsign": "豐原 - 谷關",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "207",
            "En": "207"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2071",
                "SubRouteID": "2071",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "207繞",
                    "En": "207A"
                },
                "Headsign": "豐原 - 龍安 - 谷關",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2071",
                "SubRouteID": "2071",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "207繞",
                    "En": "207A"
                },
                "Headsign": "豐原 - 龍安 - 谷關",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "207繞",
            "En": "207A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG208",
                "SubRouteID": "208",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "208",
                    "En": "208"
                },
                "Headsign": "豐原 - 卓蘭",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG208",
                "SubRouteID": "208",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "208",
                    "En": "208"
                },
                "Headsign": "豐原 - 卓蘭",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "208",
            "En": "208"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2081",
                "SubRouteID": "2081",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "208繞",
                    "En": "208A"
                },
                "Headsign": "豐原 - 卓蘭",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2081",
                "SubRouteID": "2081",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "208繞",
                    "En": "208A"
                },
                "Headsign": "豐原 - 卓蘭",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "208繞",
            "En": "208A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG209",
                "SubRouteID": "209",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "209",
                    "En": "209"
                },
                "Headsign": "豐原 - 東勢林場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG209",
                "SubRouteID": "209",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "209",
                    "En": "209"
                },
                "Headsign": "豐原 - 東勢林場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "209",
            "En": "209"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG21",
                "SubRouteID": "21",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "21",
                    "En": "21"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 三貴城",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG21",
                "SubRouteID": "21",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "21",
                    "En": "21"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 三貴城",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "21",
            "En": "21"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG211",
                "SubRouteID": "211",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "211",
                    "En": "211"
                },
                "Headsign": "豐原 - 土城 - 大甲體育場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG211",
                "SubRouteID": "211",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "211",
                    "En": "211"
                },
                "Headsign": "豐原 - 土城 - 大甲體育場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "211",
            "En": "211"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG212",
                "SubRouteID": "212",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "212",
                    "En": "212"
                },
                "Headsign": "豐原 - 水美 - 大甲體育場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG212",
                "SubRouteID": "212",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "212",
                    "En": "212"
                },
                "Headsign": "豐原 - 水美 - 大甲體育場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "212",
            "En": "212"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG213",
                "SubRouteID": "213",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "213",
                    "En": "213"
                },
                "Headsign": "豐原 - 下后里 - 大甲體育場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG213",
                "SubRouteID": "213",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "213",
                    "En": "213"
                },
                "Headsign": "豐原 - 下后里 - 大甲體育場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "213",
            "En": "213"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG215",
                "SubRouteID": "215",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "215",
                    "En": "215"
                },
                "Headsign": "豐原 - 麗寶樂園 - 大甲體育場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG215",
                "SubRouteID": "215",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "215",
                    "En": "215"
                },
                "Headsign": "豐原 - 麗寶樂園 - 大甲體育場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "215",
            "En": "215"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG218",
                "SubRouteID": "218",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "218",
                    "En": "218"
                },
                "Headsign": "豐原轉運中心 - 神岡區公所",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG218",
                "SubRouteID": "218",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "218",
                    "En": "218"
                },
                "Headsign": "豐原轉運中心 - 神岡區公所",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "218",
            "En": "218"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG219",
                "SubRouteID": "219",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "219",
                    "En": "219"
                },
                "Headsign": "石岡國小 - 龍興里",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG219",
                "SubRouteID": "219",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "219",
                    "En": "219"
                },
                "Headsign": "石岡國小 - 龍興里",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "219",
            "En": "219"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG220",
                "SubRouteID": "220",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "220",
                    "En": "220"
                },
                "Headsign": "豐原轉運中心 - 社口 - 國安社區(宜寧中學)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG220",
                "SubRouteID": "220",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "220",
                    "En": "220"
                },
                "Headsign": "豐原轉運中心 - 社口 - 國安社區(宜寧中學)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "220",
            "En": "220"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG223",
                "SubRouteID": "223",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "223",
                    "En": "223"
                },
                "Headsign": "豐原 - 公老坪頂",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG223",
                "SubRouteID": "223",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "223",
                    "En": "223"
                },
                "Headsign": "豐原 - 公老坪頂",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "223",
            "En": "223"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG227",
                "SubRouteID": "227",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "227",
                    "En": "227"
                },
                "Headsign": "豐原 - 東陽里",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG227",
                "SubRouteID": "227",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "227",
                    "En": "227"
                },
                "Headsign": "豐原 - 東陽里",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "227",
            "En": "227"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG23",
                "SubRouteID": "23",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "23",
                    "En": "23"
                },
                "Headsign": "中清同榮路口 - 中興東南路口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG23",
                "SubRouteID": "23",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "23",
                    "En": "23"
                },
                "Headsign": "中清同榮路口 - 中興東南路口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "23",
            "En": "23"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG232",
                "SubRouteID": "232",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "232",
                    "En": "232"
                },
                "Headsign": "豐原轉運中心 - 東山",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG232",
                "SubRouteID": "232",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "232",
                    "En": "232"
                },
                "Headsign": "豐原轉運中心 - 東山",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "232",
            "En": "232"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG235",
                "SubRouteID": "235",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "235",
                    "En": "235"
                },
                "Headsign": "豐原圓環線",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG235",
                "SubRouteID": "235",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "235",
                    "En": "235"
                },
                "Headsign": "豐原圓環線",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "235",
            "En": "235"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG237",
                "SubRouteID": "237",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "237",
                    "En": "237"
                },
                "Headsign": "豐原轉運中心 - 大肚車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG237",
                "SubRouteID": "237",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "237",
                    "En": "237"
                },
                "Headsign": "豐原轉運中心 - 大肚車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "237",
            "En": "237"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2371",
                "SubRouteID": "2371",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "237區",
                    "En": "237S"
                },
                "Headsign": "豐原轉運中心 - 麗水",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2371",
                "SubRouteID": "2371",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "237區",
                    "En": "237S"
                },
                "Headsign": "豐原轉運中心 - 麗水",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "237區",
            "En": "237S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG238",
                "SubRouteID": "238",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "238",
                    "En": "238"
                },
                "Headsign": "豐原轉運中心 - 臺中港郵局",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG238",
                "SubRouteID": "238",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "238",
                    "En": "238"
                },
                "Headsign": "豐原轉運中心 - 臺中港郵局",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "238",
            "En": "238"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG239",
                "SubRouteID": "239",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "239",
                    "En": "239"
                },
                "Headsign": "豐原轉運中心 - 梧棲",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG239",
                "SubRouteID": "239",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "239",
                    "En": "239"
                },
                "Headsign": "豐原轉運中心 - 梧棲",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "239",
            "En": "239"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG242",
                "SubRouteID": "242",
                "OperatorIDs": [
                    "15",
                    "17",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "242",
                    "En": "242"
                },
                "Headsign": "高鐵臺中站 - 吉星社區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG242",
                "SubRouteID": "242",
                "OperatorIDs": [
                    "15",
                    "17",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "242",
                    "En": "242"
                },
                "Headsign": "高鐵臺中站 - 吉星社區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "242",
            "En": "242"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG243",
                "SubRouteID": "243",
                "OperatorIDs": [
                    "1",
                    "17"
                ],
                "SubRouteName": {
                    "Zh_tw": "243",
                    "En": "243"
                },
                "Headsign": "東山高中(景賢六路) - 亞洲大學安藤館",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG243",
                "SubRouteID": "243",
                "OperatorIDs": [
                    "1",
                    "17"
                ],
                "SubRouteName": {
                    "Zh_tw": "243",
                    "En": "243"
                },
                "Headsign": "東山高中(景賢六路) - 亞洲大學安藤館",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "243",
            "En": "243"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG245",
                "SubRouteID": "245",
                "OperatorIDs": [
                    "1",
                    "17"
                ],
                "SubRouteName": {
                    "Zh_tw": "245",
                    "En": "245"
                },
                "Headsign": "頂街(沙田路) - 亞大醫院",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG245",
                "SubRouteID": "245",
                "OperatorIDs": [
                    "1",
                    "17"
                ],
                "SubRouteName": {
                    "Zh_tw": "245",
                    "En": "245"
                },
                "Headsign": "頂街(沙田路) - 亞大醫院",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "245",
            "En": "245"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2451",
                "SubRouteID": "2451",
                "OperatorIDs": [
                    "1",
                    "17"
                ],
                "SubRouteName": {
                    "Zh_tw": "245繞",
                    "En": "245A"
                },
                "Headsign": "頂街(沙田路) - 亞大醫院",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2451",
                "SubRouteID": "2451",
                "OperatorIDs": [
                    "1",
                    "17"
                ],
                "SubRouteName": {
                    "Zh_tw": "245繞",
                    "En": "245A"
                },
                "Headsign": "頂街(沙田路) - 亞大醫院",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "245繞",
            "En": "245A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG246",
                "SubRouteID": "246",
                "OperatorIDs": [
                    "21"
                ],
                "SubRouteName": {
                    "Zh_tw": "246",
                    "En": "246"
                },
                "Headsign": "秀泰影城 - 吉星社區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG246",
                "SubRouteID": "246",
                "OperatorIDs": [
                    "21"
                ],
                "SubRouteName": {
                    "Zh_tw": "246",
                    "En": "246"
                },
                "Headsign": "秀泰影城 - 吉星社區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "246",
            "En": "246"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2461",
                "SubRouteID": "2461",
                "OperatorIDs": [
                    "21"
                ],
                "SubRouteName": {
                    "Zh_tw": "246延",
                    "En": "246E"
                },
                "Headsign": "中國醫藥大學 - 吉星社區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2461",
                "SubRouteID": "2461",
                "OperatorIDs": [
                    "21"
                ],
                "SubRouteName": {
                    "Zh_tw": "246延",
                    "En": "246E"
                },
                "Headsign": "中國醫藥大學 - 吉星社區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "246延",
            "En": "246E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG248",
                "SubRouteID": "248",
                "OperatorIDs": [
                    "1",
                    "17",
                    "25",
                    "4",
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "248",
                    "En": "248"
                },
                "Headsign": "新烏日車站 - 修平科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG248",
                "SubRouteID": "248",
                "OperatorIDs": [
                    "1",
                    "17",
                    "25",
                    "4",
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "248",
                    "En": "248"
                },
                "Headsign": "新烏日車站 - 修平科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "248",
            "En": "248"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG249",
                "SubRouteID": "249",
                "OperatorIDs": [
                    "1",
                    "17",
                    "19",
                    "25",
                    "4",
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "249",
                    "En": "249"
                },
                "Headsign": "臺中車站(民族路口) - 修平科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG249",
                "SubRouteID": "249",
                "OperatorIDs": [
                    "1",
                    "17",
                    "19",
                    "25",
                    "4",
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "249",
                    "En": "249"
                },
                "Headsign": "臺中車站(民族路口) - 修平科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "249",
            "En": "249"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2491",
                "SubRouteID": "2491",
                "OperatorIDs": [
                    "1",
                    "17",
                    "19",
                    "25",
                    "4",
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "249延",
                    "En": "249E"
                },
                "Headsign": "臺中車站(民族路口) - 朝陽科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2491",
                "SubRouteID": "2491",
                "OperatorIDs": [
                    "1",
                    "17",
                    "19",
                    "25",
                    "4",
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "249延",
                    "En": "249E"
                },
                "Headsign": "臺中車站(民族路口) - 朝陽科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "249延",
            "En": "249E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG25",
                "SubRouteID": "25",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "25",
                    "En": "25"
                },
                "Headsign": "忠信國小(柳川西路) - 凱旋敦化路口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG25",
                "SubRouteID": "25",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "25",
                    "En": "25"
                },
                "Headsign": "忠信國小(柳川西路) - 凱旋敦化路口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "25",
            "En": "25"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG250",
                "SubRouteID": "250",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "250",
                    "En": "250"
                },
                "Headsign": "東勢 - 中坑坪",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG250",
                "SubRouteID": "250",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "250",
                    "En": "250"
                },
                "Headsign": "東勢 - 中坑坪",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "250",
            "En": "250"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2501",
                "SubRouteID": "2501",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃1",
                    "En": "Yellow 1"
                },
                "Headsign": "豐原 - 公老坪頂",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2501",
                "SubRouteID": "2501",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃1",
                    "En": "Yellow 1"
                },
                "Headsign": "豐原 - 公老坪頂",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃1",
            "En": "Yellow 1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2502",
                "SubRouteID": "2502",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃2",
                    "En": "Yellow 2"
                },
                "Headsign": "東勢 - 民安",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2502",
                "SubRouteID": "2502",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃2",
                    "En": "Yellow 2"
                },
                "Headsign": "東勢 - 民安",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃2",
            "En": "Yellow 2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2503",
                "SubRouteID": "2503",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃3",
                    "En": "Yellow 3"
                },
                "Headsign": "中興嶺 - 茄苳寮",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2503",
                "SubRouteID": "2503",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃3",
                    "En": "Yellow 3"
                },
                "Headsign": "中興嶺 - 茄苳寮",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃3",
            "En": "Yellow 3"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2504",
                "SubRouteID": "2504",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃4",
                    "En": "Yellow 4"
                },
                "Headsign": "朴子里活動中心 - 豐原醫院",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2504",
                "SubRouteID": "2504",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃4",
                    "En": "Yellow 4"
                },
                "Headsign": "朴子里活動中心 - 豐原醫院",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃4",
            "En": "Yellow 4"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2505",
                "SubRouteID": "2505",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃5",
                    "En": "Yellow 5"
                },
                "Headsign": "慈明高中 - 黃竹里",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2505",
                "SubRouteID": "2505",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃5",
                    "En": "Yellow 5"
                },
                "Headsign": "慈明高中 - 黃竹里",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃5",
            "En": "Yellow 5"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2506",
                "SubRouteID": "2506",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃6",
                    "En": "Yellow 6"
                },
                "Headsign": "霧峰 - 青桐林生態產業園區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2506",
                "SubRouteID": "2506",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃6",
                    "En": "Yellow 6"
                },
                "Headsign": "霧峰 - 青桐林生態產業園區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃6",
            "En": "Yellow 6"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2507",
                "SubRouteID": "2507",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃7",
                    "En": "Yellow 7"
                },
                "Headsign": "霧峰 - 象鼻橋",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2507",
                "SubRouteID": "2507",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃7",
                    "En": "Yellow 7"
                },
                "Headsign": "霧峰 - 象鼻橋",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃7",
            "En": "Yellow 7"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2508",
                "SubRouteID": "2508",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃8",
                    "En": "Yellow 8"
                },
                "Headsign": "霧峰郵局 - 喀哩",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2508",
                "SubRouteID": "2508",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃8",
                    "En": "Yellow 8"
                },
                "Headsign": "霧峰郵局 - 喀哩",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃8",
            "En": "Yellow 8"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2509",
                "SubRouteID": "2509",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃9",
                    "En": "Yellow 9"
                },
                "Headsign": "和平衛生所 - 福民國小",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2509",
                "SubRouteID": "2509",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃9",
                    "En": "Yellow 9"
                },
                "Headsign": "和平衛生所 - 福民國小",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃9",
            "En": "Yellow 9"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG251",
                "SubRouteID": "251",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "251",
                    "En": "251"
                },
                "Headsign": "東勢 - 橫流溪",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG251",
                "SubRouteID": "251",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "251",
                    "En": "251"
                },
                "Headsign": "東勢 - 橫流溪",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "251",
            "En": "251"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2510",
                "SubRouteID": "2510",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃10",
                    "En": "Yellow 10"
                },
                "Headsign": "大富路一段325巷口 - 潭子車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2510",
                "SubRouteID": "2510",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃10",
                    "En": "Yellow 10"
                },
                "Headsign": "大富路一段325巷口 - 潭子車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃10",
            "En": "Yellow 10"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2511",
                "SubRouteID": "2511",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃11",
                    "En": "Yellow 11"
                },
                "Headsign": "天母櫻城 - 麗水",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2511",
                "SubRouteID": "2511",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃11",
                    "En": "Yellow 11"
                },
                "Headsign": "天母櫻城 - 麗水",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃11",
            "En": "Yellow 11"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2512",
                "SubRouteID": "2512",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃12",
                    "En": "Yellow 12"
                },
                "Headsign": "南庄 - 大甲車站(中山路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2512",
                "SubRouteID": "2512",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃12",
                    "En": "Yellow 12"
                },
                "Headsign": "南庄 - 大甲車站(中山路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃12",
            "En": "Yellow 12"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2513",
                "SubRouteID": "2513",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃13",
                    "En": "Yellow 13"
                },
                "Headsign": "大缺(客庄路) - 華南銀行(清水分行)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2513",
                "SubRouteID": "2513",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃13",
                    "En": "Yellow 13"
                },
                "Headsign": "大缺(客庄路) - 華南銀行(清水分行)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃13",
            "En": "Yellow 13"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2514",
                "SubRouteID": "2514",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃14",
                    "En": "Yellow 14"
                },
                "Headsign": "裕嘉里 - 清水車站(中正街)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2514",
                "SubRouteID": "2514",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃14",
                    "En": "Yellow 14"
                },
                "Headsign": "裕嘉里 - 清水車站(中正街)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃14",
            "En": "Yellow 14"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2515",
                "SubRouteID": "2515",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃15",
                    "En": "Yellow 15"
                },
                "Headsign": "天母櫻城 - 沙鹿車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2515",
                "SubRouteID": "2515",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃15",
                    "En": "Yellow 15"
                },
                "Headsign": "天母櫻城 - 沙鹿車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃15",
            "En": "Yellow 15"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2516",
                "SubRouteID": "2516",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃16",
                    "En": "Yellow 16"
                },
                "Headsign": "福民國小-長福橋(永豐)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2516",
                "SubRouteID": "2516",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃16",
                    "En": "Yellow 16"
                },
                "Headsign": "福民國小-長福橋(永豐)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃16",
            "En": "Yellow 16"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2517",
                "SubRouteID": "2517",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃17",
                    "En": "Yellow 17"
                },
                "Headsign": "中興嶺-石岡區公所",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2517",
                "SubRouteID": "2517",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃17",
                    "En": "Yellow 17"
                },
                "Headsign": "中興嶺-石岡區公所",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃17",
            "En": "Yellow 17"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG25171",
                "SubRouteID": "25171",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃17末班",
                    "En": "Yellow 17"
                },
                "Headsign": "中興嶺-崑山",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG25171",
                "SubRouteID": "25171",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃17末班",
                    "En": "Yellow 17"
                },
                "Headsign": "中興嶺-崑山",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃17末班",
            "En": "Yellow 17"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2518",
                "SubRouteID": "2518",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃18",
                    "En": "Yellow 18"
                },
                "Headsign": "四塊厝(合安宮)-后里車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2518",
                "SubRouteID": "2518",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃18",
                    "En": "Yellow 18"
                },
                "Headsign": "四塊厝(合安宮)-后里車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃18",
            "En": "Yellow 18"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2519",
                "SubRouteID": "2519",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃19",
                    "En": "Yellow 19"
                },
                "Headsign": "后里口庄-外埔",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2519",
                "SubRouteID": "2519",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃19",
                    "En": "Yellow 19"
                },
                "Headsign": "后里口庄-外埔",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃19",
            "En": "Yellow 19"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG252",
                "SubRouteID": "252",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "252",
                    "En": "252"
                },
                "Headsign": "東勢 - 大雪山森林遊樂區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG252",
                "SubRouteID": "252",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "252",
                    "En": "252"
                },
                "Headsign": "東勢 - 大雪山森林遊樂區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "252",
            "En": "252"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2520",
                "SubRouteID": "2520",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃20",
                    "En": "Yellow 20"
                },
                "Headsign": "鴨母寮永安宮-沙鹿光田醫院",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2520",
                "SubRouteID": "2520",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃20",
                    "En": "Yellow 20"
                },
                "Headsign": "鴨母寮永安宮-沙鹿光田醫院",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃20",
            "En": "Yellow 20"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2523",
                "SubRouteID": "2523",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃21",
                    "En": "Yellow 21"
                },
                "Headsign": "王田-追分郵局",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2523",
                "SubRouteID": "2523",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃21",
                    "En": "Yellow 21"
                },
                "Headsign": "王田-追分郵局",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃21",
            "En": "Yellow 21"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2524",
                "SubRouteID": "2524",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃22",
                    "En": "Yellow 22"
                },
                "Headsign": "下舊庄-大雅",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2524",
                "SubRouteID": "2524",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃22",
                    "En": "Yellow 22"
                },
                "Headsign": "下舊庄-大雅",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃22",
            "En": "Yellow 22"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2525",
                "SubRouteID": "2525",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃23",
                    "En": "Yellow 23"
                },
                "Headsign": "中庄-大甲車站(中山路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2525",
                "SubRouteID": "2525",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃23",
                    "En": "Yellow 23"
                },
                "Headsign": "中庄-大甲車站(中山路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃23",
            "En": "Yellow 23"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2526",
                "SubRouteID": "2526",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃24",
                    "En": "Yellow 24"
                },
                "Headsign": "麗水-龍井車站(龍新路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2526",
                "SubRouteID": "2526",
                "OperatorIDs": [
                    "8103"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃24",
                    "En": "Yellow 24"
                },
                "Headsign": "麗水-龍井車站(龍新路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃24",
            "En": "Yellow 24"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2527",
                "SubRouteID": "2527",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃25",
                    "En": "Yellow 25"
                },
                "Headsign": "捷運九德站(興華街)-溪尾國小",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2527",
                "SubRouteID": "2527",
                "OperatorIDs": [
                    "8102"
                ],
                "SubRouteName": {
                    "Zh_tw": "黃25",
                    "En": "Yellow 25"
                },
                "Headsign": "捷運九德站(興華街)-溪尾國小",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "黃25",
            "En": "Yellow 25"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG253",
                "SubRouteID": "253",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "253",
                    "En": "253"
                },
                "Headsign": "東勢 - 士林村",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG253",
                "SubRouteID": "253",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "253",
                    "En": "253"
                },
                "Headsign": "東勢 - 士林村",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "253",
            "En": "253"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG258",
                "SubRouteID": "258",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "258",
                    "En": "258"
                },
                "Headsign": "東勢 - 卓蘭",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG258",
                "SubRouteID": "258",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "258",
                    "En": "258"
                },
                "Headsign": "東勢 - 卓蘭",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "258",
            "En": "258"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2581",
                "SubRouteID": "2581",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "258繞",
                    "En": "258A"
                },
                "Headsign": "東勢 - 卓蘭",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2581",
                "SubRouteID": "2581",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "258繞",
                    "En": "258A"
                },
                "Headsign": "東勢 - 卓蘭",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "258繞",
            "En": "258A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG26",
                "SubRouteID": "26",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "26",
                    "En": "26"
                },
                "Headsign": "新民高中(三民路) - 嶺東科技大學(永春南路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG26",
                "SubRouteID": "26",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "26",
                    "En": "26"
                },
                "Headsign": "新民高中(三民路) - 嶺東科技大學(永春南路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "26",
            "En": "26"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG260",
                "SubRouteID": "260",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "260",
                    "En": "260"
                },
                "Headsign": "東勢 - 水尾",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG260",
                "SubRouteID": "260",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "260",
                    "En": "260"
                },
                "Headsign": "東勢 - 水尾",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "260",
            "En": "260"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG261",
                "SubRouteID": "261",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "261",
                    "En": "261"
                },
                "Headsign": "東勢 - 明正里",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG261",
                "SubRouteID": "261",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "261",
                    "En": "261"
                },
                "Headsign": "東勢 - 明正里",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "261",
            "En": "261"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG263",
                "SubRouteID": "263",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "263",
                    "En": "263"
                },
                "Headsign": "東勢 - 崑山",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG263",
                "SubRouteID": "263",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "263",
                    "En": "263"
                },
                "Headsign": "東勢 - 崑山",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "263",
            "En": "263"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG264",
                "SubRouteID": "264",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "264",
                    "En": "264"
                },
                "Headsign": "東勢 - 東興 - 新五村",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG264",
                "SubRouteID": "264",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "264",
                    "En": "264"
                },
                "Headsign": "東勢 - 東興 - 新五村",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "264",
            "En": "264"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG265",
                "SubRouteID": "265",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "265",
                    "En": "265"
                },
                "Headsign": "東勢 - 新五村",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG265",
                "SubRouteID": "265",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "265",
                    "En": "265"
                },
                "Headsign": "東勢 - 新五村",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "265",
            "En": "265"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG266",
                "SubRouteID": "266",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "266",
                    "En": "266"
                },
                "Headsign": "東勢 - 谷關",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG266",
                "SubRouteID": "266",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "266",
                    "En": "266"
                },
                "Headsign": "東勢 - 谷關",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "266",
            "En": "266"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2661",
                "SubRouteID": "2661",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "266繞1",
                    "En": "266A1"
                },
                "Headsign": "東勢 - 裡冷部落 - 谷關",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2661",
                "SubRouteID": "2661",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "266繞1",
                    "En": "266A1"
                },
                "Headsign": "東勢 - 裡冷部落 - 谷關",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "266繞1",
            "En": "266A1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2662",
                "SubRouteID": "2662",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "266繞2",
                    "En": "266A2"
                },
                "Headsign": "東勢 - 白冷國小 - 谷關",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2662",
                "SubRouteID": "2662",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "266繞2",
                    "En": "266A2"
                },
                "Headsign": "東勢 - 白冷國小 - 谷關",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "266繞2",
            "En": "266A2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG267",
                "SubRouteID": "267",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "267",
                    "En": "267"
                },
                "Headsign": "東勢 - 上台電",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG267",
                "SubRouteID": "267",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "267",
                    "En": "267"
                },
                "Headsign": "東勢 - 上台電",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "267",
            "En": "267"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG269",
                "SubRouteID": "269",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "269",
                    "En": "269"
                },
                "Headsign": "谷關 - 八仙山森林遊樂區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG269",
                "SubRouteID": "269",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "269",
                    "En": "269"
                },
                "Headsign": "谷關 - 八仙山森林遊樂區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "269",
            "En": "269"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG27",
                "SubRouteID": "27",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "27",
                    "En": "27"
                },
                "Headsign": "臺中車站(民族路口) - 嶺東三站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG27",
                "SubRouteID": "27",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "27",
                    "En": "27"
                },
                "Headsign": "臺中車站(民族路口) - 嶺東三站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "27",
            "En": "27"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG270",
                "SubRouteID": "270",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "270",
                    "En": "270"
                },
                "Headsign": "豐富公園 - 大南 - 東勢",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG270",
                "SubRouteID": "270",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "270",
                    "En": "270"
                },
                "Headsign": "豐富公園 - 大南 - 東勢",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "270",
            "En": "270"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG271",
                "SubRouteID": "271",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "271",
                    "En": "271"
                },
                "Headsign": "豐富公園 - 東興 - 東勢",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG271",
                "SubRouteID": "271",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "271",
                    "En": "271"
                },
                "Headsign": "豐富公園 - 東興 - 東勢",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "271",
            "En": "271"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG272",
                "SubRouteID": "272",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "272",
                    "En": "272"
                },
                "Headsign": "東勢 - 茄苳寮",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG272",
                "SubRouteID": "272",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "272",
                    "En": "272"
                },
                "Headsign": "東勢 - 茄苳寮",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "272",
            "En": "272"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG273",
                "SubRouteID": "273",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "273",
                    "En": "273"
                },
                "Headsign": "新五村 - 茄苳寮",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG273",
                "SubRouteID": "273",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "273",
                    "En": "273"
                },
                "Headsign": "新五村 - 茄苳寮",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "273",
            "En": "273"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG275",
                "SubRouteID": "275",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "275",
                    "En": "275"
                },
                "Headsign": "東勢 - 中和",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG275",
                "SubRouteID": "275",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "275",
                    "En": "275"
                },
                "Headsign": "東勢 - 中和",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "275",
            "En": "275"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG276",
                "SubRouteID": "276",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "276",
                    "En": "276"
                },
                "Headsign": "豐富公園 - 興中山莊 - 東勢",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG276",
                "SubRouteID": "276",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "276",
                    "En": "276"
                },
                "Headsign": "豐富公園 - 興中山莊 - 東勢",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "276",
            "En": "276"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG277",
                "SubRouteID": "277",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "277",
                    "En": "277"
                },
                "Headsign": "豐富公園 - 復盛里 - 東勢",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG277",
                "SubRouteID": "277",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "277",
                    "En": "277"
                },
                "Headsign": "豐富公園 - 復盛里 - 東勢",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "277",
            "En": "277"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG278",
                "SubRouteID": "278",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "278",
                    "En": "278"
                },
                "Headsign": "東勢 - 水井",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG278",
                "SubRouteID": "278",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "278",
                    "En": "278"
                },
                "Headsign": "東勢 - 水井",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "278",
            "En": "278"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG279",
                "SubRouteID": "279",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "279",
                    "En": "279"
                },
                "Headsign": "新社 - 水井",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG279",
                "SubRouteID": "279",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "279",
                    "En": "279"
                },
                "Headsign": "新社 - 水井",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "279",
            "En": "279"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG28",
                "SubRouteID": "28",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "28",
                    "En": "28"
                },
                "Headsign": "四張犁圖書館 - 坪頂",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG28",
                "SubRouteID": "28",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "28",
                    "En": "28"
                },
                "Headsign": "四張犁圖書館 - 坪頂",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "28",
            "En": "28"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG280",
                "SubRouteID": "280",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "280",
                    "En": "280"
                },
                "Headsign": "臺中二中 - 修平科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG280",
                "SubRouteID": "280",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "280",
                    "En": "280"
                },
                "Headsign": "臺中二中 - 修平科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "280",
            "En": "280"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG281",
                "SubRouteID": "281",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "281",
                    "En": "281"
                },
                "Headsign": "新建國市場 - 霧峰農工",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG281",
                "SubRouteID": "281",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "281",
                    "En": "281"
                },
                "Headsign": "新建國市場 - 霧峰農工",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "281",
            "En": "281"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2811",
                "SubRouteID": "2811",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "281延",
                    "En": "281E"
                },
                "Headsign": "新光里(新福路) - 朝陽科技大學第二宿舍",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2811",
                "SubRouteID": "2811",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "281延",
                    "En": "281E"
                },
                "Headsign": "新光里(新福路) - 朝陽科技大學第二宿舍",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "281延",
            "En": "281E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG282",
                "SubRouteID": "282",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "282",
                    "En": "282"
                },
                "Headsign": "亞洲大學安藤館 - 桐林",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG282",
                "SubRouteID": "282",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "282",
                    "En": "282"
                },
                "Headsign": "亞洲大學安藤館 - 桐林",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "282",
            "En": "282"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2821",
                "SubRouteID": "2821",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "282副",
                    "En": "282V"
                },
                "Headsign": "亞洲大學安藤館 - 桐林",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2821",
                "SubRouteID": "2821",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "282副",
                    "En": "282V"
                },
                "Headsign": "亞洲大學安藤館 - 桐林",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "282副",
            "En": "282V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG283",
                "SubRouteID": "283",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "283",
                    "En": "283"
                },
                "Headsign": "霧峰 - 大里仁愛醫院",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG283",
                "SubRouteID": "283",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "283",
                    "En": "283"
                },
                "Headsign": "霧峰 - 大里仁愛醫院",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "283",
            "En": "283"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG284",
                "SubRouteID": "284",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "284",
                    "En": "284"
                },
                "Headsign": "臺中車站 - 修平科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG284",
                "SubRouteID": "284",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "284",
                    "En": "284"
                },
                "Headsign": "臺中車站 - 修平科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "284",
            "En": "284"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG285",
                "SubRouteID": "285",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "285",
                    "En": "285"
                },
                "Headsign": "帝國製糖廠 - 銀聯一村",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG285",
                "SubRouteID": "285",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "285",
                    "En": "285"
                },
                "Headsign": "帝國製糖廠 - 銀聯一村",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "285",
            "En": "285"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2851",
                "SubRouteID": "2851",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "285副",
                    "En": "285V"
                },
                "Headsign": "帝國製糖廠 - 竹仔坑",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2851",
                "SubRouteID": "2851",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "285副",
                    "En": "285V"
                },
                "Headsign": "帝國製糖廠 - 竹仔坑",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "285副",
            "En": "285V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG286",
                "SubRouteID": "286",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "286",
                    "En": "286"
                },
                "Headsign": "臺中二中 - 車籠埔 - 崁頂",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG286",
                "SubRouteID": "286",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "286",
                    "En": "286"
                },
                "Headsign": "臺中二中 - 車籠埔 - 崁頂",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "286",
            "En": "286"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG287",
                "SubRouteID": "287",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "287",
                    "En": "287"
                },
                "Headsign": "國軍臺中總醫院 - 茅埔",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG287",
                "SubRouteID": "287",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "287",
                    "En": "287"
                },
                "Headsign": "國軍臺中總醫院 - 茅埔",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "287",
            "En": "287"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG288",
                "SubRouteID": "288",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "288",
                    "En": "288"
                },
                "Headsign": "臺中二中 - 茅埔",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG288",
                "SubRouteID": "288",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "288",
                    "En": "288"
                },
                "Headsign": "臺中二中 - 茅埔",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "288",
            "En": "288"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG289",
                "SubRouteID": "289",
                "OperatorIDs": [
                    "23"
                ],
                "SubRouteName": {
                    "Zh_tw": "289",
                    "En": "289"
                },
                "Headsign": "臺中二中 - 中興東成功路口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG289",
                "SubRouteID": "289",
                "OperatorIDs": [
                    "23"
                ],
                "SubRouteName": {
                    "Zh_tw": "289",
                    "En": "289"
                },
                "Headsign": "臺中二中 - 中興東成功路口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "289",
            "En": "289"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG29",
                "SubRouteID": "29",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "29",
                    "En": "29"
                },
                "Headsign": "臺中監獄 - 第一廣場 - 臺中監獄",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG29",
                "SubRouteID": "29",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "29",
                    "En": "29"
                },
                "Headsign": "臺中監獄 - 第一廣場 - 臺中監獄",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "29",
            "En": "29"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG290",
                "SubRouteID": "290",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "290",
                    "En": "290"
                },
                "Headsign": "干城站 - 童綜合醫院",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG290",
                "SubRouteID": "290",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "290",
                    "En": "290"
                },
                "Headsign": "干城站 - 童綜合醫院",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "290",
            "En": "290"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG2901",
                "SubRouteID": "2901",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "290繞",
                    "En": "290A"
                },
                "Headsign": "干城站 - 童綜合醫院",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG2901",
                "SubRouteID": "2901",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "290繞",
                    "En": "290A"
                },
                "Headsign": "干城站 - 童綜合醫院",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "290繞",
            "En": "290A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG291",
                "SubRouteID": "291",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "291",
                    "En": "291"
                },
                "Headsign": "霧峰區山多綠社區 - 大里區環保公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG291",
                "SubRouteID": "291",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "291",
                    "En": "291"
                },
                "Headsign": "霧峰區山多綠社區 - 大里區環保公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "291",
            "En": "291"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3",
                "SubRouteID": "3",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "3",
                    "En": "3"
                },
                "Headsign": "東山高中 - 新烏日車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3",
                "SubRouteID": "3",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "3",
                    "En": "3"
                },
                "Headsign": "東山高中 - 新烏日車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "3",
            "En": "3"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG30",
                "SubRouteID": "30",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "30",
                    "En": "30"
                },
                "Headsign": "中台新村 - 第一廣場 - 中台新村",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG30",
                "SubRouteID": "30",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "30",
                    "En": "30"
                },
                "Headsign": "中台新村 - 第一廣場 - 中台新村",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "30",
            "En": "30"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG300",
                "SubRouteID": "300",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "300",
                    "En": "300"
                },
                "Headsign": "靜宜大學 - 臺中車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG300",
                "SubRouteID": "300",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "300",
                    "En": "300"
                },
                "Headsign": "靜宜大學 - 臺中車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "300",
            "En": "300"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3001",
                "SubRouteID": "3001",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "市民小巴1",
                    "En": "M1"
                },
                "Headsign": "大安國中-海墘-福住里",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3001",
                "SubRouteID": "3001",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "市民小巴1",
                    "En": "M1"
                },
                "Headsign": "大安國中-海墘-福住里",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "市民小巴1",
            "En": "M1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3002",
                "SubRouteID": "3002",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "市民小巴2",
                    "En": "M2"
                },
                "Headsign": "大甲車站-土城-泰安車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3002",
                "SubRouteID": "3002",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "市民小巴2",
                    "En": "M2"
                },
                "Headsign": "大甲車站-土城-泰安車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "市民小巴2",
            "En": "M2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3003",
                "SubRouteID": "3003",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "市民小巴3",
                    "En": "M3"
                },
                "Headsign": "大甲車站 - 麗寶樂園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3003",
                "SubRouteID": "3003",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "市民小巴3",
                    "En": "M3"
                },
                "Headsign": "大甲車站 - 麗寶樂園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "市民小巴3",
            "En": "M3"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3004",
                "SubRouteID": "3004",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "市民小巴4",
                    "En": "M4"
                },
                "Headsign": "中科后里辦公室 - 太平里",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3004",
                "SubRouteID": "3004",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "市民小巴4",
                    "En": "M4"
                },
                "Headsign": "中科后里辦公室 - 太平里",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "市民小巴4",
            "En": "M4"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG30041",
                "SubRouteID": "30041",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "市民小巴4延",
                    "En": "M4E"
                },
                "Headsign": "中社 - 南村路 - 太平里",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG30041",
                "SubRouteID": "30041",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "市民小巴4延",
                    "En": "M4E"
                },
                "Headsign": "中社 - 南村路 - 太平里",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "市民小巴4延",
            "En": "M4E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG301",
                "SubRouteID": "301",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "301",
                    "En": "301"
                },
                "Headsign": "靜宜大學 - 新光里(新福路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG301",
                "SubRouteID": "301",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "301",
                    "En": "301"
                },
                "Headsign": "靜宜大學 - 新光里(新福路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "301",
            "En": "301"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3010",
                "SubRouteID": "3010",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "30延",
                    "En": "30E"
                },
                "Headsign": "臺中區監理所 - 第一廣場 - 臺中區監理所",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3010",
                "SubRouteID": "3010",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "30延",
                    "En": "30E"
                },
                "Headsign": "臺中區監理所 - 第一廣場 - 臺中區監理所",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "30延",
            "En": "30E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG302",
                "SubRouteID": "302",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "302",
                    "En": "302"
                },
                "Headsign": "臺中國際機場 - 新光里(新福路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG302",
                "SubRouteID": "302",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "302",
                    "En": "302"
                },
                "Headsign": "臺中國際機場 - 新光里(新福路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "302",
            "En": "302"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3021",
                "SubRouteID": "3021",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "302延",
                    "En": "302E"
                },
                "Headsign": "嘉陽高中 - 新光里(新福路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3021",
                "SubRouteID": "3021",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "302延",
                    "En": "302E"
                },
                "Headsign": "嘉陽高中 - 新光里(新福路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "302延",
            "En": "302E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG303",
                "SubRouteID": "303",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "303",
                    "En": "303"
                },
                "Headsign": "大勇東四維東路-新民高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG303",
                "SubRouteID": "303",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "303",
                    "En": "303"
                },
                "Headsign": "大勇東四維東路-新民高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "303",
            "En": "303"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG304",
                "SubRouteID": "304",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "304",
                    "En": "304"
                },
                "Headsign": "港區藝術中心 - 新民高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG304",
                "SubRouteID": "304",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "304",
                    "En": "304"
                },
                "Headsign": "港區藝術中心 - 新民高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "304",
            "En": "304"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG305",
                "SubRouteID": "305",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "305",
                    "En": "305"
                },
                "Headsign": "大甲 - 鹿寮 - 臺中車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG305",
                "SubRouteID": "305",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "305",
                    "En": "305"
                },
                "Headsign": "大甲 - 鹿寮 - 臺中車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "305",
            "En": "305"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG306",
                "SubRouteID": "306",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "306",
                    "En": "306"
                },
                "Headsign": "清水 - 梧棲 - 臺中車站(臺灣大道)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG306",
                "SubRouteID": "306",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "306",
                    "En": "306"
                },
                "Headsign": "清水 - 梧棲 - 臺中車站(臺灣大道)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "306",
            "En": "306"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG307",
                "SubRouteID": "307",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "307",
                    "En": "307"
                },
                "Headsign": "梧棲觀光漁港 - 新民高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG307",
                "SubRouteID": "307",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "307",
                    "En": "307"
                },
                "Headsign": "梧棲觀光漁港 - 新民高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "307",
            "En": "307"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG308",
                "SubRouteID": "308",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "308",
                    "En": "308"
                },
                "Headsign": "關連工業區-臺中港-新民高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG308",
                "SubRouteID": "308",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "308",
                    "En": "308"
                },
                "Headsign": "關連工業區-臺中港-新民高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "308",
            "En": "308"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3081",
                "SubRouteID": "3081",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "308副",
                    "En": "308"
                },
                "Headsign": "大勇四維東路口 - 新民高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3081",
                "SubRouteID": "3081",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "308副",
                    "En": "308"
                },
                "Headsign": "大勇四維東路口 - 新民高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "308副",
            "En": "308"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3082",
                "SubRouteID": "3082",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "308副繞",
                    "En": "308A"
                },
                "Headsign": "新民高中 - 大勇四維東路口",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "308副繞",
            "En": "308A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG309",
                "SubRouteID": "309",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "309",
                    "En": "309"
                },
                "Headsign": "高美濕地 - 臺中車站 - 高美濕地",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG309",
                "SubRouteID": "309",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "309",
                    "En": "309"
                },
                "Headsign": "高美濕地 - 臺中車站 - 高美濕地",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "309",
            "En": "309"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG310",
                "SubRouteID": "310",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "310",
                    "En": "310"
                },
                "Headsign": "臺中港旅客服務中心 - 臺中車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG310",
                "SubRouteID": "310",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "310",
                    "En": "310"
                },
                "Headsign": "臺中港旅客服務中心 - 臺中車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "310",
            "En": "310"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG32",
                "SubRouteID": "32",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "32",
                    "En": "32"
                },
                "Headsign": "大鵬新城 - 東英二街長福路口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG32",
                "SubRouteID": "32",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "32",
                    "En": "32"
                },
                "Headsign": "大鵬新城 - 東英二街長福路口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "32",
            "En": "32"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG323",
                "SubRouteID": "323",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "323",
                    "En": "323"
                },
                "Headsign": "彩虹眷村(嶺東南路) - 新建國市場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG323",
                "SubRouteID": "323",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "323",
                    "En": "323"
                },
                "Headsign": "彩虹眷村(嶺東南路) - 新建國市場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "323",
            "En": "323"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG324",
                "SubRouteID": "324",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "324",
                    "En": "324"
                },
                "Headsign": "臺中都會公園-臺中車站-臺中都會公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG324",
                "SubRouteID": "324",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "324",
                    "En": "324"
                },
                "Headsign": "臺中都會公園-臺中車站-臺中都會公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "324",
            "En": "324"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG325",
                "SubRouteID": "325",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "325",
                    "En": "325"
                },
                "Headsign": "大肚車站 - 臺中車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG325",
                "SubRouteID": "325",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "325",
                    "En": "325"
                },
                "Headsign": "大肚車站 - 臺中車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "325",
            "En": "325"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG326",
                "SubRouteID": "326",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "326",
                    "En": "326"
                },
                "Headsign": "靜宜大學 - 新民高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG326",
                "SubRouteID": "326",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "326",
                    "En": "326"
                },
                "Headsign": "靜宜大學 - 新民高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "326",
            "En": "326"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG328",
                "SubRouteID": "328",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "328",
                    "En": "328"
                },
                "Headsign": "興大附農(臺中路) - 仁友停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG328",
                "SubRouteID": "328",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "328",
                    "En": "328"
                },
                "Headsign": "興大附農(臺中路) - 仁友停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "328",
            "En": "328"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3281",
                "SubRouteID": "3281",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "328繞",
                    "En": "328A"
                },
                "Headsign": "興大附農 - 仁友停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3281",
                "SubRouteID": "3281",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "328繞",
                    "En": "328A"
                },
                "Headsign": "興大附農 - 仁友停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "328繞",
            "En": "328A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG33",
                "SubRouteID": "33",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "33",
                    "En": "33"
                },
                "Headsign": "文修停車場 - 高鐵臺中站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG33",
                "SubRouteID": "33",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "33",
                    "En": "33"
                },
                "Headsign": "文修停車場 - 高鐵臺中站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "33",
            "En": "33"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG35",
                "SubRouteID": "35",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "35",
                    "En": "35"
                },
                "Headsign": "南區公所 - 文修停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG35",
                "SubRouteID": "35",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "35",
                    "En": "35"
                },
                "Headsign": "南區公所 - 文修停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "35",
            "En": "35"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3510",
                "SubRouteID": "3510",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "351",
                    "En": "351"
                },
                "Headsign": "統聯轉運站 - 臺中工業區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3510",
                "SubRouteID": "3510",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "351",
                    "En": "351"
                },
                "Headsign": "統聯轉運站 - 臺中工業區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "351",
            "En": "351"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG352",
                "SubRouteID": "352",
                "OperatorIDs": [
                    "17",
                    "19",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "352",
                    "En": "352"
                },
                "Headsign": "大肚 - 中科管理局",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG352",
                "SubRouteID": "352",
                "OperatorIDs": [
                    "17",
                    "19",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "352",
                    "En": "352"
                },
                "Headsign": "大肚 - 中科管理局",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "352",
            "En": "352"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3521",
                "SubRouteID": "3521",
                "OperatorIDs": [
                    "17",
                    "19",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "352延",
                    "En": "352E"
                },
                "Headsign": "大肚 - 中科實驗高中(平和路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3521",
                "SubRouteID": "3521",
                "OperatorIDs": [
                    "17",
                    "19",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "352延",
                    "En": "352E"
                },
                "Headsign": "大肚 - 中科實驗高中(平和路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "352延",
            "En": "352E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG353",
                "SubRouteID": "353",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "353",
                    "En": "353"
                },
                "Headsign": "天母櫻城 - 巨業沙鹿站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG353",
                "SubRouteID": "353",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "353",
                    "En": "353"
                },
                "Headsign": "天母櫻城 - 巨業沙鹿站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "353",
            "En": "353"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3541",
                "SubRouteID": "3541",
                "OperatorIDs": [
                    "15",
                    "17",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "354",
                    "En": "354"
                },
                "Headsign": "東海路思義教堂 - 文修停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3541",
                "SubRouteID": "3541",
                "OperatorIDs": [
                    "15",
                    "17",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "354",
                    "En": "354"
                },
                "Headsign": "東海路思義教堂 - 文修停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "354",
            "En": "354"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG355",
                "SubRouteID": "355",
                "OperatorIDs": [
                    "17",
                    "19",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "355",
                    "En": "355"
                },
                "Headsign": "臺中區監理所(遊園路) - 西苑高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG355",
                "SubRouteID": "355",
                "OperatorIDs": [
                    "17",
                    "19",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "355",
                    "En": "355"
                },
                "Headsign": "臺中區監理所(遊園路) - 西苑高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "355",
            "En": "355"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3551",
                "SubRouteID": "3551",
                "OperatorIDs": [
                    "17",
                    "19",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "355延",
                    "En": "355E"
                },
                "Headsign": "臺中區監理所(遊園路) - 黎明中科路口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3551",
                "SubRouteID": "3551",
                "OperatorIDs": [
                    "17",
                    "19",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "355延",
                    "En": "355E"
                },
                "Headsign": "臺中區監理所(遊園路) - 黎明中科路口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "355延",
            "En": "355E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG357",
                "SubRouteID": "357",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "357",
                    "En": "357"
                },
                "Headsign": "臺中國際機場 - 中台新村",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG357",
                "SubRouteID": "357",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "357",
                    "En": "357"
                },
                "Headsign": "臺中國際機場 - 中台新村",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "357",
            "En": "357"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG358",
                "SubRouteID": "358",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "358",
                    "En": "358"
                },
                "Headsign": "仁友停車場 - 文修停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG358",
                "SubRouteID": "358",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "358",
                    "En": "358"
                },
                "Headsign": "仁友停車場 - 文修停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "358",
            "En": "358"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG3581",
                "SubRouteID": "3581",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "358延",
                    "En": "358E"
                },
                "Headsign": "臺中區監理所(遊園路) - 文修停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG3581",
                "SubRouteID": "3581",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "358延",
                    "En": "358E"
                },
                "Headsign": "臺中區監理所(遊園路) - 文修停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "358延",
            "En": "358E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG361",
                "SubRouteID": "361",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "361",
                    "En": "361"
                },
                "Headsign": "龍津高中 - 圖書館溪西分館",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG361",
                "SubRouteID": "361",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "361",
                    "En": "361"
                },
                "Headsign": "龍津高中 - 圖書館溪西分館",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "361",
            "En": "361"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG365",
                "SubRouteID": "365",
                "OperatorIDs": [
                    "1",
                    "15",
                    "17",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "365",
                    "En": "365"
                },
                "Headsign": "高鐵臺中站 - 國安社區(宜寧中學)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG365",
                "SubRouteID": "365",
                "OperatorIDs": [
                    "1",
                    "15",
                    "17",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "365",
                    "En": "365"
                },
                "Headsign": "高鐵臺中站 - 國安社區(宜寧中學)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "365",
            "En": "365"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG368",
                "SubRouteID": "368",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "368",
                    "En": "368"
                },
                "Headsign": "巨業沙鹿站 - 靜宜大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG368",
                "SubRouteID": "368",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "368",
                    "En": "368"
                },
                "Headsign": "巨業沙鹿站 - 靜宜大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "368",
            "En": "368"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG37",
                "SubRouteID": "37",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "37",
                    "En": "37"
                },
                "Headsign": "橫山 - 高鐵臺中站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG37",
                "SubRouteID": "37",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "37",
                    "En": "37"
                },
                "Headsign": "橫山 - 高鐵臺中站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "37",
            "En": "37"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG39",
                "SubRouteID": "39",
                "OperatorIDs": [
                    "24"
                ],
                "SubRouteName": {
                    "Zh_tw": "39",
                    "En": "39"
                },
                "Headsign": "新烏日車站 - 立新國小",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG39",
                "SubRouteID": "39",
                "OperatorIDs": [
                    "24"
                ],
                "SubRouteName": {
                    "Zh_tw": "39",
                    "En": "39"
                },
                "Headsign": "新烏日車站 - 立新國小",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "39",
            "En": "39"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG40",
                "SubRouteID": "40",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "40",
                    "En": "40"
                },
                "Headsign": "臺中車站 - 中台新村",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG40",
                "SubRouteID": "40",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "40",
                    "En": "40"
                },
                "Headsign": "臺中車站 - 中台新村",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "40",
            "En": "40"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG4010",
                "SubRouteID": "4010",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "綠1",
                    "En": "G1"
                },
                "Headsign": "松竹旱溪西路口 - 仁友停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG4010",
                "SubRouteID": "4010",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "綠1",
                    "En": "G1"
                },
                "Headsign": "松竹旱溪西路口 - 仁友停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "綠1",
            "En": "G1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG4020",
                "SubRouteID": "4020",
                "OperatorIDs": [
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "綠2",
                    "En": "G2"
                },
                "Headsign": "太原車站 - 捷運文心森林公園站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG4020",
                "SubRouteID": "4020",
                "OperatorIDs": [
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "綠2",
                    "En": "G2"
                },
                "Headsign": "太原車站 - 捷運文心森林公園站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "綠2",
            "En": "G2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG4030",
                "SubRouteID": "4030",
                "OperatorIDs": [
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "綠3",
                    "En": "G3"
                },
                "Headsign": "省議會 - 臺中市議會 - 省議會",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG4030",
                "SubRouteID": "4030",
                "OperatorIDs": [
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "綠3",
                    "En": "G3"
                },
                "Headsign": "省議會 - 臺中市議會 - 省議會",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "綠3",
            "En": "G3"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG4040",
                "SubRouteID": "4040",
                "OperatorIDs": [
                    "15",
                    "17",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "綠4",
                    "En": "G4"
                },
                "Headsign": "宜寧中學 - 捷運文心中清站 - 宜寧中學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG4040",
                "SubRouteID": "4040",
                "OperatorIDs": [
                    "15",
                    "17",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "綠4",
                    "En": "G4"
                },
                "Headsign": "宜寧中學 - 捷運文心中清站 - 宜寧中學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "綠4",
            "En": "G4"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG41",
                "SubRouteID": "41",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "41",
                    "En": "41"
                },
                "Headsign": "公共資訊圖書館(建成路) - 修平科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG41",
                "SubRouteID": "41",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "41",
                    "En": "41"
                },
                "Headsign": "公共資訊圖書館(建成路) - 修平科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "41",
            "En": "41"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG410",
                "SubRouteID": "410",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "310區1",
                    "En": "310S1"
                },
                "Headsign": "靜宜大學 - 臺中車站 - 臺中港旅客服務中心",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG410",
                "SubRouteID": "410",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "310區1",
                    "En": "310S1"
                },
                "Headsign": "靜宜大學 - 臺中車站 - 臺中港旅客服務中心",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "310區1",
            "En": "310S1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG411",
                "SubRouteID": "411",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "310區2",
                    "En": "310S2"
                },
                "Headsign": "臺中港旅客服務中心 - 臺中車站 - 靜宜大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG411",
                "SubRouteID": "411",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "310區2",
                    "En": "310S2"
                },
                "Headsign": "臺中港旅客服務中心 - 臺中車站 - 靜宜大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "310區2",
            "En": "310S2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG45",
                "SubRouteID": "45",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "45",
                    "En": "45"
                },
                "Headsign": "中科管理局(中科路) - 第一廣場 - 中科管理局(中科路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG45",
                "SubRouteID": "45",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "45",
                    "En": "45"
                },
                "Headsign": "中科管理局(中科路) - 第一廣場 - 中科管理局(中科路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "45",
            "En": "45"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG450",
                "SubRouteID": "450",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "866區2",
                    "En": "866S2"
                },
                "Headsign": "梨山 - 武陵農場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG450",
                "SubRouteID": "450",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "866區2",
                    "En": "866S2"
                },
                "Headsign": "梨山 - 武陵農場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "866區2",
            "En": "866S2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG451",
                "SubRouteID": "451",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "45延",
                    "En": "45E"
                },
                "Headsign": "中科實驗高中(平和路)-第一廣場-中科實驗高中(平和路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG451",
                "SubRouteID": "451",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "45延",
                    "En": "45E"
                },
                "Headsign": "中科實驗高中(平和路)-第一廣場-中科實驗高中(平和路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "45延",
            "En": "45E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG453",
                "SubRouteID": "453",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "866區1",
                    "En": "866S1"
                },
                "Headsign": "福壽山農場 - 梨山",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG453",
                "SubRouteID": "453",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "866區1",
                    "En": "866S1"
                },
                "Headsign": "福壽山農場 - 梨山",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "866區1",
            "En": "866S1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG459",
                "SubRouteID": "459",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "45區",
                    "En": "45S"
                },
                "Headsign": "中科管理局(中科路) - 干城站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG459",
                "SubRouteID": "459",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "45區",
                    "En": "45S"
                },
                "Headsign": "中科管理局(中科路) - 干城站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "45區",
            "En": "45S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG460",
                "SubRouteID": "460",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "45延1",
                    "En": "45E1"
                },
                "Headsign": "中科實驗高中(平和路) - 干城站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG460",
                "SubRouteID": "460",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "45延1",
                    "En": "45E1"
                },
                "Headsign": "中科實驗高中(平和路) - 干城站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "45延1",
            "En": "45E1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG465",
                "SubRouteID": "465",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "65延",
                    "En": "65E"
                },
                "Headsign": "南區公所 - 大富路98巷口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG465",
                "SubRouteID": "465",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "65延",
                    "En": "65E"
                },
                "Headsign": "南區公所 - 大富路98巷口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "65延",
            "En": "65E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG467",
                "SubRouteID": "467",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "65繞",
                    "En": "65A"
                },
                "Headsign": "南區公所 - 潭雅神綠園道",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG467",
                "SubRouteID": "467",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "65繞",
                    "En": "65A"
                },
                "Headsign": "南區公所 - 潭雅神綠園道",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "65繞",
            "En": "65A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG468",
                "SubRouteID": "468",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "65副",
                    "En": "65V"
                },
                "Headsign": "南區公所 - 潭雅神綠園道",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG468",
                "SubRouteID": "468",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "65副",
                    "En": "65V"
                },
                "Headsign": "南區公所 - 潭雅神綠園道",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "65副",
            "En": "65V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG5",
                "SubRouteID": "5",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "5",
                    "En": "5"
                },
                "Headsign": "臺中車站 - 僑光科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG5",
                "SubRouteID": "5",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "5",
                    "En": "5"
                },
                "Headsign": "臺中車站 - 僑光科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "5",
            "En": "5"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG50",
                "SubRouteID": "50",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "50",
                    "En": "50"
                },
                "Headsign": "文英兒童公園 - 921地震教育園區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG50",
                "SubRouteID": "50",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "50",
                    "En": "50"
                },
                "Headsign": "文英兒童公園 - 921地震教育園區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "50",
            "En": "50"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG5000",
                "SubRouteID": "5000",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "500",
                    "En": "500"
                },
                "Headsign": "臺中國際機場 - 臺中車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG5000",
                "SubRouteID": "5000",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "500",
                    "En": "500"
                },
                "Headsign": "臺中國際機場 - 臺中車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "500",
            "En": "500"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG5001",
                "SubRouteID": "5001",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "500跳蛙公車",
                    "En": "500J"
                },
                "Headsign": "忠義里(中科實驗高中) - 臺中車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG5001",
                "SubRouteID": "5001",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "500跳蛙公車",
                    "En": "500J"
                },
                "Headsign": "忠義里(中科實驗高中) - 臺中車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "500跳蛙公車",
            "En": "500J"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG5002",
                "SubRouteID": "5002",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "500延",
                    "En": "500E"
                },
                "Headsign": "三田國小 - 臺中車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG5002",
                "SubRouteID": "5002",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "500延",
                    "En": "500E"
                },
                "Headsign": "三田國小 - 臺中車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "500延",
            "En": "500E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG5003",
                "SubRouteID": "5003",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "500延區1",
                    "En": "500ES1"
                },
                "Headsign": "大雅 - 三田國小",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "500延區1",
            "En": "500ES1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG5004",
                "SubRouteID": "5004",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "500延區2",
                    "En": "500ES2"
                },
                "Headsign": "臺中車站 - 三田國小",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "500延區2",
            "En": "500ES2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG5005",
                "SubRouteID": "5005",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "500延區3",
                    "En": "500ES3"
                },
                "Headsign": "三田國小 -臺中車站",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "500延區3",
            "En": "500ES3"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG5010",
                "SubRouteID": "5010",
                "OperatorIDs": [
                    "201"
                ],
                "SubRouteName": {
                    "Zh_tw": "梨山1路",
                    "En": "Lishan 1"
                },
                "Headsign": "梨山 - 環山 - 新佳陽 - 梨山",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG5010",
                "SubRouteID": "5010",
                "OperatorIDs": [
                    "201"
                ],
                "SubRouteName": {
                    "Zh_tw": "梨山1路",
                    "En": "Lishan 1"
                },
                "Headsign": "梨山 - 環山 - 新佳陽 - 梨山",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "梨山1路",
            "En": "Lishan 1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG51",
                "SubRouteID": "51",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "51",
                    "En": "51"
                },
                "Headsign": "莒光新城 - 大坑9號步道",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG51",
                "SubRouteID": "51",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "51",
                    "En": "51"
                },
                "Headsign": "莒光新城 - 大坑9號步道",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "51",
            "En": "51"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG52",
                "SubRouteID": "52",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "52",
                    "En": "52"
                },
                "Headsign": "忠明進化建成線",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG52",
                "SubRouteID": "52",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "52",
                    "En": "52"
                },
                "Headsign": "忠明進化建成線",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "52",
            "En": "52"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG5201",
                "SubRouteID": "5201",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "52副",
                    "En": "52V"
                },
                "Headsign": "忠明進化建成線",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG5201",
                "SubRouteID": "5201",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "52副",
                    "En": "52V"
                },
                "Headsign": "忠明進化建成線",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "52副",
            "En": "52V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG525",
                "SubRouteID": "525",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "525",
                    "En": "525"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 社口活動中心",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG525",
                "SubRouteID": "525",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "525",
                    "En": "525"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 社口活動中心",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "525",
            "En": "525"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG528",
                "SubRouteID": "528",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "528",
                    "En": "528"
                },
                "Headsign": "老樹公園 - 豐原轉運中心",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG528",
                "SubRouteID": "528",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "528",
                    "En": "528"
                },
                "Headsign": "老樹公園 - 豐原轉運中心",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "528",
            "En": "528"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG529",
                "SubRouteID": "529",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "529",
                    "En": "529"
                },
                "Headsign": "豐原轉運中心 - 朝馬",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG529",
                "SubRouteID": "529",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "529",
                    "En": "529"
                },
                "Headsign": "豐原轉運中心 - 朝馬",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "529",
            "En": "529"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG54",
                "SubRouteID": "54",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "54",
                    "En": "54"
                },
                "Headsign": "下港尾 - 樹仔腳",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG54",
                "SubRouteID": "54",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "54",
                    "En": "54"
                },
                "Headsign": "下港尾 - 樹仔腳",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "54",
            "En": "54"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG56",
                "SubRouteID": "56",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "56",
                    "En": "56"
                },
                "Headsign": "新光里(新福路)- 新烏日車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG56",
                "SubRouteID": "56",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "56",
                    "En": "56"
                },
                "Headsign": "新光里(新福路)- 新烏日車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "56",
            "En": "56"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG58",
                "SubRouteID": "58",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "58",
                    "En": "58"
                },
                "Headsign": "中山醫學大學 - 潭子勝利運動公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG58",
                "SubRouteID": "58",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "58",
                    "En": "58"
                },
                "Headsign": "中山醫學大學 - 潭子勝利運動公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "58",
            "En": "58"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG581",
                "SubRouteID": "581",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "58區1",
                    "En": "58S1"
                },
                "Headsign": "中山醫學大學 - 北屯區行政大樓",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG581",
                "SubRouteID": "581",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "58區1",
                    "En": "58S1"
                },
                "Headsign": "中山醫學大學 - 北屯區行政大樓",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "58區1",
            "En": "58S1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG582",
                "SubRouteID": "582",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "58區2",
                    "En": "58S2"
                },
                "Headsign": "明德高中 - 潭子勝利運動公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG582",
                "SubRouteID": "582",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "58區2",
                    "En": "58S2"
                },
                "Headsign": "明德高中 - 潭子勝利運動公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "58區2",
            "En": "58S2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG583",
                "SubRouteID": "583",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "58副",
                    "En": "58V"
                },
                "Headsign": "中山醫學大學 - 潭子勝利運動公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG583",
                "SubRouteID": "583",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "58副",
                    "En": "58V"
                },
                "Headsign": "中山醫學大學 - 潭子勝利運動公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "58副",
            "En": "58V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG59",
                "SubRouteID": "59",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "59",
                    "En": "59"
                },
                "Headsign": "捷運松竹站 - 舊正",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG59",
                "SubRouteID": "59",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "59",
                    "En": "59"
                },
                "Headsign": "捷運松竹站 - 舊正",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "59",
            "En": "59"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG5901",
                "SubRouteID": "5901",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "59延",
                    "En": "59E"
                },
                "Headsign": "捷運松竹站 - 舊正社區停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG5901",
                "SubRouteID": "5901",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "59延",
                    "En": "59E"
                },
                "Headsign": "捷運松竹站 - 舊正社區停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "59延",
            "En": "59E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG592",
                "SubRouteID": "592",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "91繞1",
                    "En": "91A1"
                },
                "Headsign": "舊庄 - 東興 - 中興嶺停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG592",
                "SubRouteID": "592",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "91繞1",
                    "En": "91A1"
                },
                "Headsign": "舊庄 - 東興 - 中興嶺停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "91繞1",
            "En": "91A1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG593",
                "SubRouteID": "593",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "91繞2",
                    "En": "91A2"
                },
                "Headsign": "舊庄 - 中興嶺停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG593",
                "SubRouteID": "593",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "91繞2",
                    "En": "91A2"
                },
                "Headsign": "舊庄 - 中興嶺停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "91繞2",
            "En": "91A2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG6",
                "SubRouteID": "6",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "6",
                    "En": "6"
                },
                "Headsign": "干城站 - 忠義里",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG6",
                "SubRouteID": "6",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "6",
                    "En": "6"
                },
                "Headsign": "干城站 - 忠義里",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "6",
            "En": "6"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG60",
                "SubRouteID": "60",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "60",
                    "En": "60"
                },
                "Headsign": "坪頂-大智公園(立德東街)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG60",
                "SubRouteID": "60",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "60",
                    "En": "60"
                },
                "Headsign": "坪頂-大智公園(立德東街)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "60",
            "En": "60"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG601",
                "SubRouteID": "601",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "6副",
                    "En": "6V"
                },
                "Headsign": "干城站 - 原民中心",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG601",
                "SubRouteID": "601",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "6副",
                    "En": "6V"
                },
                "Headsign": "干城站 - 原民中心",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "6副",
            "En": "6V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG61",
                "SubRouteID": "61",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "61",
                    "En": "61"
                },
                "Headsign": "太平 - 臺中車站 - 大雅",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG61",
                "SubRouteID": "61",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "61",
                    "En": "61"
                },
                "Headsign": "太平 - 臺中車站 - 大雅",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "61",
            "En": "61"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG611",
                "SubRouteID": "611",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "211區",
                    "En": "211S"
                },
                "Headsign": "泰安 - 新政大安港路口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG611",
                "SubRouteID": "611",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "211區",
                    "En": "211S"
                },
                "Headsign": "泰安 - 新政大安港路口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "211區",
            "En": "211S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG616",
                "SubRouteID": "616",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "616",
                    "En": "616"
                },
                "Headsign": "臺中港郵局 - 國立苑裡高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG616",
                "SubRouteID": "616",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "616",
                    "En": "616"
                },
                "Headsign": "臺中港郵局 - 國立苑裡高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "616",
            "En": "616"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG63",
                "SubRouteID": "63",
                "OperatorIDs": [
                    "15",
                    "3",
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "63",
                    "En": "63"
                },
                "Headsign": "豐原 - 宜寧中學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG63",
                "SubRouteID": "63",
                "OperatorIDs": [
                    "15",
                    "3",
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "63",
                    "En": "63"
                },
                "Headsign": "豐原 - 宜寧中學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "63",
            "En": "63"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG65",
                "SubRouteID": "65",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "65",
                    "En": "65"
                },
                "Headsign": "南區公所 - 潭雅神綠園道",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG65",
                "SubRouteID": "65",
                "OperatorIDs": [
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "65",
                    "En": "65"
                },
                "Headsign": "南區公所 - 潭雅神綠園道",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "65",
            "En": "65"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG651",
                "SubRouteID": "651",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "651",
                    "En": "651"
                },
                "Headsign": "大甲區公所 - 外埔 - 臺中女中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG651",
                "SubRouteID": "651",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "651",
                    "En": "651"
                },
                "Headsign": "大甲區公所 - 外埔 - 臺中女中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "651",
            "En": "651"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG653",
                "SubRouteID": "653",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "153副",
                    "En": "153V"
                },
                "Headsign": "新市政中心-谷關",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG653",
                "SubRouteID": "653",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "153副",
                    "En": "153V"
                },
                "Headsign": "新市政中心-谷關",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "153副",
            "En": "153V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG657",
                "SubRouteID": "657",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "657",
                    "En": "657"
                },
                "Headsign": "大甲高工 - 建興",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG657",
                "SubRouteID": "657",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "657",
                    "En": "657"
                },
                "Headsign": "大甲高工 - 建興",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "657",
            "En": "657"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG658",
                "SubRouteID": "658",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "658",
                    "En": "658"
                },
                "Headsign": "大安濱海樂園 - 惠文高中(惠中路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG658",
                "SubRouteID": "658",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "658",
                    "En": "658"
                },
                "Headsign": "大安濱海樂園 - 惠文高中(惠中路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "658",
            "En": "658"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG6581",
                "SubRouteID": "6581",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "658副",
                    "En": "658V"
                },
                "Headsign": "大安濱海樂園 - 海墘國小 - 惠文高中(惠中路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG6581",
                "SubRouteID": "6581",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "658副",
                    "En": "658V"
                },
                "Headsign": "大安濱海樂園 - 海墘國小 - 惠文高中(惠中路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "658副",
            "En": "658V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG659",
                "SubRouteID": "659",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "659",
                    "En": "659"
                },
                "Headsign": "幼獅工業區服務中心 - 臺中榮總",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG659",
                "SubRouteID": "659",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "659",
                    "En": "659"
                },
                "Headsign": "幼獅工業區服務中心 - 臺中榮總",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "659",
            "En": "659"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG6601",
                "SubRouteID": "6601",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "66左環",
                    "En": "66L"
                },
                "Headsign": "潭子聯合辦公大樓 - 大坑 - 潭子聯合辦公大樓",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG6601",
                "SubRouteID": "6601",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "66左環",
                    "En": "66L"
                },
                "Headsign": "潭子聯合辦公大樓 - 大坑 - 潭子聯合辦公大樓",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "66左環",
            "En": "66L"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG6602",
                "SubRouteID": "6602",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "66右環",
                    "En": "66R"
                },
                "Headsign": "潭子聯合辦公大樓 - 大坑 - 潭子聯合辦公大樓",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG6602",
                "SubRouteID": "6602",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "66右環",
                    "En": "66R"
                },
                "Headsign": "潭子聯合辦公大樓 - 大坑 - 潭子聯合辦公大樓",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "66右環",
            "En": "66R"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG6603",
                "SubRouteID": "6603",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "66副左環",
                    "En": "66VL"
                },
                "Headsign": "松竹車站 - 大坑 - 松竹車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG6603",
                "SubRouteID": "6603",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "66副左環",
                    "En": "66VL"
                },
                "Headsign": "松竹車站 - 大坑 - 松竹車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "66副左環",
            "En": "66VL"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG6604",
                "SubRouteID": "6604",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "66副右環",
                    "En": "66VR"
                },
                "Headsign": "松竹車站 - 大坑 - 松竹車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG6604",
                "SubRouteID": "6604",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "66副右環",
                    "En": "66VR"
                },
                "Headsign": "松竹車站 - 大坑 - 松竹車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "66副右環",
            "En": "66VR"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG661",
                "SubRouteID": "661",
                "OperatorIDs": [
                    "24"
                ],
                "SubRouteName": {
                    "Zh_tw": "661",
                    "En": "661"
                },
                "Headsign": "致用高中 - 大甲車站(中山路) - 永安國小",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG661",
                "SubRouteID": "661",
                "OperatorIDs": [
                    "24"
                ],
                "SubRouteName": {
                    "Zh_tw": "661",
                    "En": "661"
                },
                "Headsign": "致用高中 - 大甲車站(中山路) - 永安國小",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "661",
            "En": "661"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG662",
                "SubRouteID": "662",
                "OperatorIDs": [
                    "24"
                ],
                "SubRouteName": {
                    "Zh_tw": "662",
                    "En": "662"
                },
                "Headsign": "大甲高中(水源路) - 大甲車站(中山路) - 苑裡站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG662",
                "SubRouteID": "662",
                "OperatorIDs": [
                    "24"
                ],
                "SubRouteName": {
                    "Zh_tw": "662",
                    "En": "662"
                },
                "Headsign": "大甲高中(水源路) - 大甲車站(中山路) - 苑裡站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "662",
            "En": "662"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG668",
                "SubRouteID": "668",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "668",
                    "En": "668"
                },
                "Headsign": "日南車站 - 大甲區公所",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG668",
                "SubRouteID": "668",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "668",
                    "En": "668"
                },
                "Headsign": "日南車站 - 大甲區公所",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "668",
            "En": "668"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG67",
                "SubRouteID": "67",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "67",
                    "En": "67"
                },
                "Headsign": "秀泰影城 - 臺中區監理所(遊園路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG67",
                "SubRouteID": "67",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "67",
                    "En": "67"
                },
                "Headsign": "秀泰影城 - 臺中區監理所(遊園路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "67",
            "En": "67"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG671",
                "SubRouteID": "671",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "67繞",
                    "En": "67A"
                },
                "Headsign": "秀泰影城 - 臺中區監理所(遊園路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG671",
                "SubRouteID": "671",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "67繞",
                    "En": "67A"
                },
                "Headsign": "秀泰影城 - 臺中區監理所(遊園路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "67繞",
            "En": "67A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG672",
                "SubRouteID": "672",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "272繞",
                    "En": "272A"
                },
                "Headsign": "東勢 - 水井 - 茄苳寮",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG672",
                "SubRouteID": "672",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "272繞",
                    "En": "272A"
                },
                "Headsign": "東勢 - 水井 - 茄苳寮",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "272繞",
            "En": "272A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG675",
                "SubRouteID": "675",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "677區",
                    "En": "677S"
                },
                "Headsign": "二號橋 - 沙鹿",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "677區",
            "En": "677S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG677",
                "SubRouteID": "677",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "677",
                    "En": "677"
                },
                "Headsign": "沙鹿龍井環線",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG677",
                "SubRouteID": "677",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "677",
                    "En": "677"
                },
                "Headsign": "沙鹿龍井環線",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "677",
            "En": "677"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG678",
                "SubRouteID": "678",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "678",
                    "En": "678"
                },
                "Headsign": "沙鹿西站->臺中港旅客服務中心",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG678",
                "SubRouteID": "678",
                "OperatorIDs": [
                    "25"
                ],
                "SubRouteName": {
                    "Zh_tw": "678",
                    "En": "678"
                },
                "Headsign": "沙鹿西站->臺中港旅客服務中心",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "678",
            "En": "678"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG681",
                "SubRouteID": "681",
                "OperatorIDs": [
                    "17",
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "68",
                    "En": "68"
                },
                "Headsign": "坪頂 - 中臺科技大學 - 新桃花源橋",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG681",
                "SubRouteID": "681",
                "OperatorIDs": [
                    "17",
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "68",
                    "En": "68"
                },
                "Headsign": "坪頂 - 中臺科技大學 - 新桃花源橋",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "68",
            "En": "68"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG682",
                "SubRouteID": "682",
                "OperatorIDs": [
                    "17"
                ],
                "SubRouteName": {
                    "Zh_tw": "68繞",
                    "En": "68A"
                },
                "Headsign": "坪頂 - 太原車站 - 中臺科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG682",
                "SubRouteID": "682",
                "OperatorIDs": [
                    "17"
                ],
                "SubRouteName": {
                    "Zh_tw": "68繞",
                    "En": "68A"
                },
                "Headsign": "坪頂 - 太原車站 - 中臺科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "68繞",
            "En": "68A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG688",
                "SubRouteID": "688",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "688",
                    "En": "688"
                },
                "Headsign": "清水車站 - 港區藝術中心 - 臺中港旅客服務中心",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG688",
                "SubRouteID": "688",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "688",
                    "En": "688"
                },
                "Headsign": "清水車站 - 港區藝術中心 - 臺中港旅客服務中心",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "688",
            "En": "688"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG69",
                "SubRouteID": "69",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "69",
                    "En": "69"
                },
                "Headsign": "龍潭里 - 臺中國際機場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG69",
                "SubRouteID": "69",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "69",
                    "En": "69"
                },
                "Headsign": "龍潭里 - 臺中國際機場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "69",
            "En": "69"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG699",
                "SubRouteID": "699",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "699",
                    "En": "699"
                },
                "Headsign": "大甲體育場 - 南埔",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG699",
                "SubRouteID": "699",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "699",
                    "En": "699"
                },
                "Headsign": "大甲體育場 - 南埔",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "699",
            "En": "699"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG7",
                "SubRouteID": "7",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "7",
                    "En": "7"
                },
                "Headsign": "臺中一中 - 長億高中 - 永成公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG7",
                "SubRouteID": "7",
                "OperatorIDs": [
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "7",
                    "En": "7"
                },
                "Headsign": "臺中一中 - 長億高中 - 永成公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "7",
            "En": "7"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG70",
                "SubRouteID": "70",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "70",
                    "En": "70"
                },
                "Headsign": "嶺東科技大學 - 第一廣場 - 嶺東科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG70",
                "SubRouteID": "70",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "70",
                    "En": "70"
                },
                "Headsign": "嶺東科技大學 - 第一廣場 - 嶺東科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "70",
            "En": "70"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG7000",
                "SubRouteID": "7000",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "700",
                    "En": "700"
                },
                "Headsign": "翁子國小 - 新建國市場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG7000",
                "SubRouteID": "7000",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "700",
                    "En": "700"
                },
                "Headsign": "翁子國小 - 新建國市場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "700",
            "En": "700"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG7001",
                "SubRouteID": "7001",
                "OperatorIDs": [
                    "1",
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "700跳蛙公車",
                    "En": "700J"
                },
                "Headsign": "明德高中 - 豐原高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG7001",
                "SubRouteID": "7001",
                "OperatorIDs": [
                    "1",
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "700跳蛙公車",
                    "En": "700J"
                },
                "Headsign": "明德高中 - 豐原高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "700跳蛙公車",
            "En": "700J"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG72",
                "SubRouteID": "72",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "72",
                    "En": "72"
                },
                "Headsign": "仁友停車場 - 潭子聯合辦公大樓",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG72",
                "SubRouteID": "72",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "72",
                    "En": "72"
                },
                "Headsign": "仁友停車場 - 潭子聯合辦公大樓",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "72",
            "En": "72"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG73",
                "SubRouteID": "73",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "73",
                    "En": "73"
                },
                "Headsign": "統聯轉運站 - 文英兒童公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG73",
                "SubRouteID": "73",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "73",
                    "En": "73"
                },
                "Headsign": "統聯轉運站 - 文英兒童公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "73",
            "En": "73"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG74",
                "SubRouteID": "74",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "74",
                    "En": "74"
                },
                "Headsign": "太平-新烏日車站-嶺東科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG74",
                "SubRouteID": "74",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "74",
                    "En": "74"
                },
                "Headsign": "太平-新烏日車站-嶺東科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "74",
            "En": "74"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG75",
                "SubRouteID": "75",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "75",
                    "En": "75"
                },
                "Headsign": "臺中榮總 - 吉星社區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG75",
                "SubRouteID": "75",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "75",
                    "En": "75"
                },
                "Headsign": "臺中榮總 - 吉星社區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "75",
            "En": "75"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG751",
                "SubRouteID": "751",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "75區",
                    "En": "75S"
                },
                "Headsign": "臺中女中 - 吉星社區",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "75區",
            "En": "75S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG77",
                "SubRouteID": "77",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "77",
                    "En": "77"
                },
                "Headsign": "中科管理局 - 潭子聯合辦公大樓",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG77",
                "SubRouteID": "77",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "77",
                    "En": "77"
                },
                "Headsign": "中科管理局 - 潭子聯合辦公大樓",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "77",
            "En": "77"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG79",
                "SubRouteID": "79",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "79",
                    "En": "79"
                },
                "Headsign": "中科管理局(中科路) - 建國南文心南路口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG79",
                "SubRouteID": "79",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "79",
                    "En": "79"
                },
                "Headsign": "中科管理局(中科路) - 建國南文心南路口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "79",
            "En": "79"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG8",
                "SubRouteID": "8",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "8",
                    "En": "8"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 逢甲大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG8",
                "SubRouteID": "8",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "8",
                    "En": "8"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 逢甲大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "8",
            "En": "8"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG81",
                "SubRouteID": "81",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "81",
                    "En": "81"
                },
                "Headsign": "統聯轉運站 - 臺中車站 - 太平",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG81",
                "SubRouteID": "81",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "81",
                    "En": "81"
                },
                "Headsign": "統聯轉運站 - 臺中車站 - 太平",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "81",
            "En": "81"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG811",
                "SubRouteID": "811",
                "OperatorIDs": [
                    "1",
                    "15",
                    "18",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "811",
                    "En": "811"
                },
                "Headsign": "豐原轉運中心 - 大甲體育場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG811",
                "SubRouteID": "811",
                "OperatorIDs": [
                    "1",
                    "15",
                    "18",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "811",
                    "En": "811"
                },
                "Headsign": "豐原轉運中心 - 大甲體育場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "811",
            "En": "811"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG813",
                "SubRouteID": "813",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "813",
                    "En": "813"
                },
                "Headsign": "豐原轉運中心 - 文武公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG813",
                "SubRouteID": "813",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "813",
                    "En": "813"
                },
                "Headsign": "豐原轉運中心 - 文武公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "813",
            "En": "813"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG8131",
                "SubRouteID": "8131",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "813區1",
                    "En": "813V"
                },
                "Headsign": "后里東站 - 忠靈祠",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG8131",
                "SubRouteID": "8131",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "813區1",
                    "En": "813V"
                },
                "Headsign": "后里東站 - 忠靈祠",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "813區1",
            "En": "813V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG8132",
                "SubRouteID": "8132",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "813區2",
                    "En": "813A"
                },
                "Headsign": "后里東站 - 文武公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG8132",
                "SubRouteID": "8132",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "813區2",
                    "En": "813A"
                },
                "Headsign": "后里東站 - 文武公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "813區2",
            "En": "813A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG82",
                "SubRouteID": "82",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "82",
                    "En": "82"
                },
                "Headsign": "貿易三村 - 臺中車站 - 貿易三村",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG82",
                "SubRouteID": "82",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "82",
                    "En": "82"
                },
                "Headsign": "貿易三村 - 臺中車站 - 貿易三村",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "82",
            "En": "82"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG821",
                "SubRouteID": "821",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "821",
                    "En": "821"
                },
                "Headsign": "東勢 - 和平衛生所",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG821",
                "SubRouteID": "821",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "821",
                    "En": "821"
                },
                "Headsign": "東勢 - 和平衛生所",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "821",
            "En": "821"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG83",
                "SubRouteID": "83",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "83",
                    "En": "83"
                },
                "Headsign": "捷運文心森林公園站-仁友停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG83",
                "SubRouteID": "83",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "83",
                    "En": "83"
                },
                "Headsign": "捷運文心森林公園站-仁友停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "83",
            "En": "83"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG839",
                "SubRouteID": "839",
                "OperatorIDs": [
                    "24"
                ],
                "SubRouteName": {
                    "Zh_tw": "839",
                    "En": "839"
                },
                "Headsign": "泰安車站 - 國立苑裡高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG839",
                "SubRouteID": "839",
                "OperatorIDs": [
                    "24"
                ],
                "SubRouteName": {
                    "Zh_tw": "839",
                    "En": "839"
                },
                "Headsign": "泰安車站 - 國立苑裡高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "839",
            "En": "839"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG85",
                "SubRouteID": "85",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "85",
                    "En": "85"
                },
                "Headsign": "新光里 - 太原車站 - 吉星社區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG85",
                "SubRouteID": "85",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "85",
                    "En": "85"
                },
                "Headsign": "新光里 - 太原車站 - 吉星社區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "85",
            "En": "85"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG850",
                "SubRouteID": "850",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "850",
                    "En": "850"
                },
                "Headsign": "臺中車站 - 谷關",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG850",
                "SubRouteID": "850",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "850",
                    "En": "850"
                },
                "Headsign": "臺中車站 - 谷關",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "850",
            "En": "850"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG853",
                "SubRouteID": "853",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "153區",
                    "En": "153S"
                },
                "Headsign": "高鐵臺中站 - 東勢高工",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG853",
                "SubRouteID": "853",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "153區",
                    "En": "153S"
                },
                "Headsign": "高鐵臺中站 - 東勢高工",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "153區",
            "En": "153S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG86",
                "SubRouteID": "86",
                "OperatorIDs": [
                    "23"
                ],
                "SubRouteName": {
                    "Zh_tw": "86",
                    "En": "86"
                },
                "Headsign": "臺中車站(臺灣大道) - 國軍臺中總醫院 ",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG86",
                "SubRouteID": "86",
                "OperatorIDs": [
                    "23"
                ],
                "SubRouteName": {
                    "Zh_tw": "86",
                    "En": "86"
                },
                "Headsign": "臺中車站(臺灣大道) - 國軍臺中總醫院 ",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "86",
            "En": "86"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG861",
                "SubRouteID": "861",
                "OperatorIDs": [
                    "23"
                ],
                "SubRouteName": {
                    "Zh_tw": "86E",
                    "En": "86E"
                },
                "Headsign": "臺中車站(臺灣大道) - 國軍臺中總醫院",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "86E",
            "En": "86E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG862",
                "SubRouteID": "862",
                "OperatorIDs": [
                    "23"
                ],
                "SubRouteName": {
                    "Zh_tw": "86W",
                    "En": "86W"
                },
                "Headsign": "國軍臺中總醫院 - 臺中車站(臺灣大道)",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "86W",
            "En": "86W"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG865",
                "SubRouteID": "865",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "865",
                    "En": "865"
                },
                "Headsign": "豐原 - 梨山",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG865",
                "SubRouteID": "865",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "865",
                    "En": "865"
                },
                "Headsign": "豐原 - 梨山",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "865",
            "En": "865"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG8651",
                "SubRouteID": "8651",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "865臨",
                    "En": "865"
                },
                "Headsign": "豐原 - 梨山",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG8651",
                "SubRouteID": "8651",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "865臨",
                    "En": "865"
                },
                "Headsign": "豐原 - 梨山",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "865臨",
            "En": "865"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG8652",
                "SubRouteID": "8652",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "865區",
                    "En": "865S"
                },
                "Headsign": "谷關 - 梨山",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG8652",
                "SubRouteID": "8652",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "865區",
                    "En": "865S"
                },
                "Headsign": "谷關 - 梨山",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "865區",
            "En": "865S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG866",
                "SubRouteID": "866",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "866",
                    "En": "866"
                },
                "Headsign": "天池達觀亭 - 武陵農場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG866",
                "SubRouteID": "866",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "866",
                    "En": "866"
                },
                "Headsign": "天池達觀亭 - 武陵農場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "866",
            "En": "866"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG8663",
                "SubRouteID": "8663",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "866區3",
                    "En": "866S3"
                },
                "Headsign": "天池達觀亭 - 福壽山農場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG8663",
                "SubRouteID": "8663",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "866區3",
                    "En": "866S3"
                },
                "Headsign": "天池達觀亭 - 福壽山農場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "866區3",
            "En": "866S3"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG88",
                "SubRouteID": "88",
                "OperatorIDs": [
                    "1",
                    "17",
                    "19",
                    "25",
                    "4",
                    "5",
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "88",
                    "En": "88"
                },
                "Headsign": "宜寧中學 - 麗園公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG88",
                "SubRouteID": "88",
                "OperatorIDs": [
                    "1",
                    "17",
                    "19",
                    "25",
                    "4",
                    "5",
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "88",
                    "En": "88"
                },
                "Headsign": "宜寧中學 - 麗園公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "88",
            "En": "88"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG888",
                "SubRouteID": "888",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "888",
                    "En": "888"
                },
                "Headsign": "豐原轉運中心 - 泰安車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG888",
                "SubRouteID": "888",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "888",
                    "En": "888"
                },
                "Headsign": "豐原轉運中心 - 泰安車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "888",
            "En": "888"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG89",
                "SubRouteID": "89",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "89",
                    "En": "89"
                },
                "Headsign": "嶺東科技大學 - 東門橋",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG89",
                "SubRouteID": "89",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "89",
                    "En": "89"
                },
                "Headsign": "嶺東科技大學 - 東門橋",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "89",
            "En": "89"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG899",
                "SubRouteID": "899",
                "OperatorIDs": [
                    "1",
                    "15",
                    "18",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "199",
                    "En": "199"
                },
                "Headsign": "龍井竹坑口 - 文修停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG899",
                "SubRouteID": "899",
                "OperatorIDs": [
                    "1",
                    "15",
                    "18",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "199",
                    "En": "199"
                },
                "Headsign": "龍井竹坑口 - 文修停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "199",
            "En": "199"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG8991",
                "SubRouteID": "8991",
                "OperatorIDs": [
                    "1",
                    "15",
                    "18",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "199延",
                    "En": "199E"
                },
                "Headsign": "龍津高中 - 文修停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG8991",
                "SubRouteID": "8991",
                "OperatorIDs": [
                    "1",
                    "15",
                    "18",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "199延",
                    "En": "199E"
                },
                "Headsign": "龍津高中 - 文修停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "199延",
            "En": "199E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG90",
                "SubRouteID": "90",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "90",
                    "En": "90"
                },
                "Headsign": "豐原 - 豐原高中 - 東勢高工",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG90",
                "SubRouteID": "90",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "90",
                    "En": "90"
                },
                "Headsign": "豐原 - 豐原高中 - 東勢高工",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "90",
            "En": "90"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG9000",
                "SubRouteID": "9000",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "900",
                    "En": "900"
                },
                "Headsign": "光明國中 - 豐原",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG9000",
                "SubRouteID": "9000",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "900",
                    "En": "900"
                },
                "Headsign": "光明國中 - 豐原",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "900",
            "En": "900"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG9001",
                "SubRouteID": "9001",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "900跳蛙公車",
                    "En": "900J"
                },
                "Headsign": "光明國中 - 豐原高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG9001",
                "SubRouteID": "9001",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "900跳蛙公車",
                    "En": "900J"
                },
                "Headsign": "光明國中 - 豐原高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "900跳蛙公車",
            "En": "900J"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG9002",
                "SubRouteID": "9002",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "900繞",
                    "En": "900A"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 豐原",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG9002",
                "SubRouteID": "9002",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "900繞",
                    "En": "900A"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 豐原",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "900繞",
            "En": "900A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG901",
                "SubRouteID": "901",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "901",
                    "En": "901"
                },
                "Headsign": "豐原 - 明德高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG901",
                "SubRouteID": "901",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "901",
                    "En": "901"
                },
                "Headsign": "豐原 - 明德高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "901",
            "En": "901"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG9012",
                "SubRouteID": "9012",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "901副2",
                    "En": "901V"
                },
                "Headsign": "豐原 - 明德高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG9012",
                "SubRouteID": "9012",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "901副2",
                    "En": "901V"
                },
                "Headsign": "豐原 - 明德高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "901副2",
            "En": "901V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG904",
                "SubRouteID": "904",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "305W",
                    "En": "305W"
                },
                "Headsign": "臺中車站 - 鹿寮 - 大甲",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "305W",
            "En": "305W"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG905",
                "SubRouteID": "905",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "305E",
                    "En": "305E"
                },
                "Headsign": "大甲 - 鹿寮 - 臺中車站",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "305E",
            "En": "305E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG906",
                "SubRouteID": "906",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "306W",
                    "En": "306W"
                },
                "Headsign": "臺中車站(臺灣大道) - 梧棲 - 清水",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "306W",
            "En": "306W"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG907",
                "SubRouteID": "907",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "307副",
                    "En": "307V"
                },
                "Headsign": "八德東大勇路口 - 臺中車站(臺灣大道)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG907",
                "SubRouteID": "907",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "307副",
                    "En": "307V"
                },
                "Headsign": "八德東大勇路口 - 臺中車站(臺灣大道)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "307副",
            "En": "307V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG908",
                "SubRouteID": "908",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "306E",
                    "En": "306E"
                },
                "Headsign": "清水 - 梧棲 - 臺中車站(臺灣大道)",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "306E",
            "En": "306E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG909",
                "SubRouteID": "909",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "151區",
                    "En": "151S"
                },
                "Headsign": "高鐵臺中站-朝陽科技大學/亞洲大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG909",
                "SubRouteID": "909",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "151區",
                    "En": "151S"
                },
                "Headsign": "高鐵臺中站-朝陽科技大學/亞洲大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "151區",
            "En": "151S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG91",
                "SubRouteID": "91",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "91",
                    "En": "91"
                },
                "Headsign": "舊庄 - 中興嶺停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG91",
                "SubRouteID": "91",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "91",
                    "En": "91"
                },
                "Headsign": "舊庄 - 中興嶺停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "91",
            "En": "91"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG910",
                "SubRouteID": "910",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "901副",
                    "En": "901V"
                },
                "Headsign": "豐原 - 明德高中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG910",
                "SubRouteID": "910",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "901副",
                    "En": "901V"
                },
                "Headsign": "豐原 - 明德高中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "901副",
            "En": "901V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG911",
                "SubRouteID": "911",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "91延",
                    "En": "91E"
                },
                "Headsign": "臺中國際機場 - 中興嶺停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG911",
                "SubRouteID": "911",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "91延",
                    "En": "91E"
                },
                "Headsign": "臺中國際機場 - 中興嶺停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "91延",
            "En": "91E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG912",
                "SubRouteID": "912",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "21延1",
                    "En": "21E1"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 民德橋",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG912",
                "SubRouteID": "912",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "21延1",
                    "En": "21E1"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 民德橋",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "21延1",
            "En": "21E1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG913",
                "SubRouteID": "913",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "21延2",
                    "En": "21E2"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 中興嶺",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG913",
                "SubRouteID": "913",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "21延2",
                    "En": "21E2"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 中興嶺",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "21延2",
            "En": "21E2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG914",
                "SubRouteID": "914",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "152區1",
                    "En": "152S1"
                },
                "Headsign": "臺中市議會 - 圓環南永安街口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG914",
                "SubRouteID": "914",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "152區1",
                    "En": "152S1"
                },
                "Headsign": "臺中市議會 - 圓環南永安街口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "152區1",
            "En": "152S1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG915",
                "SubRouteID": "915",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "15繞1",
                    "En": "15A1"
                },
                "Headsign": "臺中刑務所演武場(國漫館) - 國軍臺中總醫院",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "15繞1",
            "En": "15A1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG916",
                "SubRouteID": "916",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "281副",
                    "En": "281V"
                },
                "Headsign": "新建國市場 - 霧峰農工",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG916",
                "SubRouteID": "916",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "281副",
                    "En": "281V"
                },
                "Headsign": "新建國市場 - 霧峰農工",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "281副",
            "En": "281V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG919",
                "SubRouteID": "919",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "309區",
                    "En": "309S"
                },
                "Headsign": "靜宜大學 - 臺中車站 - 高美濕地",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG919",
                "SubRouteID": "919",
                "OperatorIDs": [
                    "1",
                    "3",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "309區",
                    "En": "309S"
                },
                "Headsign": "靜宜大學 - 臺中車站 - 高美濕地",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "309區",
            "En": "309S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG92",
                "SubRouteID": "92",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "92",
                    "En": "92"
                },
                "Headsign": "豐原 - 大安國中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG92",
                "SubRouteID": "92",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "92",
                    "En": "92"
                },
                "Headsign": "豐原 - 大安國中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "92",
            "En": "92"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG920",
                "SubRouteID": "920",
                "OperatorIDs": [
                    "15",
                    "18",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "920",
                    "En": "920"
                },
                "Headsign": "八方國際夜市 - 育賢環中東、西路口",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG920",
                "SubRouteID": "920",
                "OperatorIDs": [
                    "15",
                    "18",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "920",
                    "En": "920"
                },
                "Headsign": "八方國際夜市 - 育賢環中東、西路口",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "920",
            "En": "920"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG9211",
                "SubRouteID": "9211",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "921",
                    "En": "921"
                },
                "Headsign": "豐原轉運中心 - 捷運北屯總站(敦富路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG9211",
                "SubRouteID": "9211",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "921",
                    "En": "921"
                },
                "Headsign": "豐原轉運中心 - 捷運北屯總站(敦富路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "921",
            "En": "921"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG9221",
                "SubRouteID": "9221",
                "OperatorIDs": [
                    "1",
                    "17",
                    "19",
                    "25",
                    "4",
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "922延",
                    "En": "922E"
                },
                "Headsign": "敦化公園 - 中臺科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG9221",
                "SubRouteID": "9221",
                "OperatorIDs": [
                    "1",
                    "17",
                    "19",
                    "25",
                    "4",
                    "5"
                ],
                "SubRouteName": {
                    "Zh_tw": "922延",
                    "En": "922E"
                },
                "Headsign": "敦化公園 - 中臺科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "922延",
            "En": "922E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG924",
                "SubRouteID": "924",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "70A",
                    "En": "70A"
                },
                "Headsign": "第一廣場 - 嶺東科技大學",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "70A",
            "En": "70A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG925",
                "SubRouteID": "925",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "70B",
                    "En": "70B"
                },
                "Headsign": "嶺東科技大學 - 第一廣場",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "70B",
            "En": "70B"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG93",
                "SubRouteID": "93",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "93",
                    "En": "93"
                },
                "Headsign": "海環線 (新烏日車站 - 大甲區銅安厝)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG93",
                "SubRouteID": "93",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "93",
                    "En": "93"
                },
                "Headsign": "海環線 (新烏日車站 - 大甲區銅安厝)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "93",
            "En": "93"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG933",
                "SubRouteID": "933",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "105區2",
                    "En": "105S2"
                },
                "Headsign": "臺中高工 - 四張犁",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "105區2",
            "En": "105S2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG937",
                "SubRouteID": "937",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "306繞",
                    "En": "306A"
                },
                "Headsign": "清水 - 梧棲 - 臺中車站(臺灣大道)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG937",
                "SubRouteID": "937",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "306繞",
                    "En": "306A"
                },
                "Headsign": "清水 - 梧棲 - 臺中車站(臺灣大道)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "306繞",
            "En": "306A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG938",
                "SubRouteID": "938",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "305區",
                    "En": "305S"
                },
                "Headsign": "巨業沙鹿站 - 鹿寮 - 巨業大甲停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG938",
                "SubRouteID": "938",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "305區",
                    "En": "305S"
                },
                "Headsign": "巨業沙鹿站 - 鹿寮 - 巨業大甲停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "305區",
            "En": "305S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG939",
                "SubRouteID": "939",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "306區1",
                    "En": "306S1"
                },
                "Headsign": "靜宜大學 - 梧棲 - 清水",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG939",
                "SubRouteID": "939",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "306區1",
                    "En": "306S1"
                },
                "Headsign": "靜宜大學 - 梧棲 - 清水",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "306區1",
            "En": "306S1"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": false,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG940",
                "SubRouteID": "940",
                "OperatorIDs": [
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "306區2",
                    "En": "306S2"
                },
                "Headsign": "沙鹿 - 梧棲 - 清水",
                "Direction": 0
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "306區2",
            "En": "306S2"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG941",
                "SubRouteID": "941",
                "OperatorIDs": [
                    "17",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "68延",
                    "En": "68E"
                },
                "Headsign": "鹿寮國中 - 太原車站 - 中臺科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG941",
                "SubRouteID": "941",
                "OperatorIDs": [
                    "17",
                    "4"
                ],
                "SubRouteName": {
                    "Zh_tw": "68延",
                    "En": "68E"
                },
                "Headsign": "鹿寮國中 - 太原車站 - 中臺科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "68延",
            "En": "68E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG942",
                "SubRouteID": "942",
                "OperatorIDs": [
                    "17"
                ],
                "SubRouteName": {
                    "Zh_tw": "68延(繞國安國小)",
                    "En": "68EA"
                },
                "Headsign": "鹿寮國中 - 太原車站 - 中臺科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG942",
                "SubRouteID": "942",
                "OperatorIDs": [
                    "17"
                ],
                "SubRouteName": {
                    "Zh_tw": "68延(繞國安國小)",
                    "En": "68EA"
                },
                "Headsign": "鹿寮國中 - 太原車站 - 中臺科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "68延(繞國安國小)",
            "En": "68EA"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG947",
                "SubRouteID": "947",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "617",
                    "En": "617"
                },
                "Headsign": "臺中港旅客服務中心 - 仁友停車場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG947",
                "SubRouteID": "947",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "617",
                    "En": "617"
                },
                "Headsign": "臺中港旅客服務中心 - 仁友停車場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "617",
            "En": "617"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG95",
                "SubRouteID": "95",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "95",
                    "En": "95"
                },
                "Headsign": "六福公園 - 外埔老人文康中心",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG95",
                "SubRouteID": "95",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "95",
                    "En": "95"
                },
                "Headsign": "六福公園 - 外埔老人文康中心",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "95",
            "En": "95"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG950",
                "SubRouteID": "950",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "90延",
                    "En": "90E"
                },
                "Headsign": "豐原 - 和平衛生所",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG950",
                "SubRouteID": "950",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "90延",
                    "En": "90E"
                },
                "Headsign": "豐原 - 和平衛生所",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "90延",
            "En": "90E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG951",
                "SubRouteID": "951",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "95副",
                    "En": "95V"
                },
                "Headsign": "六福公園 - 外埔老人文康中心 - 土城",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG951",
                "SubRouteID": "951",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "95副",
                    "En": "95V"
                },
                "Headsign": "六福公園 - 外埔老人文康中心 - 土城",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "95副",
            "En": "95V"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG953",
                "SubRouteID": "953",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "95區",
                    "En": "95"
                },
                "Headsign": "六福公園 - 大甲高工",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG953",
                "SubRouteID": "953",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "95區",
                    "En": "95"
                },
                "Headsign": "六福公園 - 大甲高工",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "95區",
            "En": "95"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG956",
                "SubRouteID": "956",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "206延",
                    "En": "206E"
                },
                "Headsign": "石岡國中 - 東勢高工",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG956",
                "SubRouteID": "956",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "206延",
                    "En": "206E"
                },
                "Headsign": "石岡國中 - 東勢高工",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "206延",
            "En": "206E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG9580",
                "SubRouteID": "9580",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "958",
                    "En": "958"
                },
                "Headsign": "豐原轉運中心 - 臺中車站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG9580",
                "SubRouteID": "9580",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "958",
                    "En": "958"
                },
                "Headsign": "豐原轉運中心 - 臺中車站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "958",
            "En": "958"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG959",
                "SubRouteID": "959",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "219延",
                    "En": "219E"
                },
                "Headsign": "石岡國中 - 龍興里",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG959",
                "SubRouteID": "959",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "219延",
                    "En": "219E"
                },
                "Headsign": "石岡國中 - 龍興里",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "219延",
            "En": "219E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG960",
                "SubRouteID": "960",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "220繞",
                    "En": "220A"
                },
                "Headsign": "豐原轉運中心 - 大華國中 - 國安社區(宜寧中學)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG960",
                "SubRouteID": "960",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "220繞",
                    "En": "220A"
                },
                "Headsign": "豐原轉運中心 - 大華國中 - 國安社區(宜寧中學)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "220繞",
            "En": "220A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG97",
                "SubRouteID": "97",
                "OperatorIDs": [
                    "1",
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "97",
                    "En": "97"
                },
                "Headsign": "國立苑裡高中 - 大甲區銅安厝 - 臺中國際機場",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG97",
                "SubRouteID": "97",
                "OperatorIDs": [
                    "1",
                    "11"
                ],
                "SubRouteName": {
                    "Zh_tw": "97",
                    "En": "97"
                },
                "Headsign": "國立苑裡高中 - 大甲區銅安厝 - 臺中國際機場",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "97",
            "En": "97"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG974",
                "SubRouteID": "974",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "74繞",
                    "En": "74A"
                },
                "Headsign": "太平-新烏日車站-嶺東科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG974",
                "SubRouteID": "974",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "74繞",
                    "En": "74A"
                },
                "Headsign": "太平-新烏日車站-嶺東科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "74繞",
            "En": "74A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG975",
                "SubRouteID": "975",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "275區",
                    "En": "275S"
                },
                "Headsign": "下新社 - 中和",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG975",
                "SubRouteID": "975",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "275區",
                    "En": "275S"
                },
                "Headsign": "下新社 - 中和",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "275區",
            "En": "275S"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG979",
                "SubRouteID": "979",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "989延",
                    "En": "989E"
                },
                "Headsign": "翁子 - 神圳國中",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG979",
                "SubRouteID": "979",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "989延",
                    "En": "989E"
                },
                "Headsign": "翁子 - 神圳國中",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "989延",
            "En": "989E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG98",
                "SubRouteID": "98",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "98",
                    "En": "98"
                },
                "Headsign": "舊庄-普濟寺",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG98",
                "SubRouteID": "98",
                "OperatorIDs": [
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "98",
                    "En": "98"
                },
                "Headsign": "舊庄-普濟寺",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "98",
            "En": "98"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG981",
                "SubRouteID": "981",
                "OperatorIDs": [
                    "11",
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "98繞",
                    "En": "98A"
                },
                "Headsign": "舊庄-普濟寺",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG981",
                "SubRouteID": "981",
                "OperatorIDs": [
                    "11",
                    "15",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "98繞",
                    "En": "98A"
                },
                "Headsign": "舊庄-普濟寺",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "98繞",
            "En": "98A"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG982",
                "SubRouteID": "982",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "82延",
                    "En": "82E"
                },
                "Headsign": "貿易三村 - 高鐵臺中站",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG982",
                "SubRouteID": "982",
                "OperatorIDs": [
                    "1"
                ],
                "SubRouteName": {
                    "Zh_tw": "82延",
                    "En": "82E"
                },
                "Headsign": "貿易三村 - 高鐵臺中站",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "82延",
            "En": "82E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG989",
                "SubRouteID": "989",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "989",
                    "En": "989"
                },
                "Headsign": "翁子 - 圳前仁愛公園",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG989",
                "SubRouteID": "989",
                "OperatorIDs": [
                    "6"
                ],
                "SubRouteName": {
                    "Zh_tw": "989",
                    "En": "989"
                },
                "Headsign": "翁子 - 圳前仁愛公園",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "989",
            "En": "989"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG99",
                "SubRouteID": "99",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "99",
                    "En": "99"
                },
                "Headsign": "精武車站 - 嶺東科技大學",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG99",
                "SubRouteID": "99",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "99",
                    "En": "99"
                },
                "Headsign": "精武車站 - 嶺東科技大學",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "99",
            "En": "99"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG991",
                "SubRouteID": "991",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "99延",
                    "En": "99E"
                },
                "Headsign": "精武車站 - 臺中區監理所(遊園路)",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG991",
                "SubRouteID": "991",
                "OperatorIDs": [
                    "19"
                ],
                "SubRouteName": {
                    "Zh_tw": "99延",
                    "En": "99E"
                },
                "Headsign": "精武車站 - 臺中區監理所(遊園路)",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "99延",
            "En": "99E"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    },
    {
        "HasSubRoutes": true,
        "SubRoutes": [
            {
                "SubRouteUID": "TXG999",
                "SubRouteID": "999",
                "OperatorIDs": [
                    "15",
                    "18",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "956",
                    "En": "956"
                },
                "Headsign": "豐原轉運中心 - 吉星社區",
                "Direction": 0
            },
            {
                "SubRouteUID": "TXG999",
                "SubRouteID": "999",
                "OperatorIDs": [
                    "15",
                    "18",
                    "3"
                ],
                "SubRouteName": {
                    "Zh_tw": "956",
                    "En": "956"
                },
                "Headsign": "豐原轉運中心 - 吉星社區",
                "Direction": 1
            }
        ],
        "BusRouteType": 11,
        "RouteName": {
            "Zh_tw": "956",
            "En": "956"
        },
        "UpdateTime": "2024-02-13T20:01:13+08:00",
        "VersionID": 6073
    }
]