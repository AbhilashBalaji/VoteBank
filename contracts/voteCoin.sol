pragma solidity ^0.5.1;

import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";

contract voteCoin is ERC20Mintable {
    string public name = "VoteCoin";
    string public symbol = "VC";
    uint8 public decimals = 0;
    uint256 public INITIAL_SUPPLY = 1000000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);

    }
    function addmint(address account) public returns(bool) {
        addMinter(account);
        return true;
    }

}
