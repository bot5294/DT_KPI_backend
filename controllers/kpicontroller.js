const { ObjectId } = require("mongodb");

module.exports.submit = (req, res) => {
  const db = req.app.locals.db;
  const collection = db.collection("kpi_data");
  try {
    /*
    NOLOC : No of lines of code
    NOFSD: No of frontend screens done,
    BSH: Brainstroming Session hours,
    NOTBC: No of Threadbuilder created,
    NOCITB: No of Character in Thread Builder,
    NOA: No of Articles ,
    CCOA: Character Count of Articles,
    FI: Functionality Implemented,
    NOR: No of Reflections,
    NOCC: No of Components Created,
    */
    // let uid = req.body.uid;
    let { uid, NOLOC, NOFSD, BSH, NOTBC, NOCITB, NOA, CCOA, FI, NOR, NOCC } =
      req.body;
    // find by userid if kpi_scorecard is present then update kpi_scorecard
    // else if kpi_scorecard not present for this uid, create new record
    // in kpi_data collection
    collection
      .findOneAndUpdate(
        { uid: new ObjectId(uid) },
        {
          $set: {
            kpi_scorecard: {
              NOLOC,
              NOFSD,
              BSH,
              NOTBC,
              NOCITB,
              NOA,
              CCOA,
              FI,
              NOR,
              NOCC,
            },
          },
        },
        { upsert: true, returnNewDocument: true, returnDocument: "after" }
      )
      .then((result) => {
        if (result) {
          return res.status(200).json({
            message: "Here is the updated record",
            record: result,
          });
        }
      });
  } catch (error) {
    console.log(`Error in submiting kpis : ${error}`);
  }
};
