// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract mywork{

    struct studentdetail{
        uint256 rollno;
        string name;
        string gender;
        string location;
    }
    
    mapping (uint256 => studentdetail) public student;

    function storestudentdetail(uint256 _rollnumber,string memory _name,string memory _gender,string memory _location)public {

        studentdetail memory newstudent = studentdetail({
            name: _name,
            rollno: _rollnumber,
            gender: _gender,
            location: _location

        });

        student[_rollnumber] = newstudent;
    }
}