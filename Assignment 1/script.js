// Function to calculate gift voucher value based on bonus points
function calculateVoucher(points) {
    // Conversion rate: 100 points = ₹100
    const conversionRate = 1; // 1 point = ₹1
    return points * conversionRate;
}

// Function to display the reward
function displayReward(customerName, bonusPoints) {
    // Calculate the voucher value
    const voucherValue = calculateVoucher(bonusPoints);

    // Display the reward message
    console.log(`Hello ${customerName}!`);
    console.log(`You have ${bonusPoints} bonus points.`);
    console.log(`You are eligible for a gift voucher worth ₹${voucherValue}.`);
}

// Example usage
const customerName = "Rahul";
const bonusPoints = 350; // Example bonus points

displayReward(customerName, bonusPoints);
