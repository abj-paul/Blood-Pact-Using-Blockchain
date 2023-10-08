//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.15;

import "hardhat/console.sol";

struct Pact {
    address individualOne ;
    address individualTwo;
    string pactStatement;
    uint pactPenality;
}

contract BloodPact {
    Pact[] private pactList;
    string public systemName;

    constructor(string memory _systemName) {
        console.log("Constructor of BloodPact running. Creating the blood pact system:", _systemName);
    }

    function getPact(string memory _individualOne) public view returns (string memory) {
        for (uint i = 0; i < pactList.length; i++) {
            if (keccak256(abi.encodePacked(pactList[i].individualOne)) == keccak256(abi.encodePacked(_individualOne))) {
                return pactList[i].pactStatement;
            }
        }

        return "Not Found";
    }

    function setNewPact(Pact memory _pact) public {
        pactList.push(_pact);
    }

    function getAllPacts() public view returns (Pact[] memory){
        return pactList;
    }

    function checkContractStatus() public pure returns (string memory) {
        console.log("The contract is doing mighty fine!");
        return "The contract is doing mighty fine!";
    }
}