"use strict";

const xml2js = require('xml2js');
const axios = require("axios");

const calculateJsonData = (result) => {
  return result
  return result.ENVELOPE.BSNAME.map((bsName, index) => ({
    name: bsName.DSPACCNAME.DSPDISPNAME,
    amount: parseFloat(result.ENVELOPE.BSAMT[index].BSMAINAMT) || 0,
  }));
};

const convertXMLtoJSON = (data) => {
  let jsonData = null;
  xml2js.parseString(
    data,
    { explicitArray: false },
    (err, result) => {
      if (err) {
        throw new Error("Error converting XML to JSON.");
      }
      jsonData = calculateJsonData(result);
    }
  );
  return jsonData;
};

const sendPostRequest = async (xmlRequest) => {
  const response = await axios.post("http://localhost:9000", xmlRequest, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
  console.log(response.data);
  return response.data;
};

const parseResponse = async (xmlRequest) => {
  try {
    const data = await sendPostRequest(xmlRequest);
    return convertXMLtoJSON(data);
  } catch (error) {
    throw new Error("Error sending Tally request.");
  }
}

exports.BalanceSheet = async (req, res) => {
  const xmlRequest = `
    <ENVELOPE>
      <HEADER>
        <VERSION>1</VERSION>
        <TALLYREQUEST>Export</TALLYREQUEST>
        <TYPE>Data</TYPE>
        <ID>Balance Sheet</ID>
      </HEADER>
      <BODY>
        <DESC>
          <STATICVARIABLES>
            <EXPLODEFLAG>Yes</EXPLODEFLAG>
            <SVEXPORTFORMAT>$$SysName:XML</SVEXPORTFORMAT>
          </STATICVARIABLES>
        </DESC>
      </BODY>
    </ENVELOPE>
  `;

  try {
    console.log(xmlRequest)
    const jsonData = await parseResponse(xmlRequest);
    console.log(jsonData)
    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};