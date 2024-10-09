const Sale = require('../models/sales');
const Agent = require('../models/agents');

const getSalesSummary = async (req, res) => {
  try {
    const { agent_email } = req.params;

    // Check if agent exists
    const agent = await Agent.findOne({ email: agent_email });
    if (!agent) {
      return res.status(404).json({ message: "Agent not registered." });
    }

    // Fetch sales for the agent
    const sales = await Sale.find({ agentmail: agent_email });

    if (sales.length === 0) {
      return res.status(404).json({ message: "No sales found for this agent." });
    }

    // Calculate the total amount
    const totalAmount = sales.reduce((total, sale) => {
      return total + sale.productsSold.reduce((sum, product) => {
        return sum + (product.price * product.quantity);
      }, 0);
    }, 0);

    // Return the sales and total amount
    res.status(200).json({ sales, totalAmount });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getSalesSummary;
