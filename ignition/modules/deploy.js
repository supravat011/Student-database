const {buildModule} = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('token',(m)=>{
    const initial = m.getParameter("initialSupply",100)
    const name = m.getParameter("tokenName","Demo")
    const symbol = m.getParameter("tokenSymbol","DEM")
    const decimalUnits = m.getParameter("decimalUnits",10)
    const students = m.contract('SimpleToken');
    return {students};
})