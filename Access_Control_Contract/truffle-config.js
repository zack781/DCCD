module.exports = {
  networks: {
      development: {
          host: "127.0.0.1",
          port: 7545,
          network_id: "*" // Match any network id
      }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.15", // Update this to match your desired Solidity version
    }
  }
};