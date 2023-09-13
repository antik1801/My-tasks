const express = require("express")
const app = express()
module.exports = app
app.use(express.json())
const PORT = process.env.PORT || 5001

const tally = require("./routes/tally")
const tallyTest = require("./routes/tallyTest")
const paymentVouchers = require('./routes/paymentVouchers')
const contraVouchers = require("./routes/contraVouchers")
const journalVouchers = require("./routes/journalVouchers")
const purchaseOrderVouchers = require("./routes/purchaseOrderVouchers")
const purchaseVouchers = require("./routes/purchaseVouchers")
const reciptNoteVouchers = require("./routes/reciptNoteVouchers")
const reversingJournalVouchers = require("./routes/reversingJournalVouchers")
const salesOrderVouchers = require("./routes/salesOrderVouchers")
const salesVouchers = require("./routes/salesVouchers")
const jobWorkoutVouchers = require("./routes/jobWorkoutVouchers")
const jobWorkinVouchers = require("./routes/jobWorkinVouchers")
const materialinVouchers = require("./routes/materialinVouchers")
const materialOutVouchers = require("./routes/materialOutVouchers")
const memoVouchers = require("./routes/memoVouchers")
const deliveryNoteVouchers = require("./routes/deliveryNoteVouchers")
const stockJournalVouchers = require("./routes/stockJournelVouchers")
const physicalStockVouchers = require("./routes/physicalStockVouchers")
const rejectionInVouchers = require("./routes/rejectionInVouchers")
const rejectionOutVouchers = require("./routes/rejectionOutVouchers")




app.get("/api/tally/BalanceSheet.json", tally.BalanceSheet)
app.get("/api/tally/tallyTest.json", tallyTest.tallyTest)
app.get("/api/tally/paymentVouchers.json", paymentVouchers.paymentVouchers)
app.get("/api/tally/contraVouchers.json", contraVouchers.contraVouchers)
// app.get("/api/tally/journalVouchers.json", journalVouchers.journalVouchers)
// app.get("/api/tally/purchaseOrderVouchers.json", purchaseOrderVouchers.purchaseOrderVouchers)
// app.get("/api/tally/purchaseVouchers.json", purchaseVouchers.purchaseVouchers)
app.get("/api/tally/reciptNoteVouchers.json", reciptNoteVouchers.reciptNoteVouchers)
// app.get("/api/tally/reversingJournalVouchers.json", reversingJournalVouchers.reversingJournalVouchers)
// app.get("/api/tally/salesOrderVouchers.json", salesOrderVouchers.salesOrderVouchers)
// app.get("/api/tally/salesVouchers.json", salesVouchers.salesVouchers)



app.get("/", (req,res) =>{
    res.send("Tally Server is running")
})


app.listen(PORT, ()=>{
    console.log(`Tally is running on port ${PORT}`)
})