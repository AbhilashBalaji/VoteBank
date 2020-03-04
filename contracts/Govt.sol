pragma solidity 0.5.1;

library Library {
    struct vote {
        uint256 partyID;
        bool isVoted;
    }
}

contract Govt {
    using Library for Library.vote;

    mapping(bytes32 => Library.vote) vote;
    constructor() public {}

    function addHash(string memory hsh) public returns (bool) {
        bytes32 h = stringToBytes32(hsh);

        if (vote[h].isVoted) revert("Voter  Already Voted");
        else vote[h].isVoted = false;
        return true;

    }

    function addVote(string memory hsh, uint256 party) public returns (bool) {
        bytes32 h = stringToBytes32(hsh);
        if (vote[h].isVoted) revert("Already Voted");
        else {
            vote[h].partyID = party;
            vote[h].isVoted = true;
            return true;
        }
    }

    function stringToBytes32(string memory source)
        internal
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

    function getParty(string memory hsh) public returns (uint256) {
        bytes32 h = stringToBytes32(hsh);
        if (vote[h].isVoted == false) revert("Not Voted");
        else return vote[h].partyID;
    }

}
