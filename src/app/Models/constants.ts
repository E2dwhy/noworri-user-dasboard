export const USER_SESSION_KEY = "noworri-user-session";
export const SESSION_STORAGE_KEY = "user_session_data";
export const BUSINESS_DATA_KEY = "business_data";
export const SUMMARY_DATA_KEY = "summary_data";
export enum TRANSACTION_SOURCE {
  BUSINESS = "e-commerce",
  VENDOR = "vendor",
}

export const TRANSACTION_TABLE_LABELS = [
  {
    text: 'Withdrawn',
    textClass: 'text-blue',
    cssClasses: ['text-blue','bg-blue-light'],
    bgClass: 'bg-blue-light',
    previewClass: 'bg-green'
  },
  {
    text: 'Secured',
    textClass: 'text-green',
    cssClasses: ['text-green','bg-cyan-light'],
    bgClass: 'bg-cyan-light',
    previewClass: 'bg-green'
  },
  {
    text: 'Completed',
    cssClasses: ['text-green','bg-green-light'],
    textClass: 'text-green',
    bgClass: 'bg-green-light',
    previewClass: 'bg-green'
  },
  {
    text: 'Funds Released',
    cssClasses: ['text-purple','bg-purple-light'],
    textClass: 'text-purple',
    bgClass: 'bg-puple-light',
    previewClass: 'bg-cyan'
  },
  {
    text: 'Pending',
    cssClasses: ['text-teal','bg-teal-light'],
    textClass: 'text-teal',
    bgClass: 'bg-teal-light',
    previewClass: 'bg-teal'
  },
  {
    text: 'Cancelled',
    cssClasses: ['text-red','bg-red-light'],
    textClass: 'text-red',
    bgClass: 'bg-red-light',
    previewClass: 'bg-purple'
  },
];

export const INDUSTRIES = [
  "Agriculture",
  "Commerce",
  "Education",
  "Gaming",
  "Financial Services",
  "Health",
  "Hospitality",
  "Non-profits",
  "Leisure & Entertainment",
  "Logistics",
  "Travel",
  "Utilities",
  "Retail",
];

export const CATEGORIES = [
  "Retail",
  "Online shopping",
  "Financial Cooperatives",
  "Corporate Services",
  "Payment Solution Service Providers",
  "Insurance",
  "Investments",
  "Agricultural Investments",
  "Lending",
  "Bill Payments",
  "Payroll",
  "Remittances",
  "Savings",
  "Mobile Wallets",
];

export const NATIONALITIES = [
  "Afghan",
  "Albanian",
  "Algerian",
  "American",
  "Andorran",
  "Angolan",
  "Antiguans",
  "Argentinean",
  "Armenian",
  "Australian",
  "Austrian",
  "Azerbaijani",
  "Bahamian",
  "Bahraini",
  "Bangladeshi",
  "Barbadian",
  "Barbudans",
  "Batswana",
  "Belarusian",
  "Belgian",
  "Belizean",
  "Beninese",
  "Bhutanese",
  "Bolivian",
  "Bosnian",
  "Brazilian",
  "British",
  "Bruneian",
  "Bulgarian",
  "Burkinabe",
  "Burmese",
  "Burundian",
  "Cambodian",
  "Cameroonian",
  "Canadian",
  "Cape Verdean",
  "Central African",
  "Chadian",
  "Chilean",
  "Chinese",
  "Colombian",
  "Comoran",
  "Congolese",
  "Costa Rican",
  "Croatian",
  "Cuban",
  "Cypriot",
  "Czech",
  "Danish",
  "Djibouti",
  "Dominican",
  "Dutch",
  "East Timorese",
  "Ecuadorean",
  "Egyptian",
  "Emirian",
  "Equatorial Guinean",
  "Eritrean",
  "Estonian",
  "Ethiopian",
  "Fijian",
  "Filipino",
  "Finnish",
  "French",
  "Gabonese",
  "Gambian",
  "Georgian",
  "German",
  "Ghanaian",
  "Greek",
  "Grenadian",
  "Guatemalan",
  "Guinea-Bissauan",
  "Guinean",
  "Guyanese",
  "Haitian",
  "Herzegovinian",
  "Honduran",
  "Hungarian",
  "I-Kiribati",
  "Icelander",
  "Indian",
  "Indonesian",
  "Iranian",
  "Iraqi",
  "Irish",
  "Israeli",
  "Italian",
  "Ivorian",
  "Jamaican",
  "Japanese",
  "Jordanian",
  "Kazakhstani",
  "Kenyan",
  "Kittian and Nevisian",
  "Kuwaiti",
  "Kyrgyz",
  "Laotian",
  "Latvian",
  "Lebanese",
  "Liberian",
  "Libyan",
  "Liechtensteiner",
  "Lithuanian",
  "Luxembourger",
  "Macedonian",
  "Malagasy",
  "Malawian",
  "Malaysian",
  "Maldivan",
  "Malian",
  "Maltese",
  "Marshallese",
  "Mauritanian",
  "Mauritian",
  "Mexican",
  "Micronesian",
  "Moldovan",
  "Monacan",
  "Mongolian",
  "Moroccan",
  "Mosotho",
  "Motswana",
  "Mozambican",
  "Namibian",
  "Nauruan",
  "Nepalese",
  "New Zealander",
  "Nicaraguan",
  "Nigerian",
  "Nigerien",
  "North Korean",
  "Northern Irish",
  "Norwegian",
  "Omani",
  "Pakistani",
  "Palauan",
  "Panamanian",
  "Papua New Guinean",
  "Paraguayan",
  "Peruvian",
  "Polish",
  "Portuguese",
  "Qatari",
  "Romanian",
  "Russian",
  "Rwandan",
  "Saint Lucian",
  "Salvadoran",
  "Samoan",
  "San Marinese",
  "Sao Tomean",
  "Saudi",
  "Scottish",
  "Senegalese",
  "Serbian",
  "Seychellois",
  "Sierra Leonean",
  "Singaporean",
  "Slovakian",
  "Slovenian",
  "Solomon Islander",
  "Somali",
  "South African",
  "South Korean",
  "Spanish",
  "Sri Lankan",
  "Sudanese",
  "Surinamer",
  "Swazi",
  "Swedish",
  "Swiss",
  "Syrian",
  "Taiwanese",
  "Tajik",
  "Tanzanian",
  "Thai",
  "Togolese",
  "Tongan",
  "Trinidadian or Tobagonian",
  "Tunisian",
  "Turkish",
  "Tuvaluan",
  "Ugandan",
  "Ukrainian",
  "Uruguayan",
  "Uzbekistani",
  "Venezuelan",
  "Vietnamese",
  "Welsh",
  "Yemenite",
  "Zambian",
  "Zimbabwean",
];

export const COUNTRIES = [
  { name: "Albania", code: "AL" },
  { name: "Åland Islands", code: "AX" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas (the)", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia (Plurinational State of)", code: "BO" },
  { name: "Bonaire, Sint Eustatius and Saba", code: "BQ" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory (the)", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cabo Verde", code: "CV" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cayman Islands (the)", code: "KY" },
  { name: "Central African Republic (the)", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands (the)", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros (the)", code: "KM" },
  { name: "Congo (the Democratic Republic of the)", code: "CD" },
  { name: "Congo (the)", code: "CG" },
  { name: "Cook Islands (the)", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Curaçao", code: "CW" },
  { name: "Cyprus", code: "CY" },
  { name: "Czechia", code: "CZ" },
  { name: "Côte d'Ivoire", code: "CI" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic (the)", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Eswatini", code: "SZ" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (the) [Malvinas]", code: "FK" },
  { name: "Faroe Islands (the)", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories (the)", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia (the)", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and McDonald Islands", code: "HM" },
  { name: "Holy See (the)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran (Islamic Republic of)", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea (the Democratic People's Republic of)", code: "KP" },
  { name: "Korea (the Republic of)", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People's Democratic Republic (the)", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands (the)", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia (Federated States of)", code: "FM" },
  { name: "Moldova (the Republic of)", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands (the)", code: "NL" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger (the)", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands (the)", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestine, State of", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines (the)", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Republic of North Macedonia", code: "MK" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation (the)", code: "RU" },
  { name: "Rwanda", code: "RW" },
  { name: "Réunion", code: "RE" },
  { name: "Saint Barthélemy", code: "BL" },
  { name: "Saint Helena, Ascension and Tristan da Cunha", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Martin (French part)", code: "MF" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Sint Maarten (Dutch part)", code: "SX" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan (the)", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan (Province of China)", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands (the)", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates (the)", code: "AE" },
  {
    name: "United Kingdom of Great Britain and Northern Ireland (the)",
    code: "GB",
  },
  { name: "United States Minor Outlying Islands (the)", code: "UM" },
  { name: "United States of America (the)", code: "US" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela (Bolivarian Republic of)", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands (British)", code: "VG" },
  { name: "Virgin Islands (U.S.)", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

export const countryISO = {
  BD: "880",
  BE: "32",
  BF: "226",
  BG: "359",
  BA: "387",
  BB: "+1-246",
  WF: "681",
  BL: "590",
  BM: "+1-441",
  BN: "673",
  BO: "591",
  BH: "973",
  BI: "257",
  BJ: "229",
  BT: "975",
  JM: "+1-876",
  BV: "",
  BW: "267",
  WS: "685",
  BQ: "599",
  BR: "55",
  BS: "+1-242",
  JE: "+44-1534",
  BY: "375",
  BZ: "501",
  RU: "7",
  RW: "250",
  RS: "381",
  TL: "670",
  RE: "262",
  TM: "993",
  TJ: "992",
  RO: "40",
  TK: "690",
  GW: "245",
  GU: "+1-671",
  GT: "502",
  GS: "",
  GR: "30",
  GQ: "240",
  GP: "590",
  JP: "81",
  GY: "592",
  GG: "+44-1481",
  GF: "594",
  GE: "995",
  GD: "+1-473",
  GB: "44",
  GA: "241",
  SV: "503",
  GN: "224",
  GM: "220",
  GL: "299",
  GI: "350",
  GH: "233",
  OM: "968",
  TN: "216",
  JO: "962",
  HR: "385",
  HT: "509",
  HU: "36",
  HK: "852",
  HN: "504",
  HM: " ",
  VE: "58",
  PR: "+1-787 and 1-939",
  PS: "970",
  PW: "680",
  PT: "351",
  SJ: "47",
  PY: "595",
  IQ: "964",
  PA: "507",
  PF: "689",
  PG: "675",
  PE: "51",
  PK: "92",
  PH: "63",
  PN: "870",
  PL: "48",
  PM: "508",
  ZM: "260",
  EH: "212",
  EE: "372",
  EG: "20",
  ZA: "27",
  EC: "593",
  IT: "39",
  VN: "84",
  SB: "677",
  ET: "251",
  SO: "252",
  ZW: "263",
  SA: "966",
  ES: "34",
  ER: "291",
  ME: "382",
  MD: "373",
  MG: "261",
  MF: "590",
  MA: "212",
  MC: "377",
  UZ: "998",
  MM: "95",
  ML: "223",
  MO: "853",
  MN: "976",
  MH: "692",
  MK: "389",
  MU: "230",
  MT: "356",
  MW: "265",
  MV: "960",
  MQ: "596",
  MP: "+1-670",
  MS: "+1-664",
  MR: "222",
  IM: "+44-1624",
  UG: "256",
  TZ: "255",
  MY: "60",
  MX: "52",
  IL: "972",
  FR: "33",
  IO: "246",
  SH: "290",
  FI: "358",
  FJ: "679",
  FK: "500",
  FM: "691",
  FO: "298",
  NI: "505",
  NL: "31",
  NO: "47",
  NA: "264",
  VU: "678",
  NC: "687",
  NE: "227",
  NF: "672",
  NG: "234",
  NZ: "64",
  NP: "977",
  NR: "674",
  NU: "683",
  CK: "682",
  XK: "",
  CI: "225",
  CH: "41",
  CO: "57",
  CN: "86",
  CM: "237",
  CL: "56",
  CC: "61",
  CA: "1",
  CG: "242",
  CF: "236",
  CD: "243",
  CZ: "420",
  CY: "357",
  CX: "61",
  CR: "506",
  CW: "599",
  CV: "238",
  CU: "53",
  SZ: "268",
  SY: "963",
  SX: "599",
  KG: "996",
  KE: "254",
  SS: "211",
  SR: "597",
  KI: "686",
  KH: "855",
  KN: "+1-869",
  KM: "269",
  ST: "239",
  SK: "421",
  KR: "82",
  SI: "386",
  KP: "850",
  KW: "965",
  SN: "221",
  SM: "378",
  SL: "232",
  SC: "248",
  KZ: "7",
  KY: "+1-345",
  SG: "65",
  SE: "46",
  SD: "249",
  DO: "+1-809 and 1-829",
  DM: "+1-767",
  DJ: "253",
  DK: "45",
  VG: "+1-284",
  DE: "49",
  YE: "967",
  DZ: "213",
  US: "1",
  UY: "598",
  YT: "262",
  UM: "1",
  LB: "961",
  LC: "+1-758",
  LA: "856",
  TV: "688",
  TW: "886",
  TT: "+1-868",
  TR: "90",
  LK: "94",
  LI: "423",
  LV: "371",
  TO: "676",
  LT: "370",
  LU: "352",
  LR: "231",
  LS: "266",
  TH: "66",
  TF: "",
  TG: "228",
  TD: "235",
  TC: "+1-649",
  LY: "218",
  VA: "379",
  VC: "+1-784",
  AE: "971",
  AD: "376",
  AG: "+1-268",
  AF: "93",
  AI: "+1-264",
  VI: "+1-340",
  IS: "354",
  IR: "98",
  AM: "374",
  AL: "355",
  AO: "244",
  AQ: "",
  AS: "+1-684",
  AR: "54",
  AU: "61",
  AT: "43",
  AW: "297",
  IN: "91",
  AX: "+358-18",
  AZ: "994",
  IE: "353",
  ID: "62",
  UA: "380",
  QA: "974",
  MZ: "258",
};
