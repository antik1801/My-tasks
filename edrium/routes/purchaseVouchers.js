"use strict";

const xml2js = require("xml2js");
const axios = require("axios");

const calculateJsonData = (result) => {
  return result.ENVELOPE.BSNAME.map((bsName, index) => ({
    name: bsName.DSPACCNAME.DSPDISPNAME,
    amount: parseFloat(result.ENVELOPE.BSAMT[index].BSMAINAMT) || 0,
  }));
};

const convertXMLtoJSON = (data) => {
  let jsonData = null;
  xml2js.parseString(data, { explicitArray: false }, (err, result) => {
    if (err) {
      throw new Error("Error converting XML to JSON.");
    }
    jsonData = calculateJsonData(result);
  });
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
};

exports.purchaseVouchers = async (req, res) => {
  const xmlRequest = `
  <ENVELOPE Action="">
  <HEADER>
    <VERSION>1</VERSION>
    <TALLYREQUEST>EXPORT</TALLYREQUEST>
    <TYPE>COLLECTION</TYPE>
    <ID>CustomVoucherCollection</ID>
  </HEADER>
  <BODY>
    <DESC>
      <STATICVARIABLES>
        <SVCURRENTCOMPANY>ABC Company Ltd</SVCURRENTCOMPANY>
        <SVFROMDATE TYPE="Date">01-04-2022</SVFROMDATE>
        <SVTODATE TYPE="Date">31-03-2023</SVTODATE>
      </STATICVARIABLES>
      <TDL>
        <TDLMESSAGE>
          <COLLECTION ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No" NAME="CustomVoucherCollection">
            <TYPE>Vouchers : VoucherType</TYPE>
            <CHILDOF>$$VchTypePurchase</CHILDOF>
            <BELONGSTO>Yes</BELONGSTO>
            <NATIVEMETHOD>*, *.*</NATIVEMETHOD>
          </COLLECTION>
        </TDLMESSAGE>
      </TDL>
    </DESC>
  </BODY>
</ENVELOPE>
  `;
  try {
    const jsonData = await parseResponse(xmlRequest);
    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
