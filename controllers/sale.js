const Sale = require('../models/sales');
const Lead = require('../models/leads');
const Agent = require('../models/agents');

const createSale = async (req, res) => {
  try {
    const { agentmail, leadmail, productsSold, saleDate } = req.body;

    
    if (!agentmail || !leadmail) {
      return res.status(400).json({ message: "Agent email and lead email are required." });
    }

  
    const agent = await Agent.findOne({ email: agentmail });
    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }

   
    const lead = await Lead.findOne({ email: leadmail });
    console.log(lead)
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    
    const existingSale = await Sale.findOne({ agentmail, leadmail });
    if (existingSale) {
      return res.status(400).json({ message: "Sale already exists for this lead by this agent." });
    }

    const newSale = new Sale({
      agentmail,
      leadmail,
      productsSold,
      saleDate: saleDate || Date.now()
    });

    
    await newSale.save();

    return res.status(201).json({ message: "Sale recorded successfully", sale: newSale });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = createSale;
