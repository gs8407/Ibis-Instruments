var interval = 3600000;
var sliceMe = 26;

const customers = {
  54867972: {
    overalStatus: "medium",
    rssStatus: "bad",
    clientRssStatus: "medium",
    stickyClientStatus: "good",
    interfaceStatus: "good",
    interfaceStatusOverall: "good",
    interfaceStatusAdj: "good",
    hgwInterface: {
      interfaceUnifi: "good",
      interfaceHome: "good"
    },
    retransmissionStatus: "bad",
    numberRetransmissions: 5515,
    totalClients: 50,
    maxNoClients: 120,
    concurentClients: 10,
    noClients: 10,
    noStickyClients: 10,
    transfered: 5.7,
    bitrate: {
      min: 15,
      avg: 15,
      max: 15,
      last: 15
    },
    rssHGW: {
      min: -40,
      avg: -35,
      max: -30,
      last: -32
    },
    rssIN: {
      avg: -42,
      max: -35,
      last: -40
    },
    wifiEnabled: "Yes",
    hgwStandard: "802.11b",
    ipAddress: "192.168.1.101",
    mac: "58-90-77-22-75-5C",
    contractNo: "54867972",
    autoChanel: "No",
    ssid: "ibis-wifi1",
    chanell: 6,
    security: "WPA",
    band: "2,4 GHz",
    hidennSsid: "No",
    bandwidth: "22 MHz",
    uptime: "2 days",
    equipment: "ABC",
    description: "modem",
    cmtsId: "BG-C-1-IBIS",
    firmware: "2.2.1004.76"
  },
  31495080: {
    overalStatus: "good",
    rssStatus: "medium",
    clientRssStatus: "good",
    stickyClientStatus: "medium",
    interfaceStatus: "good",
    interfaceStatusOverall: "bad",
    interfaceStatusAdj: "medium",
    hgwInterface: {
      interfaceUnifi: "bad",
      interfaceHome: "good"
    },
    retransmissionStatus: "bad",
    numberRetransmissions: 1315,
    totalClients: 60,
    maxNoClients: 180,
    concurentClients: 15,
    noClients: 15,
    noStickyClients: 15,
    transfered: 8.7,
    bitrate: {
      min: 17,
      avg: 18,
      max: 18,
      last: 17
    },
    rssHGW: {
      min: -42,
      avg: -40,
      max: -35,
      last: -33
    },
    rssIN: {
      avg: -45,
      max: -30,
      last: -40
    },
    wifiEnabled: "No",
    hgwStandard: "802.11b",
    ipAddress: "192.168.1.102",
    mac: "5A-3D-30-13-8F-15",
    contractNo: "31495080",
    autoChanel: "Yes",
    ssid: "ibis-wifi2",
    chanell: 5,
    security: "WPA",
    band: "5 GHz",
    hidennSsid: "No",
    bandwidth: "22 MHz",
    uptime: "2 days",
    equipment: "ABC",
    description: "modem",
    cmtsId: "BG-C-2-IBIS",
    firmware: "2.2.1004.76"
  },
  31452503: {
    overalStatus: "good",
    rssStatus: "good",
    clientRssStatus: "medium",
    stickyClientStatus: "good",
    interfaceStatus: "medium",
    interfaceStatusOverall: "good",
    interfaceStatusAdj: "good",
    hgwInterface: {
      interfaceUnifi: "medium",
      interfaceHome: "good"
    },
    retransmissionStatus: "medium",
    numberRetransmissions: 9659,
    totalClients: 55,
    maxNoClients: 100,
    concurentClients: 11,
    noClients: 13,
    noStickyClients: 9,
    transfered: 7.2,
    bitrate: {
      min: 12,
      avg: 15,
      max: 17,
      last: 15
    },
    rssHGW: {
      min: -38,
      avg: -32,
      max: -29,
      last: -32
    },
    rssIN: {
      avg: -40,
      max: -36,
      last: -44
    },
    wifiEnabled: "No",
    hgwStandard: "802.11b",
    ipAddress: "192.168.1.103",
    mac: "A3-43-AE-41-2E-D7",
    contractNo: "31452503",
    autoChanel: "No",
    ssid: "ibis-wifi3",
    chanell: 7,
    security: "WPA",
    band: "2,4 GHz",
    hidennSsid: "No",
    bandwidth: "22 MHz",
    uptime: "2 days",
    equipment: "ABC",
    description: "modem",
    cmtsId: "BG-C-3-IBIS",
    firmware: "2.2.1004.76"
  },
  79238775: {
    overalStatus: "bad",
    rssStatus: "bad",
    clientRssStatus: "medium",
    stickyClientStatus: "bad",
    interfaceStatus: "medium",
    interfaceStatusOverall: "medium",
    interfaceStatusAdj: "bad",
    hgwInterface: {
      interfaceUnifi: "medium",
      interfaceHome: "good"
    },
    retransmissionStatus: "bad",
    numberRetransmissions: 4213,
    totalClients: 40,
    maxNoClients: 100,
    concurentClients: 8,
    noClients: 9,
    noStickyClients: 5,
    transfered: 4.9,
    bitrate: {
      min: 12,
      avg: 12,
      max: 12,
      last: 12
    },
    rssHGW: {
      min: -23,
      avg: -30,
      max: -35,
      last: -32
    },
    rssIN: {
      avg: -45,
      max: -55,
      last: -40
    },
    wifiEnabled: "Yes",
    hgwStandard: "802.11b",
    ipAddress: "192.168.1.104",
    mac: "B6-06-F6-C7-D5-04",
    contractNo: "79238775",
    autoChanel: "Yes",
    ssid: "ibis-wifi4",
    chanell: 6,
    security: "WPA",
    band: "2,4 GHz",
    hidennSsid: "No",
    bandwidth: "22 MHz",
    uptime: "2 days",
    equipment: "ABC",
    description: "modem",
    cmtsId: "BG-C-4-IBIS",
    firmware: "2.2.1004.76"
  },
  39531833: {
    overalStatus: "bad",
    rssStatus: "medium",
    clientRssStatus: "medium",
    stickyClientStatus: "good",
    interfaceStatus: "good",
    interfaceStatusOverall: "medium",
    interfaceStatusAdj: "good",
    hgwInterface: {
      interfaceUnifi: "medium",
      interfaceHome: "good"
    },
    retransmissionStatus: "medium",
    numberRetransmissions: 3241,
    totalClients: 58,
    maxNoClients: 100,
    concurentClients: 14,
    noClients: 14,
    noStickyClients: 14,
    transfered: 9.7,
    bitrate: {
      min: 12,
      avg: 12,
      max: 12,
      last: 11
    },
    rssHGW: {
      min: -30,
      avg: -25,
      max: -20,
      last: -22
    },
    rssIN: {
      avg: -32,
      max: -25,
      last: -30
    },
    wifiEnabled: "Yes",
    hgwStandard: "802.11b",
    ipAddress: "192.168.1.105",
    mac: "9D-01-4A-A4-CB-91",
    contractNo: "39531833",
    autoChanel: "No",
    ssid: "ibis-wifi5",
    chanell: 9,
    security: "WPA",
    band: "5 GHz",
    hidennSsid: "No",
    bandwidth: "22 MHz",
    uptime: "2 days",
    equipment: "ABC",
    description: "modem",
    cmtsId: "BG-C-5-IBIS",
    firmware: "2.2.1004.76"
  },
  33992438: {
    overalStatus: "good",
    rssStatus: "good",
    clientRssStatus: "medium",
    stickyClientStatus: "medium",
    interfaceStatus: "medium",
    interfaceStatusOverall: "good",
    interfaceStatusAdj: "good",
    hgwInterface: {
      interfaceUnifi: "good",
      interfaceHome: "good"
    },
    retransmissionStatus: "bad",
    numberRetransmissions: 6959,
    totalClients: 51,
    maxNoClients: 90,
    concurentClients: 9,
    noClients: 9,
    noStickyClients: 9,
    transfered: 3.7,
    bitrate: {
      min: 13,
      avg: 13,
      max: 13,
      last: 13
    },
    rssHGW: {
      min: -40,
      avg: -35,
      max: -30,
      last: -32
    },
    rssIN: {
      avg: -42,
      max: -35,
      last: -40
    },
    wifiEnabled: "No",
    hgwStandard: "802.11b",
    ipAddress: "192.168.1.106",
    mac: "D7-C4-71-4A-47-35",
    contractNo: "33992438",
    autoChanel: "Yes",
    ssid: "ibis-wifi6",
    chanell: 7,
    security: "WPA",
    band: "2,4 GHz",
    hidennSsid: "No",
    bandwidth: "22 MHz",
    uptime: "2 days",
    equipment: "ABC",
    description: "modem",
    cmtsId: "BG-C-6-IBIS",
    firmware: "2.2.1004.76"
  },
  93603004: {
    overalStatus: "medium",
    rssStatus: "bad",
    clientRssStatus: "bad",
    stickyClientStatus: "good",
    interfaceStatus: "good",
    interfaceStatusOverall: "good",
    interfaceStatusAdj: "good",
    hgwInterface: {
      interfaceUnifi: "good",
      interfaceHome: "bad"
    },
    retransmissionStatus: "good",
    numberRetransmissions: 9698,
    totalClients: 70,
    maxNoClients: 140,
    concurentClients: 14,
    noClients: 14,
    noStickyClients: 14,
    transfered: 12.2,
    bitrate: {
      min: 18,
      avg: 18,
      max: 18,
      last: 18
    },
    rssHGW: {
      min: -44,
      avg: -39,
      max: -34,
      last: -35
    },
    rssIN: {
      avg: -47,
      max: -34,
      last: -42
    },
    wifiEnabled: "Yes",
    hgwStandard: "802.11b",
    ipAddress: "192.168.1.107",
    mac: "0D-D3-6B-05-86-59",
    contractNo: "93603004",
    autoChanel: "Yes",
    ssid: "ibis-wifi7",
    chanell: 4,
    security: "WPA",
    band: "5 GHz",
    hidennSsid: "No",
    bandwidth: "22 MHz",
    uptime: "2 days",
    equipment: "ABC",
    description: "modem",
    cmtsId: "BG-C-7-IBIS",
    firmware: "2.2.1004.76"
  }
};

var data1a = [
  3.7,
  3.3,
  3.9,
  5.1,
  3.5,
  3.8,
  4.0,
  5.0,
  6.1,
  3.7,
  3.3,
  6.4,
  6.9,
  6.0,
  6.8,
  4.4,
  4.0,
  3.8,
  5.0,
  4.9,
  9.2,
  9.6,
  9.5,
  6.3,
  9.5,
  3.3,
  3.9,
  5.1,
  3.5,
  3.8,
  4.0,
  5.0,
  6.1,
  3.7,
  3.3,
  6.4,
  6.9,
  6.0,
  6.8,
  4.4,
  4.0,
  3.8,
  5.0,
  4.9,
  9.2,
  9.6,
  9.5,
  6.3,
  9.5,
  3.3,
  3.9,
  5.1,
  3.5,
  3.8,
  4.0,
  5.0,
  6.1,
  3.7,
  3.3,
  6.4,
  6.9,
  6.0,
  6.8,
  4.4,
  4.0,
  3.8,
  5.0,
  4.9,
  9.2,
  9.6,
  9.5,
  6.3,
  9.5,
  3.3,
  3.9,
  5.1,
  3.5,
  3.8,
  4.0,
  5.0,
  6.1,
  3.7,
  3.3,
  6.4,
  6.9,
  6.0,
  6.8,
  4.4,
  4.0,
  3.8,
  5.0,
  4.9,
  9.2,
  9.6,
  9.5,
  6.3,
  9.5
].slice(0, sliceMe);

var data1b = [
  0.2,
  0.1,
  0.1,
  0.1,
  0.3,
  0.2,
  0.3,
  0.1,
  0.7,
  0.3,
  0.2,
  0.2,
  0.3,
  0.1,
  0.3,
  0.4,
  0.3,
  0.2,
  0.3,
  0.2,
  0.4,
  0.0,
  0.3,
  2.3,
  1.0,
  0.1,
  0.1,
  0.1,
  0.3,
  0.2,
  0.3,
  0.1,
  0.7,
  0.3,
  0.2,
  0.2,
  0.3,
  0.1,
  0.3,
  0.4,
  0.3,
  0.2,
  0.3,
  0.2,
  0.4,
  0.0,
  0.3,
  2.3,
  1.0,
  0.1,
  0.1,
  0.1,
  0.3,
  0.2,
  0.3,
  0.1,
  0.7,
  0.3,
  0.2,
  0.2,
  0.3,
  0.1,
  0.3,
  0.4,
  0.3,
  0.2,
  0.3,
  0.2,
  0.4,
  0.0,
  0.3,
  2.3,
  1.0,
  0.1,
  0.1,
  0.1,
  0.3,
  0.2,
  0.3,
  0.1,
  0.7,
  0.3,
  0.2,
  0.2,
  0.3,
  0.1,
  0.3,
  0.4,
  0.3,
  0.2,
  0.3,
  0.2,
  0.4,
  0.0,
  0.3,
  2.3,
  1.0
].slice(0, sliceMe);

var data2a = [
  84,
  99,
  82,
  95,
  87,
  84,
  96,
  84,
  99,
  97,
  90,
  83,
  84,
  80,
  91,
  92,
  85,
  89,
  93,
  88,
  83,
  96,
  89,
  80,
  78,
  78,
  86,
  100,
  94,
  76,
  79,
  75,
  98,
  95,
  76,
  89,
  86,
  92,
  90,
  98,
  75,
  99,
  76,
  79,
  85,
  75,
  76,
  79,
  82,
  85,
  95,
  95,
  79,
  92,
  77,
  82,
  82,
  83,
  80,
  91,
  99,
  80,
  87,
  88,
  78,
  97,
  83,
  98,
  97,
  80,
  94,
  76,
  86,
  97,
  82,
  76,
  90,
  78,
  77,
  83,
  84,
  95,
  87,
  79,
  76,
  78,
  83,
  96,
  79,
  78,
  100,
  95,
  83,
  92,
  75,
  75,
  88,
  87,
  85,
  78
].slice(0, sliceMe);
var data2b = [
  69,
  65,
  74,
  75,
  70,
  68,
  70,
  66,
  50,
  61,
  54,
  71,
  64,
  66,
  55,
  68,
  60,
  60,
  67,
  75,
  69,
  64,
  74,
  61,
  69,
  72,
  65,
  52,
  53,
  72,
  74,
  60,
  59,
  68,
  51,
  75,
  68,
  57,
  59,
  64,
  64,
  51,
  61,
  73,
  50,
  56,
  65,
  56,
  56,
  60,
  73,
  58,
  63,
  62,
  64,
  52,
  56,
  62,
  72,
  55,
  61,
  64,
  68,
  71,
  67,
  50,
  54,
  62,
  60,
  52,
  51,
  53,
  66,
  68,
  60,
  59,
  64,
  64,
  56,
  72,
  56,
  61,
  54,
  55,
  67,
  69,
  72,
  53,
  51,
  68,
  58,
  60,
  73,
  61,
  62,
  74,
  54,
  55,
  59,
  71
].slice(0, sliceMe);
var data5a = [
  10,
  32,
  26,
  36,
  46,
  15,
  26,
  42,
  25,
  11,
  50,
  36,
  31,
  49,
  17,
  7,
  6,
  41,
  41,
  47,
  36,
  45,
  27,
  10,
  18,
  32,
  5,
  50,
  28,
  42,
  42,
  15,
  28,
  2,
  5,
  20,
  2,
  46,
  48,
  23,
  14,
  46,
  46,
  38,
  8,
  4,
  44,
  46,
  10,
  41,
  12,
  23,
  35,
  33,
  2,
  47,
  20,
  13,
  13,
  20,
  44,
  36,
  5,
  46,
  8,
  41,
  31,
  20,
  29,
  11,
  4,
  11,
  13,
  14,
  19,
  7,
  4,
  30,
  15,
  30,
  48,
  23,
  20,
  16,
  6,
  45,
  19,
  3,
  14,
  14,
  18,
  43,
  38,
  17,
  24,
  46,
  45,
  50,
  24,
  11
].slice(0, sliceMe);

var data5b = [
  2,
  8,
  5,
  12,
  8,
  1,
  5,
  13,
  15,
  13,
  3,
  11,
  13,
  6,
  5,
  2,
  12,
  4,
  11,
  7,
  9,
  2,
  4,
  9,
  13,
  10,
  15,
  1,
  2,
  8,
  6,
  11,
  12,
  2,
  4,
  7,
  1,
  5,
  15,
  7,
  10,
  10,
  3,
  12,
  15,
  6,
  10,
  7,
  6,
  10,
  15,
  8,
  6,
  1,
  10,
  12,
  8,
  8,
  5,
  12,
  9,
  1,
  13,
  11,
  8,
  11,
  10,
  9,
  4,
  7,
  15,
  4,
  9,
  13,
  2,
  15,
  3,
  4,
  12,
  5,
  12,
  14,
  15,
  3,
  9,
  13,
  7,
  4,
  4,
  3,
  3,
  2,
  1,
  4,
  8,
  9,
  1,
  10,
  15,
  15
].slice(0, sliceMe);

var data6a = [
  24,
  36,
  28,
  7,
  19,
  17,
  27,
  10,
  38,
  26,
  44,
  4,
  42,
  2,
  10,
  32,
  44,
  18,
  48,
  50,
  41,
  46,
  50,
  15,
  41,
  5,
  43,
  29,
  20,
  38,
  5,
  5,
  32,
  46,
  11,
  14,
  46,
  47,
  20,
  4,
  11,
  13,
  2,
  46,
  30,
  33,
  16,
  41,
  7,
  19,
  2,
  23,
  47,
  24,
  46,
  28,
  14,
  4,
  12,
  13,
  13,
  49,
  36,
  46,
  23,
  14,
  8,
  20,
  26,
  41,
  25,
  50,
  14,
  35,
  36,
  10,
  11,
  48,
  36,
  23,
  15,
  20,
  18,
  6,
  3,
  11,
  45,
  8,
  42,
  15,
  42,
  45,
  6,
  31,
  17,
  46,
  31,
  45,
  30,
  20
].slice(0, sliceMe);

var data6b = [
  15,
  1,
  15,
  3,
  5,
  5,
  6,
  12,
  9,
  8,
  1,
  4,
  11,
  4,
  2,
  7,
  7,
  12,
  12,
  6,
  1,
  9,
  7,
  8,
  13,
  9,
  10,
  2,
  4,
  2,
  1,
  13,
  2,
  6,
  15,
  2,
  8,
  15,
  13,
  2,
  10,
  4,
  11,
  11,
  7,
  10,
  11,
  15,
  7,
  10,
  10,
  5,
  3,
  13,
  6,
  15,
  1,
  5,
  14,
  4,
  10,
  15,
  12,
  12,
  12,
  5,
  12,
  12,
  3,
  8,
  1,
  11,
  13,
  3,
  3,
  10,
  5,
  8,
  13,
  3,
  8,
  1,
  9,
  2,
  15,
  8,
  15,
  4,
  4,
  10,
  13,
  15,
  9,
  9,
  7,
  9,
  6,
  8,
  4,
  4
].slice(0, sliceMe);

var data7a = [
  29,
  23,
  32,
  5,
  42,
  36,
  15,
  46,
  46,
  28,
  48,
  11,
  46,
  41,
  6,
  20,
  2,
  36,
  50,
  47,
  20,
  10,
  12,
  8,
  20,
  14,
  49,
  4,
  24,
  32,
  27,
  45,
  38,
  31,
  11,
  4,
  13,
  19,
  25,
  28,
  46,
  30,
  46,
  19,
  42,
  36,
  38,
  14,
  46,
  3,
  41,
  17,
  41,
  11,
  13,
  20,
  35,
  45,
  4,
  50,
  13,
  10,
  18,
  20,
  14,
  8,
  33,
  18,
  47,
  7,
  6,
  48,
  44,
  23,
  23,
  15,
  46,
  42,
  36,
  2,
  26,
  11,
  15,
  44,
  5,
  30,
  14,
  43,
  26,
  45,
  2,
  24,
  5,
  50,
  7,
  16,
  31,
  17,
  10,
  41
].slice(0, sliceMe);

var data7b = [
  7,
  7,
  10,
  15,
  9,
  10,
  12,
  8,
  9,
  8,
  4,
  9,
  8,
  8,
  4,
  11,
  10,
  5,
  2,
  14,
  9,
  6,
  5,
  2,
  13,
  6,
  12,
  3,
  12,
  3,
  4,
  15,
  7,
  9,
  11,
  8,
  12,
  6,
  3,
  15,
  1,
  15,
  10,
  4,
  11,
  6,
  3,
  13,
  11,
  10,
  1,
  15,
  10,
  15,
  13,
  4,
  12,
  9,
  15,
  1,
  2,
  13,
  3,
  2,
  2,
  4,
  1,
  13,
  5,
  4,
  7,
  12,
  11,
  12,
  13,
  10,
  8,
  8,
  6,
  1,
  10,
  12,
  15,
  5,
  1,
  13,
  4,
  5,
  15,
  9,
  3,
  7,
  1,
  4,
  5,
  2,
  8,
  2,
  7,
  15
].slice(0, sliceMe);

var data8a = [
  31,
  15,
  50,
  5,
  8,
  4,
  45,
  41,
  36,
  18,
  50,
  13,
  11,
  11,
  28,
  13,
  30,
  32,
  2,
  38,
  46,
  23,
  41,
  33,
  20,
  44,
  45,
  6,
  30,
  38,
  15,
  20,
  47,
  26,
  10,
  10,
  23,
  48,
  14,
  35,
  36,
  3,
  19,
  20,
  14,
  19,
  13,
  32,
  5,
  8,
  41,
  16,
  42,
  6,
  26,
  50,
  2,
  15,
  5,
  7,
  11,
  46,
  11,
  45,
  14,
  46,
  46,
  42,
  46,
  4,
  27,
  42,
  41,
  46,
  28,
  7,
  14,
  25,
  17,
  18,
  31,
  24,
  49,
  2,
  20,
  23,
  44,
  24,
  36,
  12,
  43,
  4,
  29,
  10,
  48,
  46,
  36,
  20,
  47,
  17
].slice(0, sliceMe);

var data8b = [
  10,
  13,
  12,
  8,
  5,
  2,
  3,
  5,
  15,
  10,
  15,
  3,
  12,
  12,
  4,
  9,
  11,
  14,
  1,
  2,
  13,
  8,
  12,
  7,
  2,
  7,
  5,
  6,
  15,
  6,
  1,
  4,
  15,
  1,
  11,
  7,
  9,
  1,
  9,
  10,
  8,
  9,
  3,
  12,
  4,
  7,
  11,
  4,
  12,
  1,
  5,
  11,
  2,
  5,
  15,
  6,
  6,
  9,
  5,
  4,
  13,
  15,
  4,
  9,
  13,
  6,
  15,
  3,
  1,
  7,
  8,
  13,
  7,
  15,
  8,
  12,
  8,
  15,
  4,
  8,
  13,
  10,
  2,
  1,
  3,
  3,
  8,
  4,
  9,
  10,
  4,
  10,
  11,
  10,
  15,
  2,
  13,
  12,
  10,
  2
].slice(0, sliceMe);



function populate() {
  $("#graphs").html(
    '<div class="container-fluid">' +
      '<div class="row">' +
      '<div class="col-md-6">' +
      '<div class="containers" id="container1"></div>' +
      '<div class="containers" id="container2"></div>' +
      '<div class="containers" id="container3"></div>' +
      '<div class="containers" id="container4"></div>' +
      "</div>" +
      '<div class="col-md-6">' +
      '<div class="containers" id="container5"></div>' +
      '<div class="containers" id="container6"></div>' +
      '<div class="containers" id="container7"></div>' +
      '<div class="containers" id="container8"></div>' +
      "</div>" +
      "</div>" +
      "</div>"
  );





  Highcharts.chart("container1", {
    chart: {
      type: "spline"
    },
    title: {
      text: "HGw Internet speed"
    },
    xAxis: {
      type: "datetime",
      labels: {
        overflow: "justify"
      }
    },
    yAxis: {
      title: {
        text: "HGw Internet speed"
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null
    },
    tooltip: {
      valueSuffix: " MB"
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: interval,
        pointStart: backendDate
      }
    },

    series: [
      {
        name: "Download speed",
        data: data1a
      },
      {
        name: "Upload speed",
        data: data1b
      }
    ],
    navigation: {
      menuItemStyle: {
        fontSize: "10px"
      }
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                
            }
        }]
    }
  });

  Highcharts.chart("container2", {
    chart: {
      type: "area"
    },
    title: {
      text: "Signal strength"
    },

    xAxis: {
      type: "datetime",
      labels: {
        overflow: "justify"
      }
    },
    yAxis: {
      title: {
        text: "Signal strength"
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null
    },
    tooltip: {
      valueSuffix: " dB"
    },

    plotOptions: {
      area: {
        pointInterval: interval,
        pointStart: backendDate,
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },

    series: [
      {
        name: "MAX",
        data: data2a
      },
      {
        name: "MIN",
        data: data2b
      }
    ],
    navigation: {
      menuItemStyle: {
        fontSize: "10px"
      }
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                
            }
        }]
    }
  });

  Highcharts.chart("container3", {
    chart: {
      type: "area"
    },
    title: {
      text: "Bandwidth usage"
    },

    xAxis: {
      type: "datetime",
      labels: {
        overflow: "justify"
      }
    },
    yAxis: {
      title: {
        text: "Bandwidth"
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null
    },
    tooltip: {
      valueSuffix: " GB"
    },
    plotOptions: {
      area: {
        stacking: "percent",
        lineColor: "#ffffff",
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: "#ffffff"
        },
        pointInterval: interval,
        pointStart: backendDate
      }
    },
    series: [
      {
        name: "Given",
        data: data1a
      },
      {
        name: "Used",
        data: data1b
      }
    ],
    navigation: {
      menuItemStyle: {
        fontSize: "10px"
      }
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                
            }
        }]
    }
  });

  Highcharts.chart("container4", {
    chart: {
      type: "column"
    },
    title: {
      text: "Number of users"
    },

    xAxis: {
      type: "datetime",
      labels: {
        overflow: "justify"
      }
    },
    yAxis: {
      title: {
        text: "Users"
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null
    },
    tooltip: {
      valueSuffix: " m/s"
    },

    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        pointInterval: interval,
        pointStart: backendDate
      }
    },
    series: [
      {
        name: "MAX",
        data: data1a
      },
      {
        name: "MIN",
        data: data1b
      }
    ],
    navigation: {
      menuItemStyle: {
        fontSize: "10px"
      }
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                
            }
        }]
    }
  });

  Highcharts.chart("container5", {
    chart: {
      type: "column"
    },
    title: {
      text: "Bandwidth"
    },

    xAxis: {
      type: "datetime",
      labels: {
        overflow: "justify"
      }
    },
    yAxis: {
      title: {
        text: "Bandwidth"
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null
    },
    tooltip: {
      valueSuffix: " GB"
    },
    plotOptions: {
      column: {
        stacking: "normal",
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: interval,
        pointStart: backendDate
      }
    },
    series: [
      {
        name: "Download",
        data: data5a
      },
      {
        name: "Upload",
        data: data5b
      }
    ],
    navigation: {
      menuItemStyle: {
        fontSize: "10px"
      }
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                
            }
        }]
    }
  });

  Highcharts.chart("container6", {
    chart: {
      type: "area"
    },
    title: {
      text: "WIFI signal loss"
    },

    xAxis: {
      type: "datetime",
      labels: {
        overflow: "justify"
      }
    },
    yAxis: {
      title: {
        text: "Users"
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null
    },
    tooltip: {
      valueSuffix: " no"
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },

    plotOptions: {
      area: {
        stacking: "normal",
        lineColor: "#666666",
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: "#666666"
        },
        pointInterval: interval,
        pointStart: backendDate
      }
    },

    series: [
      {
        name: "UNIFY",
        data: data6a
      },
      {
        name: "HOME",
        data: data6b
      }
    ],
    navigation: {
      menuItemStyle: {
        fontSize: "10px"
      }
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                
            }
        }]
    }
  });

  Highcharts.chart("container7", {
    chart: {
      type: "spline"
    },
    title: {
      text: "Signal strength"
    },

    xAxis: {
      type: "datetime",
      labels: {
        overflow: "justify"
      }
    },
    yAxis: {
      title: {
        text: "dB"
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null
    },
    tooltip: {
      valueSuffix: " dB"
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          lineWidth: 1,
          lineColor: "#666666"
        },
        pointInterval: interval,
        pointStart: backendDate
      }
    },
    series: [
      {
        name: "max",
        data: data7a
      },
      {
        name: "min",
        data: data7b
      }
    ],
    navigation: {
      menuItemStyle: {
        fontSize: "10px"
      }
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                
            }
        }]
    }
  });

  Highcharts.chart("container8", {
    chart: {
      type: "areaspline"
    },
    title: {
      text: "Type of connection"
    },

    xAxis: {
      type: "datetime",
      labels: {
        overflow: "justify"
      }
    },
    yAxis: {
      title: {
        text: "Type"
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null
    },
    tooltip: {
      valueSuffix: " connections"
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
        pointInterval: interval,
        pointStart: backendDate
      }
    },
    series: [
      {
        name: "WIFI",
        data: data8a
      },
      {
        name: "LAN",
        data: data8b
      }
    ],
    navigation: {
      menuItemStyle: {
        fontSize: "10px"
      }
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                
            }
        }]
    }
  });
}


function rand(min, max, interval) {
  if (typeof interval === "undefined") interval = 1;
  var r = Math.floor((Math.random() * (max - min + interval)) / interval);
  return r * interval + min;
}

pie1a = rand(30, 80);
pie1b = 100 - pie1a;
pie2a = rand(30, 80);
pie2b = 100 - pie2a;
pie3a = rand(30, 80);
pie3b = 100 - pie3a;
pie4a = rand(30, 80);
pie4b = 100 - pie4a;
pie5a = rand(30, 80);
pie5b = 100 - pie5a;
pie6a = rand(30, 80);
pie6b = 100 - pie6a;
pie7a = rand(30, 80);
pie7b = 100 - pie7a;
pie8a = rand(30, 80);
pie8b = 100 - pie8a;



Highcharts.chart("pie1", {
  chart: {
    type: "pie",
    height: 200
  },
  title: {
    text: "",
    style: {
      display: "none"
    }
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      cursor: "pointer",
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [
    {
      name: "Connected time",
      colorByPoint: true,
      data: [
        {
          name: "ON",
          y: pie1a,
          selected: true
        },
        {
          name: "OFF",
          y: pie1b,
          selected: false
        }
      ]
    }
  ]
});

Highcharts.chart("pie2", {
  chart: {
    type: "pie",
    height: 200
  },
  title: {
    text: "",
    style: {
      display: "none"
    }
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      cursor: "pointer",
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [
    {
      name: "Type",
      colorByPoint: true,
      data: [
        {
          name: "WIFI",
          y: pie2a,

          selected: true
        },
        {
          name: "LAN",
          y: pie2b
        }
      ]
    }
  ]
});

Highcharts.chart("pie3", {
  chart: {
    type: "pie",
    height: 200
  },
  title: {
    text: "",
    style: {
      display: "none"
    }
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      cursor: "pointer",
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [
    {
      name: "Interface",
      colorByPoint: true,
      data: [
        {
          name: "High",
          y: pie3a,

          selected: true
        },
        {
          name: "Low",
          y: pie3b
        }
      ]
    }
  ]
});

Highcharts.chart("pie4", {
  chart: {
    type: "pie",
    height: 200
  },
  title: {
    text: "",
    style: {
      display: "none"
    }
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      cursor: "pointer",
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [
    {
      name: "Interface",
      colorByPoint: true,
      data: [
        {
          name: "High",
          y: pie4a,

          selected: true
        },
        {
          name: "Low",
          y: pie4b
        }
      ]
    }
  ]
});

Highcharts.chart("pie5", {
  chart: {
    type: "pie",
    height: 200
  },
  title: {
    text: "",
    style: {
      display: "none"
    }
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      cursor: "pointer",
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [
    {
      name: "Channel",
      colorByPoint: true,
      data: [
        {
          name: "6",
          y: pie5a,

          selected: true
        },
        {
          name: "4",
          y: pie5b
        }
      ]
    }
  ]
});

Highcharts.chart("pie6", {
  chart: {
    type: "pie",
    height: 200
  },
  title: {
    text: "",
    style: {
      display: "none"
    }
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      cursor: "pointer",
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [
    {
      name: "Sticky clients",
      colorByPoint: true,
      data: [
        {
          name: "Sticky",
          y:pie6a,

          selected: true
        },
        {
          name: "Non-Sticky",
          y: pie6b
        }
      ]
    }
  ]
});

Highcharts.chart("pie7", {
  chart: {
    type: "pie",
    height: 200
  },
  title: {
    text: "",
    style: {
      display: "none"
    }
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      cursor: "pointer",
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [
    {
      name: "RSS Status",
      colorByPoint: true,
      data: [
        {
          name: "Good",
          y: pie7a,

          selected: true
        },
        {
          name: "Bad",
          y: pie7b
        }
      ]
    }
  ]
});

Highcharts.chart("pie8", {
  
  chart: {
    type: "pie",
    height: 200,
  },
  title: {
    text: "",
    style: {
      display: "none"
    }
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      cursor: "pointer",
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [
    {
      name: "HGw RSS Status",
      colorByPoint: true,
      data: [
        {
          name: "Good",
          y: pie8a,

          selected: true
        },
        {
          name: "Bad",
          y: pie8b
        }
      ]
    }
  ]
});




function populateTable() {
  $("#overalStatus").html(customers[customer].overalStatus);
  $("#overalStatus").addClass(customers[customer].overalStatus);
  $("#rssStatus").html(customers[customer].rssStatus);
  $("#rssStatus").addClass(customers[customer].rssStatus);
  $("#clientRssStatus").html(customers[customer].clientRssStatus);
  $("#clientRssStatus").addClass(customers[customer].clientRssStatus);
  $("#stickyClientStatus").html(customers[customer].stickyClientStatus);
  $("#stickyClientStatus").addClass(customers[customer].stickyClientStatus);
  $("#interfaceStatus").html(customers[customer].interfaceStatus);
  $("#interfaceStatusOverall").addClass(customers[customer].interfaceStatusOverall);
  $("#interfaceStatusOverall").html(customers[customer].interfaceStatusOverall);
  $("#interfaceStatus").addClass(customers[customer].interfaceStatus);
  $("#interfaceStatusAdj").html(customers[customer].interfaceStatusAdj);
  $("#interfaceStatusAdj").addClass(customers[customer].interfaceStatusAdj);
  $("#interfaceUnifi").html(customers[customer].hgwInterface.interfaceUnifi);
  $("#interfaceUnifi").addClass(customers[customer].hgwInterface.interfaceUnifi);
  $("#interfaceHome").html(customers[customer].hgwInterface.interfaceHome);
  $("#interfaceHome").addClass(customers[customer].hgwInterface.interfaceHome);
  $("#retransmissionStatus").html(customers[customer].retransmissionStatus);
  $("#retransmissionStatus").addClass(customers[customer].retransmissionStatus);
  $("#numberRetransmissions").html(customers[customer].numberRetransmissions);
  $("#maxNoClients").html(customers[customer].maxNoClients);
  $("#concurentClients").html(customers[customer].concurentClients);
  $("#totalClients").html(customers[customer].totalClients);
  $("#noClients").html(customers[customer].noClients);
  $("#noStickyClients").html(customers[customer].noStickyClients);
  $("#transfered").html(customers[customer].transfered);
  $("#transfered2").html(customers[customer].transfered);
  $("#bitrateMin").html(customers[customer].bitrate.min);
  $("#bitrateAvg").html(customers[customer].bitrate.avg);
  $("#bitrateMax").html(customers[customer].bitrate.max);
  $("#bitrateLast").html(customers[customer].bitrate.last);
  $("#rssHgwMin").html(customers[customer].rssHGW.min);
  $("#rssHgwAvg").html(customers[customer].rssHGW.avg);
  $("#rssHgwMax").html(customers[customer].rssHGW.max);
  $("#rssHgwLast").html(customers[customer].rssIN.last);
  $("#rssINavg").html(customers[customer].rssIN.avg);
  $("#rssINmax").html(customers[customer].rssIN.max);
  $("#rssINlast").html(customers[customer].rssIN.last);
}

 function hgwInfo() {
   $("#wifiEnabled").html(customers[customer].wifiEnabled);
   $("#wifiEnabled").addClass(customers[customer].wifiEnabled);
   $("#hgwStandard").html(customers[customer].hgwStandard);
   $("#ipAddress").html(customers[customer].ipAddress);
   $("#Mac").html(customers[customer].mac);
   $("#contractNo").html(customers[customer].contractNo);
   $("#autoChanel").html(customers[customer].autoChanel);
   $("#autoChanel").addClass(customers[customer].autoChanel);
   $("#ssid").html(customers[customer].ssid);
   $("#chanell").html(customers[customer].chanell);
   $("#security").html(customers[customer].security);
   $("#band").html(customers[customer].band);
   $("#hidennSsid").html(customers[customer].hidennSsid);
   $("#bandwidth").html(customers[customer].bandwidth);
   $("#uptime").html(customers[customer].uptime);
   $("#equipment").html(customers[customer].equipment);
   $("#description").html(customers[customer].description);
   $("#cmtsId").html(customers[customer].cmtsId);
   $("#firmware").html(customers[customer].firmware);
 }
