pragma solidity 0.5.1;

import {voteCoin} from "./voteToken.sol";

// library Library {
//     struct vote {
//         uint256 partyID;
//         uint8 isVoted;
//         //need to check if initialised
//     }
// }

contract Voter {
    mapping(uint256 => address) partyMap;
    mapping(bytes32 => uint256) isvoted;
    address partyToken;
    voteCoin token;
    event partyAdded(uint256 partyID, address partyAddr);
    event voterAdded(string hshVoterID, uint256 partyID);
    event hashAdded(string hsh);

    constructor(address _token) public {
        partyToken = _token;
    }
    function addHash(string memory hsh) public returns (uint8) {
        bytes32 h = stringToBytes32(hsh);

        //add key already present condition
        require(isvoted[h] == 0, "Voter already added / voted");
        isvoted[h] = -1;
        emit hashAdded(hsh);

    }

    function addPartyMap(uint256 partyID, address partyAddr)
        public
        returns (bool)
    {
        require(partyMap[partyID] == address(0), "PartyID already assigned");
        partyMap[partyID] = partyAddr;
        emit partyAdded(partyID, partyAddr);
        // return (partyMap[partyID] != address(0));
    }

    function Vote(string memory hshVoterID, uint256 partyID) public returns (bytes32) {
        bytes32 h = stringToBytes32(hshVoterID);
        require(partyMap[partyID] != address(0), "Unknown Party ID");
        require(isvoted[h] < 1, "Voter Not present  already voted");
        emit voterAdded(hshVoterID, partyID);
<<<<<<< HEAD:contracts/Voter.sol
        isVoted[h] = 1;
        return _partyToken(partyID);
=======
        isVoted[h] = -1;
        return _partyToken(hshVoterID,partyID);
>>>>>>> b1675b0d66986a468f99bc8a23ce80858db07dc1:contracts/Voter.Sol

    }

    function _partyToken(uint256 partyID) internal returns (bytes32) {
        token = voteCoin(partyToken);
        token.mint(partyMap[partyID], 1);
        string memory p = uint2str(partyID);
        return keccak256(hshVoterID, p);
    }
    // cast vote ; get returned a hash ; mint / canidate

    function uint2str(uint256 _i)
        internal
        pure
        returns (string memory _uintAsString)
    {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len - 1;
        while (_i != 0) {
            bstr[k--] = bytes1(uint8(48 + (_i % 10)));
            _i /= 10;
        }
        return string(bstr);
    }

    function stringToBytes32(string memory source)
        internal
        pure
        returns (bytes32 result)
    {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }
}
