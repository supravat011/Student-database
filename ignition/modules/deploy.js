const {buildModule} = require('@nomicfoundation/hardhat-ignition/modules');
module.exports = buildModule('StudentDB',(m)=>{
    const students = m.contract('mywork');
    return {students};
})